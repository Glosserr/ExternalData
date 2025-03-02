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
      <div class="bg-gray-100 p-4 rounded-md">
  <pre class="text-sm text-gray-800"><code>
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    &lt;nav className="bg-blue-500 p-4"&gt;
      &lt;div className="max-w-7xl mx-auto flex items-center justify-between"&gt;
        {/* Logo */}
        &lt;div className="text-white font-bold text-xl"&gt;
          &lt;a href="#"&gt;MyWebsite&lt;/a&gt;
        &lt;/div&gt;

        {/* Menu Icon (Hamburger) */}
        &lt;button
          className="text-white md:hidden"
          onClick={toggleMenu}
        &gt;
          &lt;svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          &gt;
            &lt;path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            /&gt;
          &lt;/svg&gt;
        &lt;/button&gt;

        {/* Menu Items */}
        &lt;div
          className={`md:flex ${isOpen ? 'block' : 'hidden'} flex-col md:flex-row md:space-x-4`}
        &gt;
          &lt;a href="#" className="text-white py-2 px-4 hover:bg-blue-700 rounded"&gt;
            Home
          &lt;/a&gt;
          &lt;a href="#about" className="text-white py-2 px-4 hover:bg-blue-700 rounded"&gt;
            About
          &lt;/a&gt;
          &lt;a href="#services" className="text-white py-2 px-4 hover:bg-blue-700 rounded"&gt;
            Services
          &lt;/a&gt;
          &lt;a href="#contact" className="text-white py-2 px-4 hover:bg-blue-700 rounded"&gt;
            Contact
          &lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/nav&gt;
  );
}

export default Navbar;
  </code></pre>
</div>

      
      <h3 class="font-bold mt-4">Response from Claude 3.7 Sonnet:</h3>
      <div class="bg-gray-100 p-4 rounded-md">
  <pre class="text-sm text-gray-800"><code>
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    &lt;nav className="bg-gray-800 text-white"&gt;
      &lt;div className="max-w-6xl mx-auto px-4"&gt;
        &lt;div className="flex justify-between items-center h-16"&gt;
          {/* Logo */}
          &lt;div className="flex-shrink-0 font-bold text-xl"&gt;
            Brand Logo
          &lt;/div&gt;

          {/* Desktop Navigation */}
          &lt;div className="hidden md:block"&gt;
            &lt;div className="ml-10 flex items-center space-x-4"&gt;
              &lt;a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"&gt;Home&lt;/a&gt;
              &lt;a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"&gt;About&lt;/a&gt;
              &lt;a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"&gt;Services&lt;/a&gt;
              &lt;a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"&gt;Blog&lt;/a&gt;
              &lt;a href="#" className="px-3 py-2 rounded-md text-sm font-medium bg-gray-900 hover:bg-gray-700"&gt;Contact&lt;/a&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          {/* Mobile menu button */}
          &lt;div className="md:hidden flex items-center"&gt;
            &lt;button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
            &gt;
              {isOpen ? &lt;X size={24} /&gt; : &lt;Menu size={24} /&gt;}
            &lt;/button&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      {/* Mobile Navigation */}
      {isOpen &amp;&amp; (
        &lt;div className="md:hidden"&gt;
          &lt;div className="px-2 pt-2 pb-3 space-y-1 sm:px-3"&gt;
            &lt;a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"&gt;Home&lt;/a&gt;
            &lt;a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"&gt;About&lt;/a&gt;
            &lt;a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"&gt;Services&lt;/a&gt;
            &lt;a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"&gt;Blog&lt;/a&gt;
            &lt;a href="#" className="block px-3 py-2 rounded-md text-base font-medium bg-gray-900 hover:bg-gray-700"&gt;Contact&lt;/a&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      )}
    &lt;/nav&gt;
  );
};

export default NavBar;
  </code></pre>
</div>
    </div>
  </div>
</div>