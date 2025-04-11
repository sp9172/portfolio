import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* Left Content */}
          <div className="md:w-1/2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 underline decoration-cyan-300 underline-offset-8">
              About Me
            </h2>

            <div className="text-gray-700 text-lg leading-relaxed">
              <p>
                I’m a passionate Front-End Developer with <strong>2.4+ years</strong> of experience building user-friendly,
                responsive, and high-performance websites. My expertise includes <strong>HTML, CSS, JavaScript, and React</strong>,
                along with deep knowledge of <strong>Shopify Liquid</strong> for e-commerce development.
              </p>

              <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-900">🎯 I specialize in:</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Creating pixel-perfect, responsive UI/UX.</li>
                <li>Optimizing website performance and SEO.</li>
                <li>Developing custom Shopify sections and functionalities and design.</li>
                <li>Enhancing user experience with modern animations and interactions.</li>
              </ul>

              <p className="mt-4">
                💡 I love solving problems with clean, efficient code and continuously learning new technologies to improve my work.
              </p>
            </div>

            {/* Skills Section */}
            <h3 className="text-3xl font-bold text-gray-900 mt-10 mb-4 underline decoration-cyan-300 underline-offset-8">
              Skills
            </h3>

            <div className="flex flex-wrap gap-3">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Tailwind",
                "Shopify Liquid",
                "Redux Toolkit",
                "Git",
                "VS Code",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Add an Image or Animation if needed */}
          <div className="md:w-1/2">
            <img
              src="./images/837.jpg"
              alt="About me"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
