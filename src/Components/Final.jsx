import React from "react";

function Final() {
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="text-green-400">
          <svg
            className="w-24 h-24"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="mt-3 text-xl font-semibold uppercase text-green-500">
          Congratulations!
        </div>
        <div className="mt-3 text-lg font-medium text-gray-500">
          Your Account Has Been Created.
        </div>
        <a className="mt-10" href="/">
          <button
            className="h-10 px-5 text-green-700 transition-colors duration-150 border
        border-gray-300 rounded-lg focus:shadow-outline hover:bg-green-500 hover:text-green-100"
          >
            Close
          </button>
        </a>
      </div>
    </div>
  );
}

export default Final;
