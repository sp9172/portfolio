import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-gray-900 text-white text-center">
    <p>&copy; {new Date().getFullYear()} Prathamesh | All Rights Reserved</p>
    <div className="flex justify-center gap-4 mt-2">
      <a href="https://github.com" className="hover:text-blue-400 transition duration-300">GitHub</a>
      <a href="https://linkedin.com" className="hover:text-blue-400 transition duration-300">LinkedIn</a>
      <a href="https://twitter.com" className="hover:text-blue-400 transition duration-300">Twitter</a>
    </div>
  </footer>
  )
}

export default Footer
