import {useState} from 'react';

function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>What Are AI Agents, Agentic AI, and Chatbots?</h1>
        <img
          src="https://zeeshan.p2pclouds.net/blogs/3/chatbot-aiagents-agentic-ai.png"
          alt="AI Agents Illustration"
        />
      </header>

      {/* Table of Contents */}
      <nav aria-label="Table of Contents">
        <h2>📋 Table of Contents</h2>
        <ol>
          <li><a href="#chatbots">Chatbots</a></li>
          <li><a href="#ai-agents">AI Agents</a></li>
          <li><a href="#agentic-ai">Agentic AI</a></li>
          <li><a href="#key-differences">Key Differences</a></li>
        </ol>
      </nav>

      {/* Body */}
      <article>
        <p>
          AI agents, agentic AI, and chatbots are transforming automation.
          Here’s what each term means:
        </p>

        <section id="chatbots">
          <h2>1. Chatbots</h2>
          <p>
            Rule-based or AI-powered systems designed for simple, conversational
            tasks like answering FAQs or guiding users through processes.
          </p>
        </section>

        <section id="ai-agents">
          <h2>2. AI Agents</h2>
          <p>
            More advanced than chatbots, AI agents can perform complex tasks,
            make decisions, and interact with systems autonomously.
          </p>
        </section>

        <section id="agentic-ai">
          <h2>3. Agentic AI</h2>
          <p>
            A subset of AI agents, agentic AI focuses on goal-driven behavior,
            proactively solving problems and adapting to new scenarios without
            human intervention.
          </p>
        </section>

        <section id="key-differences">
          <h2>Key Differences</h2>
          <p>
            Chatbots are limited to predefined scripts or basic AI, while AI
            agents and agentic AI can handle dynamic tasks and learn from
            interactions.
          </p>
        </section>

        <p>
          In 2025, these technologies are widely used in customer service,
          workflow automation, and even creative problem-solving, making them
          essential for modern businesses.
        </p>
      </article>

      {/* Footer */}
      <footer>
        &copy; 2025 | Blog by Talha Bilal
      </footer>
    </div>
  );
}

export default App;
