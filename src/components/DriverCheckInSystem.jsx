import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import StepProgress from "./StepProgress";
import DriverInformation from "./DriverInformation";
import DocsCheck from "./DocsCheck";
import VehicleInformation from "./VehicleInformation";

const DriverCheckInSystem = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 data
    deliveryAppointmentConfirmed: false,
    driverName: "",
    driverIdentificationVerified: false,
    transportCompany: "",
    transportCompanyVerified: false,

    // Step 2 data
    supplierInfoVerified: false,
    packingList: "",
    poInPackingList: false,
    poMaterialsVerified: false,
    documentsReceived: "",

    // Step 3 data
    vehicleSecurity: false,
    vehicleType: "",
    exteriorSecuritySeals: false,
    vehicleExteriorInspected: false,
    vehicleHeight: "",
    vehicleWidth: "",
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

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <DriverInformation formData={formData} setFormData={setFormData} />
        );
      case 2:
        return <DocsCheck formData={formData} setFormData={setFormData} />;
      case 3:
        return (
          <VehicleInformation formData={formData} setFormData={setFormData} />
        );
      default:
        return null;
    }
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
          {renderCurrentStep()}

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between mt-6 sm:mt-8 pt-6 border-t border-gray-200 space-y-3 sm:space-y-0">
            <button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`px-4 sm:px-6 py-2 rounded-lg font-medium text-sm sm:text-base ${
                currentStep === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              BACK
            </button>

            {currentStep < 3 ? (
              <button
                onClick={handleNext}
                className="px-4 sm:px-6 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition-colors text-sm sm:text-base"
              >
                SAVE & CONTINUE
              </button>
            ) : (
              <button
                onClick={handleSave}
                className="px-4 sm:px-6 py-2 bg-teal-500 text-white rounded-lg font-medium hover:bg-teal-600 transition-colors text-sm sm:text-base"
              >
                SAVE
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DriverCheckInSystem;
