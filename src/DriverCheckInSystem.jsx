import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@heroui/react";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";
import Breadcrumb from "./components/Breadcrumb";
import StepProgress from "./components/StepProgress";
import DriverInformationForm from "./components/forms/DriverInformationForm";
import DocsCheckForm from "./components/forms/DocsCheckForm";
import VehicleInformationForm from "./components/forms/VehicleInformationForm";
import { schema } from "./schemas/driverCheckInSchema";
import { uiSchema } from "./schemas/uiSchema";

const fields = {
  DriverInformationForm,
  DocsCheckForm,
  VehicleInformationForm,
};

const DriverCheckInSystem = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    step1: {},
    step2: {},
    step3: {},
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSave = () => {
    alert("Form submitted successfully!");
    console.log("Form Data:", formData);
  };

  const handleFormChange = ({ formData: newFormData }) => {
    // Only update if the data has actually changed
    const currentStepKey = `step${currentStep}`;
    const newStepData = newFormData[currentStepKey] || {};

    setFormData((prev) => {
      // Check if the data is actually different to prevent unnecessary updates
      if (
        JSON.stringify(prev[currentStepKey]) !== JSON.stringify(newStepData)
      ) {
        return {
          ...prev,
          [currentStepKey]: newStepData,
        };
      }
      return prev;
    });
  };

  const getCurrentStepSchema = () => {
    return {
      type: "object",
      properties: {
        [`step${currentStep}`]: schema.properties[`step${currentStep}`],
      },
    };
  };

  const getCurrentStepUiSchema = () => {
    return {
      [`step${currentStep}`]: uiSchema[`step${currentStep}`],
    };
  };

  const getCurrentStepFormData = () => {
    return {
      [`step${currentStep}`]: formData[`step${currentStep}`] || {},
    };
  };

  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb currentStep={currentStep} />
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Driver Check-In
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
        <StepProgress currentStep={currentStep} />
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 lg:p-8">
          <Form
            schema={getCurrentStepSchema()}
            uiSchema={getCurrentStepUiSchema()}
            formData={getCurrentStepFormData()}
            onChange={handleFormChange}
            fields={fields}
            validator={validator}
            liveValidate
            showErrorList={false}
            noHtml5Validate
          >
            {/* Empty children to hide submit button */}
            <div></div>
          </Form>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 sm:mt-8 pt-6 border-t border-gray-200 space-y-3 sm:space-y-0 relative">
            {/* Back Button - Left */}
            <Button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base ${
                currentStep === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              variant="flat"
            >
              <ChevronLeft size={16} />
              BACK
            </Button>

            {/* Save & Resume Later - Center */}
            <Button
              onClick={handleSave}
              className="px-4 sm:px-6 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition-colors text-sm sm:text-base sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2"
              color="primary"
            >
              SAVE & RESUME LATER
            </Button>

            {/* Next Button - Right */}
            {currentStep < 3 ? (
              <Button
                onClick={handleNext}
                className="flex items-center gap-2 px-4 sm:px-6 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition-colors text-sm sm:text-base"
                color="primary"
              >
                NEXT
                <ChevronRight size={16} />
              </Button>
            ) : (
              <Button
                onClick={handleSave}
                className="px-4 sm:px-6 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition-colors text-sm sm:text-base"
                color="primary"
              >
                SAVE
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverCheckInSystem;
