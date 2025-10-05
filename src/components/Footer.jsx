import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-8 md:px-4 sm:px-2">
      <div className="pb-4 max-w-6xl mx-auto grid grid-cols-[2fr_1fr] md:grid-cols-[2fr-1fr] sm:grid-rows-2 px-4">
        <div className="flex flex-col gap-2">
          <NavLink
            to="/"
            className="flex items-center space-x-2 text-blue-600 font-poppins text-2xl font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.468 9.244 5 7.5 5S4.168 5.468 3 6.253v13C4.168 18.468 5.756 18 7.5 18s3.332.468 4.5 1.247m0-13C13.168 5.468 14.756 5 16.5 5s3.332.468 4.5 1.253v13C19.832 18.468 18.244 18 16.5 18s-3.332.468-4.5 1.247"
              />
            </svg>
            <span>
              Exam
              <span className="text-white dark:text-white font-normal">
                Hub
              </span>
            </span>
          </NavLink>
          <p className="text-sm">
            A free platform providing past papers, notes, and answers for
            students in Somaliland.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-blue-500">Quick Links</h3>{" "}
          <NavLink
            to="/"
            className="hover:text-gray-400  inline-flex items-center text-sm font-regular transition duration-150 font-inter"
          >
            {" "}
            Home{" "}
          </NavLink>{" "}
          <NavLink
            to="/exams"
            className="hover:text-gray-400  inline-flex items-center text-sm font-regular transition duration-150 font-inter"
          >
            {" "}
            Exams{" "}
          </NavLink>{" "}
          <NavLink
            to="/about"
            className="hover:text-gray-400 inline-flex items-center text-sm font-regular transition duration-150 font-inter"
          >
            {" "}
            About{" "}
          </NavLink>{" "}
          <NavLink
            to="/contact"
            className="hover:text-gray-400  inline-flex items-center text-sm font-regular transition duration-150 font-inter"
          >
            {" "}
            Contact{" "}
          </NavLink>
        </div>
      </div>

      <p className="text-center text-xs border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} ExamHub Somaliland. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
