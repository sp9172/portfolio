import React from 'react';

const Experience = () => {
  return (
    <section className="bg-white py-12" id="experience">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black underline decoration-cyan-300 underline-offset-8 mb-6">
              Experience
            </h2>
            <div className="text-gray-700 text-lg leading-relaxed">
              <p className="font-semibold">Walstar Technologies Pvt. Ltd. Kolhapur</p>
              <p className="text-gray-500">2020 - 2025</p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-black mb-2">Tech Stack:</h3>
              <ul className="text-gray-700 list-disc list-inside space-y-1 text-base">
                <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React</li>
                <li><strong>Shopify:</strong> Shopify, Create Sections, Shopify Liquid, Theme Customization, Online Store 2.0</li>
                <li><strong>State Management:</strong> Redux, Redux Toolkit, Context API</li>
                <li><strong>Styling:</strong> Tailwind CSS, Bootstrap, Material-UI</li>
                <li><strong>Optimizations:</strong>Product Filtering, Speed Optimization</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2">
            <ul className="space-y-4">
              <li className="p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                <strong>Client-Centric Solutions:</strong> Worked closely with clients to understand their business objectives and transform them into high-performing Shopify solutions, enhancing user experience and store efficiency.
              </li>
              <li className="p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                <strong>Responsive & Scalable Stores:</strong> Built dynamic, user-friendly Shopify stores using <strong>HTML, CSS, JavaScript, React, and Shopify Liquid</strong>, ensuring seamless performance across all devices.
              </li>
              <li className="p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                <strong>Project Management & Delivery:</strong> Successfully managed multiple Shopify projects, consistently delivering high-quality solutions on time and within budget.
              </li>
              <li className="p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                <strong>Theme Customization & Shopify 2.0:</strong> Customized Shopify themes using Online Store 2.0, dynamic sections, and metafields to meet unique business needs.
              </li>
              <li className="p-4 bg-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                <strong>Optimized UX & Sales Growth:</strong> Implemented custom filters, enhanced checkout flows, and optimized speed to improve engagement and drive conversions.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
