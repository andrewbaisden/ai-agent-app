from agents.base_agent import BaseAgent


class ClientAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="BusinessAdvisor",
            description="I'm the client specialist. I can provide information about services, pricing, and project details.",
            avatar="client_avatar.png"
        )

        self.services = {
            "web_development": {
                "name": "Web Development",
                "description": "Custom web application development using modern frameworks and best practices.",
                "pricing_model": "Project-based or hourly",
                "price_range": "$5,000 - $50,000 depending on complexity",
                "timeline": "4-12 weeks depending on scope",
                "technologies": ["React", "Vue.js", "Node.js", "Django", "Flask"]
            },
            "mobile_development": {
                "name": "Mobile App Development",
                "description": "Native and cross-platform mobile application development for iOS and Android.",
                "pricing_model": "Project-based",
                "price_range": "$8,000 - $60,000 depending on complexity",
                "timeline": "6-16 weeks depending on scope",
                "technologies": ["React Native", "Flutter", "Swift", "Kotlin"]
            },
            "consulting": {
                "name": "Technical Consulting",
                "description": "Expert advice on architecture, technology stack, and development practices.",
                "pricing_model": "Hourly",
                "price_range": "$150 - $250 per hour",
                "timeline": "Ongoing or as needed",
                "technologies": ["Various based on client needs"]
            }
        }

        self.process = [
            "Initial consultation to understand requirements",
            "Proposal and quote preparation",
            "Contract signing and project kickoff",
            "Design and prototyping phase",
            "Development sprints with regular client feedback",
            "Testing and quality assurance",
            "Deployment and launch",
            "Post-launch support and maintenance"
        ]

    def get_services_overview(self):

        services_text = "# Services Offered\n\n"
        for service_id, service in self.services.items():
            services_text += f"## {service['name']}\n"
            services_text += f"{service['description']}\n\n"
            services_text += f"**Pricing Model**: {service['pricing_model']}\n"
            services_text += f"**Price Range**: {service['price_range']}\n"
            services_text += f"**Timeline**: {service['timeline']}\n"
            services_text += f"**Technologies**: {', '.join(service['technologies'])}\n\n"

        prompt = f"""
        Generate a professional overview of the following services for a programmer's portfolio website:

        {services_text}

        Format the response in markdown with appropriate sections and highlights.
        """
        return self.get_response(prompt)

    def get_service_details(self, service_id):

        if service_id in self.services:
            service = self.services[service_id]
            prompt = f"""
            Generate a detailed description for the following service:

            Service Name: {service['name']}
            Description: {service['description']}
            Pricing Model: {service['pricing_model']}
            Price Range: {service['price_range']}
            Timeline: {service['timeline']}
            Technologies: {', '.join(service['technologies'])}

            Include information about the value proposition, typical deliverables, and client benefits. Format the response in markdown.
            """
            return self.get_response(prompt)
        else:
            return "Service not found. Please check the service ID and try again."

    def explain_process(self):

        process_text = "# Client Engagement Process\n\n"
        for i, step in enumerate(self.process, 1):
            process_text += f"## Step {i}: {step}\n\n"

        prompt = f"""
        Based on the following client engagement process, generate a detailed explanation for potential clients:

        {process_text}

        For each step, provide a brief explanation of what happens, what the client can expect, and any deliverables. Format the response in markdown.
        """
        return self.get_response(prompt)

    def generate_proposal(self, project_description):

        prompt = f"""
        Generate a professional project proposal based on the following client requirements:

        Project Description:
        {project_description}

        Include the following sections:
        1. Project Understanding
        2. Proposed Approach
        3. Estimated Timeline
        4. Estimated Budget Range
        5. Next Steps

        Base your proposal on the services and processes described in the portfolio. Format the response in markdown.
        """
        return self.get_response(prompt)
