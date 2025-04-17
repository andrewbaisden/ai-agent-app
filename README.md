# AI Agent App

A portfolio website with AI agents powered by Groq LLM that can answer questions about projects, skills, and provide research information.

![AI Agent App](/img/ai-agent-app-home.png 'AI Agent App')

## Features

- Multiple specialized AI agents (Welcome, Project, Career, Client, Research)
- React frontend with a modern chat interface
- Flask backend API
- Powered by Groq's LLama 3 model

## Prerequisites

- Node.js (v16+)
- Python (v3.8+)
- npm or yarn
- A Groq API key

## Installation

### 1. Clone this repository

```shell
git clone https://github.com/andrewbaisden/ai-agent-app.git
cd ai-agent-app
```

### 2. Set up environment variables

Create a `.env` file in the `backend` directory with your Groq API key:

```shell
GROQ_API_KEY="your_api_key_here"
```

You can get a Groq API key by signing up at [GroqCloud](https://console.groq.com/home).

### 3. Set up the backend

```shell
# Create a Python virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows, use: venv\Scripts\activate

# Install Python dependencies
pip3 install -r requirements.txt

# Start the Flask server
cd backend
python3 main.py
```

The backend server will run on [http://127.0.0.1:5001](http://127.0.0.1:5001).

### 4. Set up the frontend

In a new terminal window:

```shell
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The frontend will be available at [http://localhost:5173](http://localhost:5173).

## Usage

Once both the backend and frontend are running:

1. Open your browser and navigate to [http://localhost:5173](http://localhost:5173)
2. You'll be greeted by the Welcome Agent
3. Choose an agent to interact with based on what information you need:
   - **Welcome Agent**: Helps navigate the portfolio
   - **Project Agent**: Provides details about projects
   - **Career Agent**: Discusses skills and experience
   - **Client Agent**: Explains services and engagement process
   - **Research Agent**: Provides information on technologies and trends