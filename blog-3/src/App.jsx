import { useState } from 'react';

function App() {
  return (
    <>
      <div className="container">
        <h1>My First HTML Class</h1>
        <p><strong>Date:</strong> July 20, 2025</p>

        <h2>Introduction</h2>
        <p>
          Today was a very exciting day for me. It was the day of my very first HTML class.
          I have always been curious about how websites are made, and finally, I got the chance
          to start learning it myself. Our teacher told us that HTML stands for
          <em> HyperText Markup Language</em>, and it is the basic building block of any website.
        </p>

        <h2>What I Learned</h2>
        <p>
          In this class, we started with the basics. We learned how to create a simple HTML file
          and how to open it in a web browser. We were introduced to some basic tags like:
        </p>
        <ul>
          <li><code>&lt;html&gt;</code> – The root of the HTML document</li>
          <li><code>&lt;head&gt;</code> – Contains meta information</li>
          <li><code>&lt;title&gt;</code> – Sets the title of the page</li>
          <li><code>&lt;body&gt;</code> – Contains the content of the page</li>
          <li><code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> – Heading tags</li>
          <li><code>&lt;p&gt;</code> – Paragraph tag</li>
        </ul>
        <p>
          We even wrote our first mini webpage using these tags. It felt amazing to see my own
          words displayed inside a browser window. I didn't know that writing code could be this fun!
        </p>

        <h2>My Experience</h2>
        <p>
          At first, I was a little confused by all the angle brackets and tags. But as the class
          continued, things started to make sense. Our sir was very kind and explained everything
          step by step. He also gave us a practical exercise to make our own webpage introducing
          ourselves.
        </p>
        <p>
          I enjoyed the hands-on part the most. It was not just theory — we actually created something.
          I felt like a developer, even though I just started learning.
        </p>

        <h2>My Thoughts</h2>
        <p>
          I think learning HTML is the first step toward becoming a web developer. I am now more
          motivated than ever to continue learning. I hope to build my own website someday —
          maybe even a portfolio to show my skills.
        </p>

        <h2>Conclusion</h2>
        <p>
          Overall, my first HTML class was a great experience. I learned the basics of how web
          pages are made, got to write my own code, and had fun while learning. I’m looking
          forward to the next class, where we will learn more about images, links, and maybe
          even some styling.
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12930.941062235335!2d76.50480036809243!3d35.88000394645844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38fad5add7ff4adb%3A0xc531647bf8e9d577!2sK2!5e0!3m2!1sen!2s!4v1753348468808!5m2!1sen!2s"
          width="560"
          height="315"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5ccq_nLHneE?si=JfjNL8iC3N48jq-U"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <footer>&copy; 2025 | Blog by Talha Bilal</footer>
      </div>
    </>
  );
}

export default App;
