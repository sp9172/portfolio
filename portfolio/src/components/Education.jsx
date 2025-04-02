import React from 'react'

const Education = () => {
  return (
    <section className='bg-gradient-to-r from-fuchsia-500 to-cyan-500'>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
        <div>
          <div className="max-w-lg md:max-w-none">
          <h2 class="md:text-7xl font-bold text-white capitalize pb-8 underline decoration-cyan-300 underline-offset-8 sm:text-5xl">
             Education
            </h2>

         
          </div>
        </div>
  
        <div>
        <h3 class="md:text-7xl font-bold text-white capitalize pb-8 sm:text-5xl">
             2017 - 2022
       </h3>

       <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 py-8">
    <p className="font-semibold text-white">Bachelor of Science in Computer Science</p>
    <p className="text-gray-900">Gopal Krishna Gokhale College, Kolhapur.</p>
    <p className="text-gray-900 font-bold">2017 - 2020</p>
  </div>

  <div className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300">
    <p className="font-semibold text-white">Master of Computer Applications</p>
    <p className="text-gray-900">Shivaji University, Kolhapur.</p>
    <p className="text-gray-900 font-bold">2020 - 2022</p>
  </div>
        
        </div>
      </div>
    </div>
  </section>

  )
}

export default Education
