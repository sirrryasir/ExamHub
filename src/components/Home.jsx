import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BookOpen, Search, CheckCircle } from "lucide-react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/exams?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="text-center py-20 bg-gradient-to-b from-blue-600 to-indigo-700 text-white">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-4 leading-tight">
          Your Somaliland Exam Success{" "}
          <span className="text-yellow-400">Starts Here.</span>
        </h1>
        <p className="text-xl text-gray-200 font-inter mb-8 max-w-2xl mx-auto">
          Access verified past papers and answers from Somaliland’s official
          exams.
        </p>
        <Link to="/exams">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg font-poppins transition duration-200">
            Browse All Exams
          </button>
        </Link>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold font-poppins mb-12 text-gray-900 dark:text-white">
            Why Choose ExamHub?
          </h2>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition">
              <BookOpen className="mx-auto mb-4 text-blue-600 w-12 h-12" />
              <h3 className="text-xl font-semibold font-poppins mb-2">
                Official Papers
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-inter">
                Get access to real exam papers directly sourced from verified
                records.
              </p>
            </div>

            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition">
              <Search className="mx-auto mb-4 text-blue-600 w-12 h-12" />
              <h3 className="text-xl font-semibold font-poppins mb-2">
                Smart Search
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-inter">
                Filter by subject, year, or paper type — find what you need
                instantly.
              </p>
            </div>

            <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition">
              <CheckCircle className="mx-auto mb-4 text-blue-600 w-12 h-12" />
              <h3 className="text-xl font-semibold font-poppins mb-2">
                Answers Included
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-inter">
                Review official answer sheets to understand how marks are
                earned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-yellow-400 text-center text-gray-900">
        <h2 className="text-3xl font-bold font-poppins mb-4">
          Ready to Ace Your Next Exam?
        </h2>
        <p className="text-lg font-inter mb-8">
          Search by subject or year to get started right away.
        </p>

        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row w-full max-w-2xl mx-auto rounded-xl shadow-lg overflow-hidden border-2 border-gray-800 bg-white"
        >
          <input
            type="search"
            placeholder="Search by Subject or Year..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 text-lg text-gray-700 focus:outline-none font-inter"
          />
          <button
            type="submit"
            className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 text-lg font-poppins transition duration-150"
          >
            Search
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default Home;
