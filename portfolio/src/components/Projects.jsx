import React from 'react';

const projectData = [
  {
    title: 'ShopDefy – Clint Winters',
    site: 'https://www.shopdefy.co/',
    description: 'Fully customized Shopify e-commerce site using Online Store 2.0, with dynamic sections, custom layouts, and app integrations.',
    tech: 'Shopify, Liquid, HTML, CSS, JavaScript',
  },
  {
    title: 'Sakinah Body Care – Numan K',
    site: 'https://sakinahbodycare.com/',
    description: 'E-commerce site for premium skincare products with custom visuals, email marketing, and ethical branding.',
    tech: 'Shopify, Liquid, Canva, HTML, CSS',
  },
  {
    title: 'AgeDefy – Clint Winters',
    site: 'https://agedefy.com/',
    description: 'Redesigned layout, implemented mega menu, Loox integration, and improved content for a better user experience.',
    tech: 'Shopify, Liquid, HTML, CSS, JS',
  },
  {
    title: 'Daily Thoughts App',
    site: '#',
    description: 'React journaling app with rich text editor, Appwrite backend, and Redux state management.',
    tech: 'React 19, Redux Toolkit, Appwrite, Draft.js, Tailwind CSS',
  },
  {
    title: 'ShopMrsG E-commerce Site',
    site: 'https://www.shopmrsg.com/',
    description: 'Shopify site setup with product integration, customized theme, and performance improvements.',
    tech: 'Shopify, Liquid, HTML, CSS, JavaScript',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto max-w-6xl px-6">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black underline decoration-cyan-300 underline-offset-8 mb-6">
              Projects
            </h2>
        <p className="text-lg text-center mb-12 text-gray-700 dark:text-gray-300">
          A showcase of professional projects including Shopify stores, React applications, and web customizations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-blue-600 dark:text-blue-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 italic mb-2">{project.tech}</p>
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-auto text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
