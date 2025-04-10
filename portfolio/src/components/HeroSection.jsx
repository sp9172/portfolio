import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-screen flex items-center justify-center px-6">
    <div className="max-w-3xl text-center">
      <h3 className="text-lg italic text-black font-semibold">Hello !!!</h3>
      <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-white capitalize py-4">
        I'm Prathamesh Surywanshi
      </h1>
  
      <p className="text-lg sm:text-xl text-white pb-6">
        Front-End Developer | Shopify & Liquid | Crafting Scalable & User-Centric Web Experiences
      </p>
  
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#about"
          className="inline-block rounded border border-white bg-white text-cyan-700 px-6 py-3 font-medium transition hover:bg-transparent hover:text-white"
        >
          Get Started
        </a>
        <a
          href="#projects"
          className="inline-block rounded border border-white text-white px-6 py-3 font-medium transition hover:bg-white hover:text-cyan-700"
        >
          My Projects
        </a>
      </div>
    </div>
  </section>
  
  );
};

export default HeroSection;
