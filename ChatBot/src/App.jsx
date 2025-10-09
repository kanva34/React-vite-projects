import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);

  const getChatbotAnswer = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    // Add user's message
    const newMessages = [...messages, { sender: "user", text: query }];
    setMessages(newMessages);
    setQuery("");

    try {
      // Add loading message
      setMessages((prev) => [...prev, { sender: "bot", text: "Thinking..." }]);

      // Send query to Gemini API
      const res = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        {
          contents: [
            {
              parts: [
                {
                  text: `
You are an advanced AI programming assistant named "Zafat". 
You can explain, write, and debug full programming code in languages like React, JavaScript, Python, and HTML/CSS. 
When users ask about code, show clean, properly formatted examples. 
If asked for explanation, explain clearly but naturally — not too robotic.

User question: "${query}"
`,
                },
              ],
            },
          ],
        },
        {
          headers: {
           "X-goog-api-key": "AIzaSyCGivRd5jbEnQELbzIkjx1EfAWOYL-R5Ts",
          "Content-Type": "application/json",
          },
        }
      );

      const answer =
        res?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn’t generate a response.";

      // Replace "Thinking..." with actual answer
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { sender: "bot", text: answer };
        return updated;
      });
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, something went wrong. Please try again later.",
        },
      ]);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-box" id="result">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-bubble ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {/* Convert newlines into <br> and wrap code in <pre> */}
            {msg.text.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>

      <form onSubmit={getChatbotAnswer}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask me anything about code..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
