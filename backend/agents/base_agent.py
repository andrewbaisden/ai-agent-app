import os
import requests
from dotenv import load_dotenv

load_dotenv()


class BaseAgent:
    def __init__(self, name, description, avatar="default_avatar.png"):

        self.name = name
        self.description = description
        self.avatar = avatar
        self.api_key = os.getenv("GROQ_API_KEY")

    def get_response(self, query, stream=False):

        try:
            headers = {
                "Authorization": f"Bearer {self.api_key}",
                "Content-Type": "application/json"
            }

            data = {
                "model": "llama3-8b-8192",
                "messages": [
                    {"role": "system", "content": f"You are {self.name}, {self.description}. Respond in a helpful, concise, and professional manner."},
                    {"role": "user", "content": query}
                ],
                "temperature": 0.7,
                "max_tokens": 500,
                "stream": stream
            }

            response = requests.post(
                "https://api.groq.com/openai/v1/chat/completions",
                headers=headers,
                json=data
            )

            if response.status_code == 200:
                return response.json()["choices"][0]["message"]["content"]
            else:
                return f"Error: {response.status_code} - {response.text}"
        except Exception as e:
            return f"An error occurred: {str(e)}"

    def print_response(self, query, stream=True):

        return self.get_response(query, stream=False)
