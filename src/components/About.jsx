import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <section className="max-w-5xl mx-auto px-6 py-20 text-center transition-colors">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-600 font-poppins">
          About ExamHub
        </h1>
        <p className="text-gray-700 dark:text-white text-lg leading-relaxed mb-10">
          ExamHub is a platform built to make learning easier for students by
          providing access to past exam papers, answers, and study resources —
          all in one place. Whether you're preparing for your final exams or
          revising a subject, we make sure you have the right tools to succeed.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl text-blue-500 font-semibold font-poppins mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-inter">
              To empower students by giving them easy access to reliable
              learning materials and exam preparation resources.
            </p>
          </div>

          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl text-blue-500 font-semibold font-poppins mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-inter">
              To become the leading digital education hub for East African
              students, making knowledge accessible and affordable for everyone.
            </p>
          </div>

          <div className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl text-blue-500 font-semibold font-poppins mb-2">
              Our Values
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-inter">
              We believe in quality, accessibility, and continuous learning — to
              help every student achieve their full potential.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;
