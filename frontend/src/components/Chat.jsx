import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

function Chat({ agentType, initialMessage, agentInitials, directQuestion }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const [processedQuestions, setProcessedQuestions] = useState([]);

  const API_BASE_URL = "http://127.0.0.1:5001";

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = useCallback(
    async (questionOverride = null) => {
      const messageToSend = questionOverride || input;

      if (!messageToSend.trim()) return;

      const userMessage = {
        content: messageToSend,
        isUser: true,
      };

      setMessages((prev) => [...prev, userMessage]);

      if (!questionOverride) {
        setInput("");
      }

      setIsLoading(true);

      try {
        const response = await axios.post(
          `${API_BASE_URL}/api/${agentType}`,
          {
            message: messageToSend,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );

        if (response.data && response.data.response) {
          setMessages((prev) => [
            ...prev,
            {
              content: response.data.response,
              isUser: false,
            },
          ]);
        }
      } catch (error) {
        console.error("Error sending message:", error);
        setMessages((prev) => [
          ...prev,
          {
            content:
              "Sorry, there was an error connecting to the AI agent. Please make sure the Flask server is running at http://127.0.0.1:5001/",
            isUser: false,
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [input, agentType, API_BASE_URL]
  );

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const cleanQuestion = (question) => {
    return question.replace(/\s*\[\d+\]\s*$/, "");
  };

  useEffect(() => {
    if (initialMessage) {
      setMessages([
        {
          content: initialMessage,
          isUser: false,
        },
      ]);
    }
  }, [initialMessage]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (
      directQuestion &&
      directQuestion.trim() !== "" &&
      !processedQuestions.includes(directQuestion)
    ) {
      const cleanedQuestion = cleanQuestion(directQuestion);
      setInput(cleanedQuestion);
      handleSendMessage(cleanedQuestion);
      setProcessedQuestions((prev) => [...prev, directQuestion]);
    }
  }, [directQuestion, processedQuestions, handleSendMessage]);

  const renderContent = (content) => {
    let formattedContent = content;

    formattedContent = formattedContent.replace(
      /#{6}\s+(.*?)(?=\n|$)/g,
      "<h6>$1</h6>"
    );
    formattedContent = formattedContent.replace(
      /#{5}\s+(.*?)(?=\n|$)/g,
      "<h5>$1</h5>"
    );
    formattedContent = formattedContent.replace(
      /#{4}\s+(.*?)(?=\n|$)/g,
      "<h4>$1</h4>"
    );
    formattedContent = formattedContent.replace(
      /#{3}\s+(.*?)(?=\n|$)/g,
      "<h3>$1</h3>"
    );
    formattedContent = formattedContent.replace(
      /#{2}\s+(.*?)(?=\n|$)/g,
      "<h2>$1</h2>"
    );
    formattedContent = formattedContent.replace(
      /#{1}\s+(.*?)(?=\n|$)/g,
      "<h1>$1</h1>"
    );

    formattedContent = formattedContent.replace(
      /\*\*(.*?)\*\*/g,
      "<strong>$1</strong>"
    );

    formattedContent = formattedContent.replace(/\*(.*?)\*/g, "<em>$1</em>");

    formattedContent = formattedContent.replace(/`(.*?)`/g, "<code>$1</code>");

    formattedContent = formattedContent.replace(
      /\[(.*?)\]\((.*?)\)/g,
      '<a href="$2" target="_blank">$1</a>'
    );

    formattedContent = formattedContent.replace(
      /^\s*\*\s+(.*?)(?=\n|$)/gm,
      "<li>$1</li>"
    );
    formattedContent = formattedContent.replace(
      /<li>(.*?)<\/li>(?:\s*<li>.*?<\/li>)*/g,
      "<ul>$&</ul>"
    );

    formattedContent = formattedContent.replace(
      /^\s*\d+\.\s+(.*?)(?=\n|$)/gm,
      "<li>$1</li>"
    );
    formattedContent = formattedContent.replace(
      /<li>(.*?)<\/li>(?:\s*<li>.*?<\/li>)*/g,
      "<ol>$&</ol>"
    );

    return { __html: formattedContent };
  };

  return (
    <div className="chat-container">
      <div className="chat-messages" id={`${agentType}-messages`}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.isUser ? "user-message" : "agent-message"
            }`}
          >
            {!message.isUser && (
              <div className="message-avatar">
                <div className="avatar-placeholder">
                  {agentInitials || "AI"}
                </div>
              </div>
            )}
            <div className="message-content">
              <div dangerouslySetInnerHTML={renderContent(message.content)} />
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="message agent-message">
            <div className="message-avatar">
              <div className="avatar-placeholder">{agentInitials || "AI"}</div>
            </div>
            <div className="message-content">
              <p className="loading-dots">Thinking</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-container">
        <div className="chat-input-group">
          <input
            type="text"
            id={`${agentType}-input`}
            className="chat-input"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            id={`${agentType}-send`}
            className="chat-send-button"
            onClick={() => handleSendMessage()}
          >
            <i className="fa-solid fa-paper-plane mr-2"></i>Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
