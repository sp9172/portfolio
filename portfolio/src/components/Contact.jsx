import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="w-full py-16 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-center">
      <div className="container mx-auto max-w-4xl p-6">
        <h2 className="text-4xl font-bold mb-4 text-blue-600 dark:text-blue-400">Contact Me</h2>
        <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">Feel free to reach out for collaborations or just a friendly chat.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Your Message" rows="5" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
