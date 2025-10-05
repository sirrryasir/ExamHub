import React from "react";

const Card = ({ title, subject, year, pdfLink, answerLink }) => {
  return (
    <div className="bg-white p-5 rounded-xl border-t-4 border-blue-600 shadow-md hover:shadow-xl transition duration-300 flex flex-col">
      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-2 bg-blue-100 text-blue-800 font-inter">
        {subject}
      </span>

      <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-1 leading-tight">
        {title}
      </h3>
      <p className="text-gray-500 font-inter text-sm mb-4">Year: {year}</p>

      <div className="mt-auto flex space-x-3 pt-3 border-t border-gray-100">
        {/* PDF Button */}
        <a
          href={pdfLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex justify-center items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-lg transition duration-150 text-sm shadow-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          <span>PDF</span>
        </a>

        {/* Answer Button (only if available) */}
        {answerLink && (
          <a
            href={answerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex justify-center items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-2 px-3 rounded-lg transition duration-150 text-sm shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Answer</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
