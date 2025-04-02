import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="w-full py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white text-center">
    <div className="container mx-auto max-w-5xl p-6">
      <h2 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">Projects</h2>
      <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">Here are some of my recent projects showcasing my skills in React, JavaScript, and Shopify development.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">E-Commerce Store</h3>
          <p className="text-gray-600 dark:text-gray-300">A fully responsive Shopify store with custom Liquid coding.</p>
          <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold mt-4 inline-block">View Project</a>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">To-Do App</h3>
          <p className="text-gray-600 dark:text-gray-300">A task management app built using React and Tailwind CSS.</p>
          <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold mt-4 inline-block">View Project</a>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
          <p className="text-gray-600 dark:text-gray-300">A responsive and stylish personal portfolio built with React and Tailwind CSS.</p>
          <a href="#" className="text-blue-600 dark:text-blue-400 font-semibold mt-4 inline-block">View Project</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Projects
