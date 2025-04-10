import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id='education' className="bg-gradient-to-br from-fuchsia-600 via-cyan-500 to-blue-500 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black underline decoration-cyan-300 underline-offset-8 mb-12">
          Education
        </h2>

        {/* Stack on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:flex-row md:gap-12 gap-10">
          {/* Education Card 1 */}
          <div className="relative border-l-4 border-white pl-8 group hover:scale-[1.01] transition-all duration-300">
            <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
              <GraduationCap className="w-5 h-5 text-fuchsia-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">
              BSc in Computer Science
            </h3>
            <p className="text-gray-100 mt-1">Gopal Krishna Gokhale College, Kolhapur</p>
            <p className="text-white font-bold mt-1">2017 - 2020</p>
          </div>

          {/* Education Card 2 */}
          <div className="relative border-l-4 border-white pl-8 group hover:scale-[1.01] transition-all duration-300">
            <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
              <GraduationCap className="w-5 h-5 text-cyan-600" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">
              Master of Computer Applications
            </h3>
            <p className="text-gray-100 mt-1">Shivaji University, Kolhapur</p>
            <p className="text-white font-bold mt-1">2020 - 2022</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
