import { useState } from "react";
import Chat from "../components/Chat";

function Projects() {
  const initialMessage =
    "Hello! I'm ProjectAgent, the project specialist. I can provide detailed information about projects, technologies used, and challenges overcome. What would you like to know?";

  const [currentQuestion, setCurrentQuestion] = useState("");

  const askProjectQuestion = (question) => {
    setCurrentQuestion(`${question} [${Date.now()}]`);

    setTimeout(() => {
      setCurrentQuestion("");
    }, 500);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <h1 className="text-3xl font-bold mb-4">Projects</h1>
          <p className="text-lg mb-4">
            Here you can explore my portfolio of projects. Feel free to ask
            ProjectAgent for more details about any project.
          </p>
        </div>
        <div className="md:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">
                Chat with ProjectAgent
              </h5>
              <p className="text-gray-600 mb-4">
                Our project specialist can provide detailed information about
                projects, technologies, and challenges.
              </p>
              <Chat
                agentType="project"
                initialMessage={initialMessage}
                agentInitials="PA"
                directQuestion={currentQuestion}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="project-image-placeholder">E-commerce Platform</div>
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">
                E-commerce Platform
              </h5>
              <p className="text-gray-600 mb-4">
                A full-featured e-commerce platform with product management,
                shopping cart, and payment processing.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className="py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                    onClick={() =>
                      askProjectQuestion(
                        "Tell me more about the E-commerce Platform project"
                      )
                    }
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    className="py-1.5 px-3 text-sm border border-gray-500 text-gray-500 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      askProjectQuestion(
                        "What technologies were used in the E-commerce Platform project?"
                      )
                    }
                  >
                    Technologies
                  </button>
                </div>
                <span className="text-sm text-gray-500">2023</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="project-image-placeholder">Task Management App</div>
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">
                Task Management Application
              </h5>
              <p className="text-gray-600 mb-4">
                A collaborative task management application with real-time
                updates and team collaboration features.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className="py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                    onClick={() =>
                      askProjectQuestion(
                        "Tell me more about the Task Management Application project"
                      )
                    }
                  >
                    View Details
                  </button>

                  <button
                    type="button"
                    className="py-1.5 px-3 text-sm border border-gray-500 text-gray-500 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      askProjectQuestion(
                        "What technologies were used in the Task Management Application project?"
                      )
                    }
                  >
                    Technologies
                  </button>
                </div>
                <span className="text-sm text-gray-500">2022</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="project-image-placeholder">Data Visualization</div>
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">
                Data Visualization Dashboard
              </h5>
              <p className="text-gray-600 mb-4">
                An interactive dashboard for visualizing complex datasets with
                customizable charts and filters.
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button
                    type="button"
                    className="py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                    onClick={() =>
                      askProjectQuestion(
                        "Tell me more about the Data Visualization Dashboard project"
                      )
                    }
                  >
                    View Details
                  </button>
                  <button
                    type="button"
                    className="py-1.5 px-3 text-sm border border-gray-500 text-gray-500 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() =>
                      askProjectQuestion(
                        "What technologies were used in the Data Visualization Dashboard project?"
                      )
                    }
                  >
                    Technologies
                  </button>
                </div>
                <span className="text-sm text-gray-500">2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-2">
              Technical Skills Showcase
            </h5>
            <p className="text-gray-600 mb-4">
              These projects demonstrate proficiency in the following
              technologies:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h6 className="font-semibold mb-2">Frontend</h6>
                <ul className="list-disc pl-5 space-y-1">
                  <li>React</li>
                  <li>Vue.js</li>
                  <li>Angular</li>
                  <li>TypeScript</li>
                  <li>CSS/SASS</li>
                </ul>
              </div>
              <div>
                <h6 className="font-semibold mb-2">Backend</h6>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Django</li>
                  <li>Flask</li>
                  <li>MongoDB</li>
                </ul>
              </div>
            </div>
            <button
              className="mt-4 py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
              onClick={() =>
                askProjectQuestion(
                  "What other technologies are you proficient in?"
                )
              }
            >
              Ask About Other Skills
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-2">Project Inquiry</h5>
            <p className="text-gray-600 mb-4">
              Interested in a specific type of project or technology? Ask
              ProjectAgent for more information.
            </p>
            <div className="flex flex-col space-y-3">
              <button
                className="py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                onClick={() =>
                  askProjectQuestion(
                    "Do you have any projects involving machine learning or AI?"
                  )
                }
              >
                Ask About AI Projects
              </button>
              <button
                className="py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                onClick={() =>
                  askProjectQuestion("What are your most challenging projects?")
                }
              >
                Ask About Challenging Projects
              </button>
              <button
                className="py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                onClick={() =>
                  askProjectQuestion(
                    "Can you show me examples of your UI/UX work?"
                  )
                }
              >
                Ask About UI/UX Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
