import React from 'react'

const About = () => {
  return (
    <section id='about'>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2  md:gap-8">
          <div>
            <h2 class="md:text-7xl font-bold text-black capitalize pb-8 underline decoration-cyan-300 underline-offset-8 sm:text-5xl">
              About me
            </h2>

            <div className="max-w-lg md:max-w-none">


              <p className="mt-4 text-gray-700">
                I’m a passionate Front-End Developer with 2.4+ years of experience building<br /> user-friendly,
                responsive, and high-performance websites. My expertise includes HTML, CSS, JavaScript, and React, along with deep knowledge of Shopify Liquid for e-commerce development.

                <h3 className='pt-5'> 🎯 I specialize in:</h3>
                <ul className='pb-5'>

                  <li>✅ Creating pixel-perfect, responsive UI/UX.</li>
                  <li> ✅ Optimizing website performance and SEO.</li>
                  <li> ✅ Developing custom Shopify themes and functionalities.</li>
                  <li> ✅ Enhancing user experience with modern animations and interactions.</li>
                </ul>

                💡 I love solving problems with clean, efficient code and continuously learning new technologies to improve my work.
              </p>
            </div>
            <h3 class="md:text-3xl  py-3 font-bold text-black capitalize pb-8 underline decoration-cyan-300 underline-offset-8 sm:text-5xl">
              Skill
            </h3>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
              <span className="rounded-full bg-orange-500 px-2 py-3 capitalize  text-lg whitespace-nowrap text-white bold text-center">
                HTML
              </span>
              <span className="rounded-full bg-blue-800 px-2 py-3 text-lg capitalize whitespace-nowrap text-white text-center">
                CSS
              </span>
              <span className="rounded-full bg-yellow-400 px-2 py-3 text-lg capitalize whitespace-nowrap text-black-700 text-center">
                JAVASCRIPT
              </span>
              <span className="rounded-full bg-blue-500 px-2 py-3 text-lg capitalize whitespace-nowrap text-white text-center">
                REACT
              </span>
              <span className="rounded-full bg-green-500 px-2 py-3 text-lg capitalize whitespace-nowrap text-white text-center">
                SHOPIFY
              </span>

            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
