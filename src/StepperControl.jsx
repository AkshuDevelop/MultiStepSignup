import React from "react";

function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="container flex justify-around mt-4 mb-8">
      {/*Back Button */}
      <button
        onClick={() => handleClick()}
        className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bf-slate-700 hover:bg-blue-700 hover:text-white transition duration-200 ease-in-out ${
          currentStep == 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>

      {/*Next Button */}
      <button
        onClick={() => handleClick("next")}
        className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bf-slate-700 hover:bg-blue-700 transition duration-200 ease-in-out"
      >
        {currentStep == steps.length ? "confirm" : "next"}
      </button>
    </div>
  );
}

export default StepperControl;
