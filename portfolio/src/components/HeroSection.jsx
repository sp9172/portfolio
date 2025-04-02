import React from 'react'

const HeroSection = () => {
  return (
    <section class="bg-gradient-to-r from-teal-400 to-yellow-200 lg:grid lg:h-screen lg:place-content-center">
  <div
    class="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
  >
    <div class="max-w-prose text-left">
      <h3 className='text-xl italic text-teal-900'>Hello !!!</h3>
      <h1 class="text-7xl font-bold text-gray-800 capitalize pb-8">
        I'm Prathamesh Surywanshi
      </h1>

      <p className="text-xl mt-3 pb-5">Front-End Developer | Shopify & Liquid  | Crafting Scalable & User-Centric Web Experiences</p>

      <div class="mt-4 flex gap-4 sm:mt-6">
        <a
          class="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          href="#"
        >
          Get Started
        </a>

        
      </div>
    </div>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 768"
      class="mx-auto hidden max-w-md text-gray-900 md:block"
    >
      

    </svg>
  </div>
</section>
  )
}

export default HeroSection
