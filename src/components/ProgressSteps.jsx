import React from "react";
import { Check } from "lucide-react";

const ProgressSteps = ({ currentStep }) => {
  const steps = [
    { number: 1, title: "Driver Information" },
    { number: 2, title: "Docs Check" },
    { number: 3, title: "Vehicle Information" },
  ];

  return (
    <div className="flex items-center justify-center mb-12 px-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                currentStep >= step.number
                  ? "bg-teal-500 text-white"
                  : currentStep === step.number
                  ? "bg-teal-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {currentStep > step.number ? (
                <Check className="w-4 h-4" />
              ) : (
                step.number
              )}
            </div>
            <span
              className={`mt-2 text-sm font-medium text-center ${
                currentStep >= step.number ? "text-teal-600" : "text-gray-500"
              }`}
            >
              {step.title}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-24 md:w-32 lg:w-40 h-px mx-4 md:mx-6 lg:mx-8 ${
                currentStep > step.number ? "bg-teal-500" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;
