import React, { useState } from "react";
import StepperControl from "./StepperControl";
import Stepper from "./Stepper";
import { StepperContext } from "./context/StepperContext";
import Account from "./Components/Account";
import Details from "./Components/Details";
import Address from "./Components/Address";
import Final from "./Components/Final";

function App() {
  const [currentStep, SetCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "Account Information",
    "Personal Details",
    "Address & Location",
    "Confirmation",
  ];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Address />;
      case 4:
        return <Final />;

      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction == "next" ? newStep++ : newStep--;
    //check if steps are within bounds
    newStep > 0 && newStep <= steps.length && SetCurrentStep(newStep);
  };

  return (
    <div className="md:w-1/2 mx-auto my-16 shadow-xl rounded-2xl pb-2 bg-blue-100 opacity-95">
      {/* Stepper */}
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />
      </div>
      {/* Display Components */}
      <div className="my-10 p-10">
        <StepperContext.Provider
          value={{
            userData,
            setUserData,
            finalData,
            setFinalData,
          }}
        >
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>
      {/* Navigation Controls */}
      <StepperControl
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
  );
}

export default App;
