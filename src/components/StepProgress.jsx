import React from "react";
import { Check } from "lucide-react";
import { Progress, Chip } from "@heroui/react";

const StepProgress = ({ currentStep }) => {
  const steps = [
    { id: 1, name: "Driver Information", completed: currentStep > 1 },
    { id: 2, name: "Docs Check", completed: currentStep > 2 },
    { id: 3, name: "Vehicle Information", completed: currentStep > 3 },
  ];

  return (
    <div className="mb-8">
      {/* Desktop Progress */}
      <div className="hidden sm:flex items-center justify-between relative">
        {/* Background line - only between circles */}
        <div
          className="absolute top-4 h-0.5 bg-gray-300"
          style={{ left: "3rem", right: "3rem" }}
        ></div>

        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center relative">
            <div className="flex flex-col items-center">
              <Chip
                variant="solid"
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium relative z-10 min-w-8 ${
                  step.completed
                    ? "bg-green-500 text-white"
                    : currentStep === step.id
                    ? "bg-teal-500 text-white"
                    : "bg-white border-2 border-gray-300 text-gray-600"
                }`}
              >
                {step.completed ? <Check className="w-4 h-4" /> : step.id}
              </Chip>
              <span
                className={`mt-2 text-sm text-center ${
                  currentStep === step.id
                    ? "text-teal-500 font-medium"
                    : step.completed
                    ? "text-green-600 font-medium"
                    : "text-gray-600"
                }`}
              >
                {step.name}
              </span>
            </div>

            {/* Progress line overlay - only between circles */}
            {index < steps.length - 1 &&
              (currentStep > step.id || step.completed) && (
                <div
                  className="absolute top-4 left-8 h-0.5 bg-gray-500 z-0"
                  style={{ width: "calc(100vw / 3 - 4rem)" }}
                ></div>
              )}
          </div>
        ))}
      </div>

      {/* Mobile Progress */}
      <div className="sm:hidden">
        <div className="flex items-center justify-center mb-4">
          <Chip
            variant="solid"
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium min-w-8 ${
              steps[currentStep - 1].completed
                ? "bg-green-500 text-white"
                : currentStep === steps[currentStep - 1].id
                ? "bg-teal-500 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {steps[currentStep - 1].completed ? (
              <Check className="w-4 h-4" />
            ) : (
              currentStep
            )}
          </Chip>
        </div>
        <div className="text-center">
          <span
            className={`text-sm font-medium ${
              currentStep === steps[currentStep - 1].id
                ? "text-teal-500"
                : steps[currentStep - 1].completed
                ? "text-green-600"
                : "text-gray-600"
            }`}
          >
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
