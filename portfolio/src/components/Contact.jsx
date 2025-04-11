import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-br from-fuchsia-600 via-cyan-500 to-blue-500 py-20 px-6 text-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold underline decoration-white underline-offset-8 mb-12">
          Contact Me
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed mb-12 text-white/90">
          Feel free to reach out for collaborations or just a friendly chat.
        </p>

        {/* Contact Info Cards */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Phone */}
          <div className="relative border-l-4 border-white pl-8 group hover:scale-[1.01] transition-all duration-300 text-left">
            <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-white text-fuchsia-700 flex items-center justify-center shadow-md">
              <Phone className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-white/80 mt-1">+91 9172851297</p>
          </div>

          {/* Email */}
          <div className="relative border-l-4 border-white pl-8 group hover:scale-[1.01] transition-all duration-300 text-left">
            <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-white text-fuchsia-700 flex items-center justify-center shadow-md">
              <Mail className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-white/80 mt-1">psurywanshi620@gmail.com</p>
          </div>

          {/* Location */}
          <div className="relative border-l-4 border-white pl-8 group hover:scale-[1.01] transition-all duration-300 text-left">
            <div className="absolute -left-4 top-0 w-8 h-8 rounded-full bg-white text-fuchsia-700 flex items-center justify-center shadow-md">
              <MapPin className="w-4 h-4" />
            </div>
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-white/80 mt-1">Kolhapur, Maharashtra</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
