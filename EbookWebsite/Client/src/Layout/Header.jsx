import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleServicesToggle = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img src="/Elogo.png" className="h-12" alt="Nectronix Logo" />
          </div>
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={open ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            {open ? (
              <IoClose className="w-5 h-5" />
            ) : (
              <IoMdMenu className="w-5 h-5" />
            )}
          </button>
          <div
            className={`md:flex md:w-auto ${open ? "block" : "hidden"} md:block`}
            id="navbar-default"
          >
            <div className="font-medium md:px-8 flex flex-col md:flex-row md:space-x-8">
              <div>
                <Link
                  to="/"
                  className="block py-2 px-3 rounded hover:bg-fuchsia-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-800 md:p-0 text-fuchsia-800 dark:hover:bg-gray-700 md:dark:hover:bg-transparent md:dark:hover:text-fuchsia-500"
                  aria-current="page"
                >
                  <FaHome className="w-7 h-7" />
                </Link>
              </div>
              <div className="relative">
                <span
                  className={`block py-2 px-3 text-gray-900 rounded hover:bg-fuchsia-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-800 md:p-0 dark:text-fuchsia-800 md:dark:hover:text-fuchsia-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${
                    isServicesOpen ? "text-fuchsia-800" : "text-white"
                  } hover:text-fuchsia-800 font-poppins text-lg cursor-pointer`}
                  onClick={handleServicesToggle}
                >
                  Services
                </span>
                <ul
                  className={`absolute left-0 top-full bg-white rounded-lg shadow-lg mt-2 w-60 ${
                    isServicesOpen ? "block" : "hidden"
                  }`}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <li>
                    <Link
                      to="/ebook-writing"
                      className="font-semibold text-gray-800 block px-4 py-2 hover:bg-gray-200"
                    >
                      Ebook Writing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ebook-publishing"
                      className="font-semibold text-gray-800 block px-4 py-2 hover:bg-gray-200"
                    >
                      Ebook Publishing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ebook-cover-design"
                      className="font-semibold text-gray-800 block px-4 py-2 hover:bg-gray-200"
                    >
                      Ebook Cover Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ebook-proofreading"
                      className="font-semibold text-gray-800 block px-4 py-2 hover:bg-gray-200"
                    >
                      Ebook Proofreading
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ebook-formating"
                      className="font-semibold text-gray-800 block px-4 py-2 hover:bg-gray-200"
                    >
                      Ebook Formatting
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/ebook-consultancy"
                      className="font-semibold text-gray-800 block px-4 py-2 hover:bg-gray-200"
                    >
                      Ebook Consultancy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-fuchsia-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-300 md:p-0 dark:text-fuchsia-800 md:dark:hover:text-fuchsia-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-poppins underline text-xl"
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-fuchsia-100 md:hover:bg-transparent md:border-0 md:hover:text-fuchsia-300 md:p-0 dark:text-fuchsia-800 md:dark:hover:text-fuchsia-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-poppins underline text-xl"
                  style={{ textDecoration: "none" }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
