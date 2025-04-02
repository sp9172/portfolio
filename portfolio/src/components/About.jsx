import React from 'react'

const About = () => {
  return (
    <section id="about" className="w-full py-16 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white text-center">
      <div className="container mx-auto max-w-4xl p-6">
        <h2 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">About Me</h2>
        <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">I am a passionate Frontend Developer with expertise in React, JavaScript, and Shopify development. I love crafting seamless and interactive user experiences.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold">React</span>
          <span className="bg-purple-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold">JavaScript</span>
          <span className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold">Tailwind CSS</span>
          <span className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg font-semibold">Shopify</span>
        </div>
        <div className="mt-8">
          <a href="#projects" className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300">See My Projects</a>
        </div>
      </div>
    </section>
  )
}

export default About
