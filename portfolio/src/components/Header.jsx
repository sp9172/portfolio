import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-fuchsia-500 to-cyan-500 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo or Title */}
          <div className="text-white text-xl font-bold">My Portfolio</div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 text-lg uppercase">
              {["Home", "About", "Education", "Experience", "Projects", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                    className="text-white transition hover:text-black"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resume Button & Mobile Menu Icon */}
          <div className="flex items-center gap-4">
            <a
              className="hidden sm:inline-block rounded-md bg-teal-600 px-4 py-2 text-white font-medium hover:bg-teal-700 transition"
              href="Prathamesh-surywanshi-front-end (1).pdf"
            >
              Download Resume
            </a>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-2">
            <ul className="flex flex-col gap-4 text-black text-lg uppercase">
              {["Home", "About", "Education", "Experience", "Projects", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.replace(/\s+/g, "").toLowerCase()}`}
                    className="block py-1 border-b border-white/30"
                    onClick={() => setMobileMenuOpen(false)} // Close menu on click
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  className="block rounded-md bg-teal-600 px-4 py-2 text-center text-white font-medium hover:bg-teal-700 transition"
                  href="Prathamesh-surywanshi-front-end (1).pdf"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
