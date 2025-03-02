---
layout: layout.liquid
title: Reflection
---

<div class="container mx-auto p-6 max-w-3xl">
  <h1 class="title">Reflection on AI Tools</h1>
  
  <div class="prose lg:prose-xl">
  <p class="description">
  AI tools significantly improved the efficiency of my website project by automating repetitive tasks like debugging common errors, and refining css. They provided reduced a ton of time where would be guessing and checking elements. With AI assistance, I could focus more on design and functionality rather than syntax and structure.
  </p>

  <p class="description">
    I experimented with different AI models (Primarily Anthropics Claude, and OpenAI's ChatGPT), and I noticed variations in their performance. ChatGPT excelled at generating clean, well-structured HTML and CSS, while Claude was better at optimizing JavaScript logic. The balance between speed, accuracy, and contextual understanding played a key role in choosing the right AI assistant.
  </p>

  <p class="description">
    One particularly useful example was using AI to generate simple but effective navbar. It also helped refine my JavaScript by suggesting an optimized event listener for handling user interactions. These AI-driven enhancements made the development process much smoother.
  </p>

    
    <h2 class="text-2xl font-bold mt-8 mb-4">Example Prompts and Responses</h2>
    
    <div class="bg-gray-100 p-4 rounded">
      <h3 class="font-bold">Prompt 1:</h3>
      <pre class="bg-gray-200 p-2 rounded">"Generate a responsive navigation bar using React and Tailwind CSS."</pre>
      
      <h3 class="font-bold mt-4">Response from GPT-4o:</h3>
      <pre class="bg-gray-200 p-2 rounded"><pre><code>
      &lt;!-- GPT-4o Response --&gt;
      import { useState } from "react";

      export default function Navbar() {
        const [open, setOpen] = useState(false);

        return (
          &lt;nav class=&quot;bg-blue-600 p-4&quot;&gt;
            &lt;div class=&quot;flex justify-between items-center&quot;&gt;
              &lt;h1 class=&quot;text-white text-xl font-bold&quot;&gt;MyWebsite&lt;/h1&gt;
              &lt;button onClick={() =&gt; setOpen(!open)} class=&quot;text-white md:hidden&quot;&gt;☰&lt;/button&gt;
            &lt;/div&gt;
            &lt;ul class={`md:flex md:space-x-4 ${open ? &quot;block&quot; : &quot;hidden&quot;}`}&gt;
              &lt;li class=&quot;text-white hover:underline&quot;&gt;Home&lt;/li&gt;
              &lt;li class=&quot;text-white hover:underline&quot;&gt;About&lt;/li&gt;
              &lt;li class=&quot;text-white hover:underline&quot;&gt;Contact&lt;/li&gt;
            &lt;/ul&gt;
          &lt;/nav&gt;
        );
      }</pre>
      
      <h3 class="font-bold mt-4">Response from Claude 3.7 Sonnet:</h3>
      <pre class="bg-gray-200 p-2 rounded"><pre><code>
      &lt;!-- Claude 3.7 Sonnet --&gt;
      import React, { useState } from "react";

      function Navbar() {
        const [menuOpen, setMenuOpen] = useState(false);

        return (
          &lt;nav style=&quot;background-color: #1E40AF; padding: 1rem;&quot;&gt;
            &lt;div style=&quot;display: flex; justify-content: space-between;&quot;&gt;
              &lt;h1 style=&quot;color: white; font-size: 1.25rem; font-weight: bold;&quot;&gt;MyWebsite&lt;/h1&gt;
              &lt;button onClick={() =&gt; setMenuOpen(!menuOpen)} style=&quot;color: white; display: none;&quot;&gt;
                Menu
              &lt;/button&gt;
            &lt;/div&gt;
            &lt;ul style=&quot;display: ${menuOpen ? &quot;block&quot; : &quot;none&quot;}&quot;&gt;
              &lt;li style=&quot;color: white;&quot;&gt;Home&lt;/li&gt;
              &lt;li style=&quot;color: white;&quot;&gt;About&lt;/li&gt;
              &lt;li style=&quot;color: white;&quot;&gt;Contact&lt;/li&gt;
            &lt;/ul&gt;
          &lt;/nav&gt;
        );
      }

      export default Navbar;
      </code></pre></pre>
    </div>
  </div>
</div>