from agents.base_agent import BaseAgent
import requests
import os
import json


class ResearchAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="ResearchAssistant",
            description="I'm the research specialist. I can search the web for information about technologies, trends, and industry news.",
            avatar="research_avatar.png"
        )
        self.api_key = os.getenv("GROQ_API_KEY")

    def search_web(self, query):

        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }

        payload = {
            "model": "llama-3.3-70b-versatile",
            "messages": [
                {"role": "system", "content": "You are a helpful research assistant."},
                {"role": "user", "content": f"Search the web for: {query}"}
            ],
            "tools": [
                {
                    "type": "web_search"
                }
            ]
        }

        try:
            response = requests.post(
                "https://api.groq.com/openai/v1/chat/completions",
                headers=headers,
                json=payload
            )

            if response.status_code == 200:
                result = response.json()
                return result["choices"][0]["message"]["content"]
            else:
                return f"Error searching the web: {response.status_code} - {response.text}"
        except Exception as e:
            return f"Error searching the web: {str(e)}"

    def research_technology(self, technology):

        query = f"latest developments and best practices for {technology} in software development"
        search_results = self.search_web(query)

        prompt = f"""
        Based on the following search results about {technology}, provide a concise summary of:
        1. What it is
        2. Current state and popularity
        3. Key features and benefits
        4. Common use cases
        5. Future trends

        Search Results:
        {search_results}

        Format the response in markdown with appropriate sections.
        """
        return self.get_response(prompt)

    def compare_technologies(self, tech1, tech2):

        query = f"comparison between {tech1} and {tech2} for software development"
        search_results = self.search_web(query)

        prompt = f"""
        Based on the following search results comparing {tech1} and {tech2}, provide a detailed comparison including:
        6. Core differences
        7. Performance considerations
        8. Learning curve
        9. Community support
        10. Use case recommendations

        Search Results:
        {search_results}

        Format the response in markdown with a comparison table and explanatory text.
        """
        return self.get_response(prompt)

    def get_industry_trends(self):

        query = "latest trends in software development industry"
        search_results = self.search_web(query)

        prompt = f"""
        Based on the following search results about software development trends, provide a summary of:
        11. Emerging technologies
        12. Industry shifts
        13. In-demand skills
        14. Future predictions

        Search Results:
        {search_results}

        Format the response in markdown with appropriate sections and highlights.
        """
        return self.get_response(prompt)
