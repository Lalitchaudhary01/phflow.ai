import React from "react";
import { Check } from "lucide-react";

const StepProgress = ({ currentStep }) => {
  const steps = [
    { id: 1, name: "Driver Information", completed: currentStep > 1 },
    { id: 2, name: "Docs Check", completed: currentStep > 2 },
    { id: 3, name: "Vehicle Information", completed: false },
  ];

  return (
    <div className="mb-8">
      {/* Desktop Progress */}
      <div className="hidden sm:flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step.completed
                    ? "bg-green-500 text-white"
                    : currentStep === step.id
                    ? "bg-teal-600 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {step.completed ? <Check className="w-4 h-4" /> : step.id}
              </div>
              <span
                className={`mt-2 text-sm text-center ${
                  currentStep === step.id
                    ? "text-teal-600 font-medium"
                    : "text-gray-600"
                }`}
              >
                {step.name}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-16 lg:w-24 h-0.5 mx-4 ${
                  step.completed ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Mobile Progress */}
      <div className="sm:hidden">
        <div className="flex items-center justify-center mb-4">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              steps[currentStep - 1].completed
                ? "bg-green-500 text-white"
                : "bg-blue-500 text-white"
            }`}
          >
            {steps[currentStep - 1].completed ? (
              <Check className="w-4 h-4" />
            ) : (
              currentStep
            )}
          </div>
        </div>
        <div className="text-center">
          <span className="text-teal-600 font-medium text-sm">
            {steps[currentStep - 1].name}
          </span>
          <div className="text-xs text-gray-500 mt-1">
            Step {currentStep} of {steps.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepProgress;
