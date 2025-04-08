from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
import json
import requests
from flask_cors import CORS
from agents.base_agent import BaseAgent
from agents.welcome_agent import WelcomeAgent
from agents.project_agent import ProjectAgent
from agents.career_agent import CareerAgent
from agents.client_agent import ClientAgent
from agents.research_agent import ResearchAgent


load_dotenv()


app = Flask(__name__)
CORS(app)


welcome_agent = WelcomeAgent()
project_agent = ProjectAgent()
career_agent = CareerAgent()
client_agent = ClientAgent()
research_agent = ResearchAgent()


@app.route('/static/images/default_avatar.png')
@app.route('/static/images/default_project.jpg')
def block_default_images():

    response = app.make_response(
        b'GIF89a\x01\x00\x01\x00\x80\x00\x00\xff\xff\xff\x00\x00\x00!\xf9\x04\x01\x00\x00\x00\x00,\x00\x00\x00\x00\x01\x00\x01\x00\x00\x02\x02D\x01\x00;')
    response.headers['Content-Type'] = 'image/gif'

    response.headers['Cache-Control'] = 'public, max-age=31536000'
    response.headers['Expires'] = 'Thu, 31 Dec 2037 23:59:59 GMT'
    return response


@app.route('/api/welcome', methods=['POST'])
def welcome_agent_endpoint():
    data = request.json
    message = data.get('message', '')

    visitor_type = None
    if 'employer' in message.lower():
        visitor_type = 'employer'
    elif 'client' in message.lower():
        visitor_type = 'client'
    elif 'programmer' in message.lower() or 'developer' in message.lower():
        visitor_type = 'fellow_programmer'

    if 'interest' in message.lower() or 'looking for' in message.lower():

        interest = message.replace('interest', '').replace(
            'looking for', '').strip()
        response = welcome_agent.suggest_section(interest)
    else:
        response = welcome_agent.greet(visitor_type)

    return jsonify({'response': response})


@app.route('/api/project', methods=['POST'])
def project_agent_endpoint():
    data = request.json
    message = data.get('message', '')

    project_id = None
    if 'e-commerce' in message.lower() or 'ecommerce' in message.lower():
        project_id = 'project1'
    elif 'task' in message.lower() or 'management' in message.lower():
        project_id = 'project2'
    elif 'data' in message.lower() or 'visualization' in message.lower() or 'dashboard' in message.lower():
        project_id = 'project3'

    if project_id and ('tell me more' in message.lower() or 'details' in message.lower()):
        response = project_agent.get_project_details(project_id)
    elif 'list' in message.lower() or 'all projects' in message.lower():
        response = project_agent.get_project_list()
    elif project_id:

        response = project_agent.answer_technical_question(project_id, message)
    else:

        response = project_agent.get_response(
            f"The user asked: '{message}'. Respond as if you are a project specialist for a portfolio website. "
            "If they're asking about a specific project, suggest they mention one of the projects: "
            "E-commerce Platform, Task Management App, or Data Visualization Dashboard."
        )

    return jsonify({'response': response})


@app.route('/api/career', methods=['POST'])
def career_agent_endpoint():
    data = request.json
    message = data.get('message', '')

    if 'skills' in message.lower():
        response = career_agent.get_skills_summary()
    elif 'experience' in message.lower() or 'work history' in message.lower():
        response = career_agent.get_experience_summary()
    elif 'job' in message.lower() or 'position' in message.lower() or 'role' in message.lower():

        response = career_agent.assess_job_fit(message)
    else:

        response = career_agent.get_response(
            f"The user asked: '{message}'. Respond as if you are a career specialist for a portfolio website. "
            "Suggest they ask about skills, experience, or job fit assessment."
        )

    return jsonify({'response': response})


@app.route('/api/client', methods=['POST'])
def client_agent_endpoint():
    data = request.json
    message = data.get('message', '')

    if 'services' in message.lower() or 'offerings' in message.lower():
        response = client_agent.get_services_overview()
    elif 'web' in message.lower() and 'development' in message.lower():
        response = client_agent.get_service_details('web_development')
    elif 'mobile' in message.lower() and 'development' in message.lower():
        response = client_agent.get_service_details('mobile_development')
    elif 'consulting' in message.lower() or 'technical consulting' in message.lower():
        response = client_agent.get_service_details('consulting')
    elif 'process' in message.lower() or 'how does it work' in message.lower():
        response = client_agent.explain_process()
    elif 'proposal' in message.lower() or 'quote' in message.lower() or 'estimate' in message.lower():

        response = client_agent.generate_proposal(message)
    else:

        response = client_agent.get_response(
            f"The user asked: '{message}'. Respond as if you are a client specialist for a portfolio website. "
            "Suggest they ask about services, the client engagement process, or request a proposal."
        )

    return jsonify({'response': response})


@app.route('/api/research', methods=['POST'])
def research_agent_endpoint():
    data = request.json
    message = data.get('message', '')

    if 'compare' in message.lower() and ('vs' in message.lower() or 'versus' in message.lower()):

        tech_parts = message.lower().replace('compare', '').replace(
            'vs', ' ').replace('versus', ' ').split()
        tech1 = tech_parts[0] if len(tech_parts) > 0 else ''
        tech2 = tech_parts[-1] if len(tech_parts) > 1 else ''
        response = research_agent.compare_technologies(tech1, tech2)
    elif 'trends' in message.lower() or 'industry' in message.lower():
        response = research_agent.get_industry_trends()
    else:
        response = research_agent.search_web(message)

    return jsonify({'response': response})


if __name__ == '__main__':

    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
    app.config['TEMPLATES_AUTO_RELOAD'] = True   # Ensure templates reload

    @app.after_request
    def add_header(response):
        response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
        response.headers['Pragma'] = 'no-cache'
        response.headers['Expires'] = '0'
        return response

    app.run(host='0.0.0.0', port=5001, debug=True,
            use_reloader=False, threaded=True)
