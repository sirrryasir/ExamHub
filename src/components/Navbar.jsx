import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

const navClassStyle = (isActive) => {
  const baseClasses =
    "inline-flex items-center px-3 py-5 text-sm font-medium transition duration-150 font-inter";
  const activeClasses = "text-blue-600";
  const inactiveClasses =
    "text-gray-500 dark:text-gray-300 hover:text-gray-400";
  return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
};

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !isDarkMode;
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
    setIsDarkMode(nextDark);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
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
            <span className="text-gray-600 dark:text-white font-normal">
              Hub
            </span>
          </span>
        </NavLink>

        {/* Menu button (mobile) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden text-2xl p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop menu */}
        <div className="hidden sm:flex space-x-8 items-center">
          <NavLink to="/" className={({ isActive }) => navClassStyle(isActive)}>
            Home
          </NavLink>
          <NavLink
            to="/exams"
            className={({ isActive }) => navClassStyle(isActive)}
          >
            Exams
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => navClassStyle(isActive)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => navClassStyle(isActive)}
          >
            Contact
          </NavLink>
        </div>
        <button
          onClick={toggleDarkMode}
          className="ml-3 p-2 rounded-md bg-gray-100 dark:bg-gray-800"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 border-t flex flex-col px-4 py-1 ">
          <NavLink to="/" className={({ isActive }) => navClassStyle(isActive)}>
            Home
          </NavLink>
          <NavLink
            to="/exams"
            className={({ isActive }) => navClassStyle(isActive)}
          >
            Exams
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => navClassStyle(isActive)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => navClassStyle(isActive)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
