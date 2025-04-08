from agents.base_agent import BaseAgent


class ProjectAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="TechExpert",
            description="I'm the project specialist. I can provide detailed information about any project in this portfolio.",
            avatar="project_avatar.png"
        )

        self.projects = {
            "project1": {
                "name": "E-commerce Platform",
                "tech_stack": ["React", "Node.js", "MongoDB", "Express"],
                "description": "A full-stack e-commerce platform with user authentication, product catalog, shopping cart, and payment processing.",
                "highlights": ["Responsive design", "RESTful API", "Stripe integration", "JWT authentication"],
                "github_link": "https://github.com/username/ecommerce-platform",
                "demo_link": "https://ecommerce-demo.example.com"
            },
            "project2": {
                "name": "Task Management App",
                "tech_stack": ["Vue.js", "Firebase", "Tailwind CSS"],
                "description": "A real-time task management application with collaborative features, notifications, and progress tracking.",
                "highlights": ["Real-time updates", "User collaboration", "Drag-and-drop interface", "Progressive Web App"],
                "github_link": "https://github.com/username/task-manager",
                "demo_link": "https://taskmanager-demo.example.com"
            },
            "project3": {
                "name": "Data Visualization Dashboard",
                "tech_stack": ["Python", "Django", "D3.js", "PostgreSQL"],
                "description": "An interactive dashboard for visualizing complex datasets with filtering, sorting, and export capabilities.",
                "highlights": ["Interactive charts", "Data filtering", "CSV/PDF export", "Responsive design"],
                "github_link": "https://github.com/username/data-dashboard",
                "demo_link": "https://dataviz-demo.example.com"
            }
        }

    def get_project_list(self):

        project_list = "# Available Projects\n\n"
        for project_id, project in self.projects.items():
            project_list += f"## {project['name']}\n"
            project_list += f"**Tech Stack**: {', '.join(project['tech_stack'])}\n"
            project_list += f"{project['description']}\n\n"

        return project_list

    def get_project_details(self, project_id):

        if project_id in self.projects:
            project = self.projects[project_id]
            prompt = f"""
            Generate a detailed description for the following project:

            Project Name: {project['name']}
            Tech Stack: {', '.join(project['tech_stack'])}
            Description: {project['description']}
            Highlights: {', '.join(project['highlights'])}
            GitHub: {project['github_link']}
            Demo: {project['demo_link']}

            Include technical details about implementation challenges and solutions. Format the response in markdown.
            """
            return self.get_response(prompt)
        else:
            return "Project not found. Please check the project ID and try again."

    def answer_technical_question(self, project_id, question):

        if project_id in self.projects:
            project = self.projects[project_id]
            prompt = f"""
            Answer the following technical question about this project:

            Project Name: {project['name']}
            Tech Stack: {', '.join(project['tech_stack'])}
            Description: {project['description']}
            Highlights: {', '.join(project['highlights'])}

            Question: {question}

            Provide a detailed technical answer with code examples if relevant.
            """
            return self.get_response(prompt)
        else:
            return "Project not found. Please check the project ID and try again."
