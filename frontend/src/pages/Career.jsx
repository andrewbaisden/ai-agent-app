import { useState } from "react";
import Chat from "../components/Chat";

function Career() {
  const initialMessage =
    "Hello! I'm CareerAgent, the career specialist. I can provide information about skills, experience, and professional background. What would you like to know?";

  const [currentQuestion, setCurrentQuestion] = useState("");

  const askCareerQuestion = (question) => {
    setCurrentQuestion(`${question} [${Date.now()}]`);

    setTimeout(() => {
      setCurrentQuestion("");
    }, 500);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <h1 className="text-3xl font-bold mb-4">Career</h1>
          <p className="text-lg mb-4">
            Here you can find information about my professional background,
            skills, and experience. Feel free to ask CareerAgent for more
            details.
          </p>
        </div>
        <div className="md:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">
                Chat with CareerAgent
              </h5>
              <p className="text-gray-600 mb-4">
                Our career specialist can provide information about skills,
                experience, and professional background.
              </p>
              <Chat
                agentType="career"
                initialMessage={initialMessage}
                agentInitials="CA"
                directQuestion={currentQuestion}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-4">
                Frontend Development
              </h5>
              <ul className="divide-y divide-gray-200">
                <li className="py-3 flex justify-between items-center">
                  React
                  <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Expert
                  </span>
                </li>
                <li className="py-3 flex justify-between items-center">
                  Vue.js
                  <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Advanced
                  </span>
                </li>
                <li className="py-3 flex justify-between items-center">
                  Angular
                  <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Intermediate
                  </span>
                </li>
                <li className="py-3 flex justify-between items-center">
                  TypeScript
                  <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Advanced
                  </span>
                </li>
                <li className="py-3 flex justify-between items-center">
                  CSS/SASS
                  <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Expert
                  </span>
                </li>
              </ul>
              <button
                className="mt-4 py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                onClick={() =>
                  askCareerQuestion(
                    "Tell me more about your frontend development skills"
                  )
                }
              >
                Ask About Frontend Skills
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-4">
                Backend Development
              </h5>
              <ul className="divide-y divide-gray-200">
                <li className="py-3 flex justify-between items-center">
                  Node.js
                  <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Expert
                  </span>
                </li>
                <li className="py-3 flex justify-between items-center">
                  Python
                  <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Advanced
                  </span>
                </li>
                <li className="py-3 flex justify-between items-center">
                  Django
                  <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Intermediate
                  </span>
                </li>
                <li className="py-3 flex justify-between items-center">
                  Flask
                  <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Advanced
                  </span>
                </li>
                <li className="py-3 flex justify-between items-center">
                  SQL/NoSQL
                  <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Advanced
                  </span>
                </li>
              </ul>
              <button
                className="mt-4 py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                onClick={() =>
                  askCareerQuestion(
                    "Tell me more about your backend development skills"
                  )
                }
              >
                Ask About Backend Skills
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-4">Other Skills</h5>
              <ul className="divide-y divide-gray-200">
                <li className="py-3 flex justify-between items-center">
                  DevOps
                  <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Intermediate
                  </span>
                </li>
                <li className="py-3 flex justify-between items-center">
                  UI/UX Design
                  <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Advanced
                  </span>
                </li>
                <li className="py-3 flex justify-between items-center">
                  Project Management
                  <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Advanced
                  </span>
                </li>
                <li className="py-3 flex justify-between items-center">
                  Agile Methodologies
                  <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Expert
                  </span>
                </li>
                <li className="py-3 flex justify-between items-center">
                  Technical Writing
                  <span className="px-2.5 py-0.5 bg-blue-500 text-white text-xs font-medium rounded-full">
                    Intermediate
                  </span>
                </li>
              </ul>
              <button
                className="mt-4 py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                onClick={() =>
                  askCareerQuestion("What other skills do you have?")
                }
              >
                Ask About Other Skills
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-xl font-semibold">
                  Senior Full-Stack Developer
                </h5>
                <span className="text-gray-500 text-sm">2020 - Present</span>
              </div>
              <h6 className="text-gray-600 mb-3">Tech Innovations Inc.</h6>
              <p className="text-gray-700 mb-4">
                Lead developer for multiple web and mobile applications,
                managing a team of 5 developers. Implemented CI/CD pipelines and
                improved development workflow efficiency by 30%.
              </p>
              <button
                className="py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                onClick={() =>
                  askCareerQuestion(
                    "Tell me more about your experience at Tech Innovations Inc."
                  )
                }
              >
                More Details
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-xl font-semibold">Full-Stack Developer</h5>
                <span className="text-gray-500 text-sm">2017 - 2020</span>
              </div>
              <h6 className="text-gray-600 mb-3">WebSolutions Co.</h6>
              <p className="text-gray-700 mb-4">
                Developed and maintained multiple client websites and web
                applications. Specialized in React frontend development and
                Node.js backend services.
              </p>
              <button
                className="py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                onClick={() =>
                  askCareerQuestion(
                    "Tell me more about your experience at WebSolutions Co."
                  )
                }
              >
                More Details
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-xl font-semibold">Junior Web Developer</h5>
                <span className="text-gray-500 text-sm">2015 - 2017</span>
              </div>
              <h6 className="text-gray-600 mb-3">Digital Creations Ltd.</h6>
              <p className="text-gray-700 mb-4">
                Worked on frontend development for e-commerce websites. Gained
                experience with JavaScript, CSS, and responsive design
                principles.
              </p>
              <button
                className="py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
                onClick={() =>
                  askCareerQuestion(
                    "Tell me more about your experience at Digital Creations Ltd."
                  )
                }
              >
                More Details
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-4">Education</h5>
            <div className="mb-6">
              <div className="flex justify-between items-start mb-1">
                <h6 className="font-medium">
                  Master of Science in Computer Science
                </h6>
                <span className="text-gray-500 text-sm">2013 - 2015</span>
              </div>
              <p className="text-gray-600">University of Technology</p>
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h6 className="font-medium">
                  Bachelor of Science in Software Engineering
                </h6>
                <span className="text-gray-500 text-sm">2009 - 2013</span>
              </div>
              <p className="text-gray-600">State University</p>
            </div>
            <button
              className="mt-4 py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
              onClick={() =>
                askCareerQuestion(
                  "Tell me more about your educational background"
                )
              }
            >
              Ask About Education
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-4">Certifications</h5>
            <ul className="divide-y divide-gray-200">
              <li className="py-3 flex justify-between items-center">
                AWS Certified Solutions Architect
                <span className="text-gray-500 text-sm">2022</span>
              </li>
              <li className="py-3 flex justify-between items-center">
                Google Cloud Professional Developer
                <span className="text-gray-500 text-sm">2021</span>
              </li>
              <li className="py-3 flex justify-between items-center">
                Microsoft Certified: Azure Developer Associate
                <span className="text-gray-500 text-sm">2020</span>
              </li>
              <li className="py-3 flex justify-between items-center">
                Certified Scrum Master
                <span className="text-gray-500 text-sm">2019</span>
              </li>
            </ul>
            <button
              className="mt-4 py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
              onClick={() =>
                askCareerQuestion("Tell me more about your certifications")
              }
            >
              Ask About Certifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Career;
