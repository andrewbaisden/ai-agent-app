from agents.base_agent import BaseAgent


class WelcomeAgent(BaseAgent):
    def __init__(self):
        super().__init__(
            name="Greeter",
            description="I'm the welcome agent for this portfolio. I can help guide you to the right section based on your interests.",
            avatar="welcome_avatar.png"
        )

    def greet(self, visitor_type=None):

        if visitor_type == "employer":
            return self.get_response(
                "Generate a friendly, professional greeting for a potential employer visiting a programmer's portfolio website. "
                "Mention that they can explore the Projects section to see technical skills and the Career section for professional experience."
            )
        elif visitor_type == "client":
            return self.get_response(
                "Generate a friendly, business-oriented greeting for a potential client visiting a programmer's portfolio website. "
                "Mention that they can check out the Projects section for examples of past work and the Client section for service details."
            )
        elif visitor_type == "fellow_programmer":
            return self.get_response(
                "Generate a friendly, casual greeting for a fellow programmer visiting a portfolio website. "
                "Mention that they can explore the Projects section for technical details and code samples."
            )
        else:
            return self.get_response(
                "Generate a friendly, general greeting for a visitor to a programmer's portfolio website. "
                "Ask if they are an employer, client, or fellow programmer to provide more tailored information."
            )

    def suggest_section(self, interest):

        prompt = f"Based on a visitor expressing interest in '{interest}', suggest which section of a programmer's portfolio they should visit. Options include: Projects, Career, Client Work, About Me, Contact. Explain why in 1-2 sentences."
        return self.get_response(prompt)
