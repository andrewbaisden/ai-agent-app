import { useState } from "react";
import Chat from "../components/Chat";

function Research() {
  const initialMessage =
    "Hello! I'm ResearchAgent, the research specialist. I can provide information about technologies, trends, and industry news. What would you like to know?";
  const [searchQuery, setSearchQuery] = useState("");
  const [tech1, setTech1] = useState("");
  const [tech2, setTech2] = useState("");

  const [currentQuestion, setCurrentQuestion] = useState("");

  const askResearchQuestion = (question) => {
    setCurrentQuestion(`${question} [${Date.now()}]`);

    setTimeout(() => {
      setCurrentQuestion("");
    }, 500);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      askResearchQuestion(`Search for information about: ${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleCompare = (e) => {
    e.preventDefault();
    if (tech1.trim() && tech2.trim()) {
      askResearchQuestion(`Compare ${tech1} vs ${tech2}`);
      setTech1("");
      setTech2("");
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <h1 className="text-3xl font-bold mb-4">Research & Insights</h1>
          <p className="text-lg mb-4">
            Here you can explore research on technologies, trends, and industry
            news. Feel free to ask ResearchAgent for more information.
          </p>
        </div>
        <div className="md:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h5 className="text-xl font-semibold mb-2">
                Chat with ResearchAgent
              </h5>
              <p className="text-gray-600 mb-4">
                Our research specialist can provide information about
                technologies, trends, and industry news.
              </p>
              <Chat
                agentType="research"
                initialMessage={initialMessage}
                agentInitials="RA"
                directQuestion={currentQuestion}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-3">
              Search for Information
            </h5>
            <p className="text-gray-600 mb-4">
              Enter a topic to search for the latest information and insights.
            </p>
            <form onSubmit={handleSearch}>
              <div className="flex mb-4">
                <input
                  type="text"
                  className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="e.g., WebAssembly, Edge Computing, etc."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-3">Compare Technologies</h5>
            <p className="text-gray-600 mb-4">
              Compare two technologies to understand their pros, cons, and use
              cases.
            </p>
            <form onSubmit={handleCompare}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                <div>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="First technology"
                    value={tech1}
                    onChange={(e) => setTech1(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Second technology"
                    value={tech2}
                    onChange={(e) => setTech2(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                type="submit"
              >
                Compare
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Current Tech Trends</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="p-6 flex flex-col h-full">
              <h5 className="text-xl font-semibold mb-3">
                AI in Web Development
              </h5>
              <p className="text-gray-600 mb-4 flex-grow">
                Exploring how artificial intelligence is transforming web
                development practices and tools.
              </p>
              <button
                className="py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors self-start"
                onClick={() =>
                  askResearchQuestion("Tell me about AI in web development")
                }
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="p-6 flex flex-col h-full">
              <h5 className="text-xl font-semibold mb-3">
                Modern Frontend Frameworks
              </h5>
              <p className="text-gray-600 mb-4 flex-grow">
                Analysis of current frontend frameworks, their strengths, and
                ideal use cases.
              </p>
              <button
                className="py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors self-start"
                onClick={() =>
                  askResearchQuestion("Compare modern frontend frameworks")
                }
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
            <div className="p-6 flex flex-col h-full">
              <h5 className="text-xl font-semibold mb-3">
                Cloud Architecture Patterns
              </h5>
              <p className="text-gray-600 mb-4 flex-grow">
                Best practices and patterns for designing scalable cloud-based
                applications.
              </p>
              <button
                className="py-1.5 px-3 text-sm border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors self-start"
                onClick={() =>
                  askResearchQuestion("Explain cloud architecture patterns")
                }
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h5 className="text-xl font-semibold mb-3">Industry Trends</h5>
            <p className="text-gray-600 mb-4">
              Stay updated on the latest trends in software development and
              technology.
            </p>
            <button
              className="py-2 px-4 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-50 transition-colors"
              onClick={() =>
                askResearchQuestion(
                  "What are the current trends in software development and technology?"
                )
              }
            >
              Get Industry Trends
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
