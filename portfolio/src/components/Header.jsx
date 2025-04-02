import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Header = () => {


  return (
    <header className="bg-gradient-to-r from-teal-400 to-yellow-200">
  <div className="mx-auto max-w-screen-xl px-8 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
    

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-lg uppercase">
          <li>
              <a className="text-black-500 transition hover:text-white-500/75" href="#"> Home</a>
            </li>
            <li>
              <a className="text-black-500 transition hover:text-black-500/75" href="#"> About Me </a>
            </li>

            <li>
              <a className="text-black-500 transition hover:text-black-500/75" href="#"> Education </a>
            </li>

            <li>
              <a className="text-black-500 transition hover:text-black-500/75" href="#"> Experience </a>
            </li>

            <li>
              <a className="text-black-500 transition hover:text-black-500/75" href="#"> Projects </a>
            </li>

            <li>
              <a className="text-black-500 transition hover:text-black-500/75" href="#"> Contact </a>
            </li>

          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-teal-600 px-5 py-2.5 text-lg font-medium text-white shadow-sm"
            href="#"
          >
            Download Resume
          </a>

        </div>

        <div className="block md:hidden">
          <button
            className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  );
};

export default Header;