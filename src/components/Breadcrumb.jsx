import React from "react";
import { ChevronRight } from "lucide-react";

const Breadcrumb = ({ currentStep }) => {
  const steps = [
    { id: 1, name: "Driver Information" },
    { id: 2, name: "Docs Check" },
    { id: 3, name: "Vehicle Information" },
  ];

  return (
    <div className="flex items-center text-xs sm:text-sm text-gray-600 mb-4 overflow-x-auto">
      <span className="text-teal-400 whitespace-nowrap">Driver Check-In</span>
      {steps.slice(0, currentStep).map((step, index) => (
        <React.Fragment key={step.id}>
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 mx-1 sm:mx-2 flex-shrink-0" />
          <span
            className={`whitespace-nowrap ${
              index === currentStep - 1 ? "text-teal-400" : "text-gray-600"
            }`}
          >
            {step.name}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;
