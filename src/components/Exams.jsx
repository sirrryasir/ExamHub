import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";
import examsData from "../data/exams.json";
import Footer from "./Footer";

const Exams = () => {
  const location = useLocation();
  const [filters, setFilters] = useState({ subject: "All", year: "All" });
  const [searchQuery, setSearchQuery] = useState("");
  const [exams, setExams] = useState([]);

  useEffect(() => {
    setExams(examsData);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query") || "";
    setSearchQuery(query.toLowerCase());
  }, [location.search]);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredExams = exams.filter((exam) => {
    const subjectMatch =
      filters.subject === "All" || exam.subject === filters.subject;
    const yearMatch =
      filters.year === "All" || exam.year.toString() === filters.year;
    const queryMatch =
      !searchQuery ||
      exam.title.toLowerCase().includes(searchQuery) ||
      exam.subject.toLowerCase().includes(searchQuery) ||
      exam.year.toString().includes(searchQuery);
    return subjectMatch && yearMatch && queryMatch;
  });

  return (
    <>
      <Navbar />
      <section id="exams" className="mb-20 py-10 px-6 md:px-8">
        <h2 className="text-4xl font-poppins font-bold text-gray-800 dark:text-white mb-8">
          Past Exam Papers & Answers
          {filteredExams.length ? <h1>{`(${filteredExams.length})`}</h1> : ""}
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Section */}
          <div className="w-full lg:w-1/4 p-6 bg-white rounded-xl shadow-md h-fit dark:bg-gray-800">
            <h3 className="text-xl font-poppins font-semibold text-gray-800 dark:text-white mb-4 border-b border-gray-200 pb-3">
              Filter
            </h3>

            <div className="mb-5">
              <label
                htmlFor="subject-filter"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Subject
              </label>
              <select
                id="subject-filter"
                name="subject"
                onChange={handleFilterChange}
                value={filters.subject}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 font-inter text-gray-700 dark:text-gray-300"
              >
                <option value="All">All Subjects</option>
                <option value="Mathematics">Mathematics</option>
                <option value="English">English</option>
                <option value="Science">Science</option>
                <option value="Somali">Somali</option>
                <option value="Islamic">Islamic</option>
                <option value="Arabic">Arabic</option>
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="year-filter"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Year
              </label>
              <select
                id="year-filter"
                name="year"
                onChange={handleFilterChange}
                value={filters.year}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 font-inter text-gray-700 dark:text-gray-300"
              >
                <option value="All">All Years</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>

            <button
              onClick={() => setFilters({ subject: "All", year: "All" })}
              className="w-full bg-gray-200 text-gray-700 font-poppins py-3 rounded-lg hover:bg-gray-300 transition duration-150 mt-4 text-base dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
            >
              Reset Filters
            </button>
          </div>

          {/* Exam Cards */}

          <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExams.length > 0 ? (
              filteredExams.map((exam) => (
                <Card
                  key={exam.id}
                  title={exam.title}
                  subject={exam.subject}
                  year={exam.year}
                  pdfLink={exam.pdfLink}
                  answerLink={exam.answerLink}
                />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600 dark:text-gray-300 text-lg py-10 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                No exams found matching your criteria.
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Exams;
