import { useState } from "react";
import axios from "axios";
import Chat from "../components/Chat";

function Services() {
  const initialMessage =
    "Hello! I'm BusinessAdvisor, the client specialist. I can provide information about services, pricing, and project details. What would you like to know?";
  const [projectDescription, setProjectDescription] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState("");

  const askClientQuestion = (question) => {
    setCurrentQuestion(`${question} [${Date.now()}]`);

    setTimeout(() => {
      setCurrentQuestion("");
    }, 500);
  };

  const generateProposal = async () => {
    if (!projectDescription.trim()) return;

    try {
      const response = await axios.post("/api/client/proposal", {
        project_description: projectDescription,
      });

      if (response.data && response.data.proposal) {
        askClientQuestion(
          `Can you provide a proposal for this project: ${projectDescription}`
        );
      }
    } catch (error) {
      console.error("Error generating proposal:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <h1 className="text-3xl font-bold mb-4">Services</h1>
          <p className="text-lg mb-4">
            Here you can find information about the services I offer. Feel free
            to ask BusinessAdvisor for more details about pricing, timelines,
            and project specifics.
          </p>
        </div>
        <div className="md:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">
                Chat with BusinessAdvisor
              </h5>
              <p className="text-gray-600 mb-4">
                Our client specialist can provide information about services,
                pricing, and project details.
              </p>
              <Chat
                agentType="client"
                initialMessage={initialMessage}
                agentInitials="BA"
                directQuestion={currentQuestion}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Services Offered</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">Web Development</h5>
              <p className="text-gray-600 mb-4">
                Custom web application development using modern frameworks and
                best practices.
              </p>
              <h6 className="font-semibold mb-2">Technologies</h6>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>React</li>
                <li>Vue.js</li>
                <li>Node.js</li>
                <li>Django</li>
                <li>Flask</li>
              </ul>
              <h6 className="font-semibold mb-2">Details</h6>
              <ul className="space-y-2 mb-4">
                <li>
                  <strong>Pricing Model:</strong> Project-based or hourly
                </li>
                <li>
                  <strong>Price Range:</strong> $5,000 - $50,000 depending on
                  complexity
                </li>
                <li>
                  <strong>Timeline:</strong> 4-12 weeks depending on scope
                </li>
              </ul>
              <button
                className="mt-2 py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                onClick={() =>
                  askClientQuestion(
                    "Tell me more about your web development services"
                  )
                }
              >
                Ask about Web Development
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">
                Mobile App Development
              </h5>
              <p className="text-gray-600 mb-4">
                Native and cross-platform mobile application development for iOS
                and Android.
              </p>
              <h6 className="font-semibold mb-2">Technologies</h6>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>React Native</li>
                <li>Flutter</li>
                <li>Swift</li>
                <li>Kotlin</li>
              </ul>
              <h6 className="font-semibold mb-2">Details</h6>
              <ul className="space-y-2 mb-4">
                <li>
                  <strong>Pricing Model:</strong> Project-based
                </li>
                <li>
                  <strong>Price Range:</strong> $8,000 - $60,000 depending on
                  complexity
                </li>
                <li>
                  <strong>Timeline:</strong> 6-16 weeks depending on scope
                </li>
              </ul>
              <button
                className="mt-2 py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                onClick={() =>
                  askClientQuestion(
                    "Tell me more about your mobile app development services"
                  )
                }
              >
                Ask about Mobile Development
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">
                Technical Consulting
              </h5>
              <p className="text-gray-600 mb-4">
                Expert advice on architecture, technology stack, and development
                practices.
              </p>
              <h6 className="font-semibold mb-2">Areas of Expertise</h6>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>System Architecture</li>
                <li>Database Design</li>
                <li>Performance Optimization</li>
                <li>Security Best Practices</li>
                <li>DevOps Implementation</li>
              </ul>
              <h6 className="font-semibold mb-2">Details</h6>
              <ul className="space-y-2 mb-4">
                <li>
                  <strong>Pricing Model:</strong> Hourly
                </li>
                <li>
                  <strong>Price Range:</strong> $150 - $250 per hour
                </li>
                <li>
                  <strong>Timeline:</strong> Ongoing or as needed
                </li>
              </ul>
              <button
                className="mt-2 py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                onClick={() =>
                  askClientQuestion(
                    "Tell me more about your technical consulting services"
                  )
                }
              >
                Ask about Consulting
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Client Engagement Process</h2>
        </div>
        <div className="w-full">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="mb-6 md:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                      1
                    </div>
                    <h5 className="text-lg font-semibold mt-2 mb-1">
                      Initial Consultation
                    </h5>
                    <p className="text-gray-600 text-center">
                      Understanding your requirements and project goals
                    </p>
                  </div>
                </div>
                <div className="mb-6 md:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                      2
                    </div>
                    <h5 className="text-lg font-semibold mt-2 mb-1">
                      Proposal
                    </h5>
                    <p className="text-gray-600 text-center">
                      Detailed quote and project plan preparation
                    </p>
                  </div>
                </div>
                <div className="mb-6 md:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                      3
                    </div>
                    <h5 className="text-lg font-semibold mt-2 mb-1">
                      Development
                    </h5>
                    <p className="text-gray-600 text-center">
                      Regular sprints with client feedback
                    </p>
                  </div>
                </div>
                <div className="mb-6 md:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                      4
                    </div>
                    <h5 className="text-lg font-semibold mt-2 mb-1">
                      Delivery
                    </h5>
                    <p className="text-gray-600 text-center">
                      Testing, deployment, and ongoing support
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <button
                  className="py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                  onClick={() =>
                    askClientQuestion(
                      "Explain your client engagement process in detail"
                    )
                  }
                >
                  Learn More About the Process
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-2">Request a Proposal</h5>
            <p className="text-gray-600 mb-4">
              Interested in working together? Describe your project below and
              BusinessAdvisor will generate a custom proposal for you.
            </p>
            <div className="mb-4">
              <label
                htmlFor="project-description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Describe your project:
              </label>
              <textarea
                id="project-description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows="5"
                placeholder="Enter project description..."
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              ></textarea>
            </div>
            <button
              className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              onClick={generateProposal}
            >
              Generate Proposal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
