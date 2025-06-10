import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

// Import all components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ProgressSteps from "./ProgressSteps";
import DriverInformation from "./DriverInformation";
import DocsCheck from "./DocsCheck";
import VehicleInformation from "./VehicleInformation";

const DriverCheckInSystem = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Driver Information
    driverName: "",
    phoneNumber: "",
    address: "",
    deliveryAppointmentConfirmed: false,
    driverIdentificationVerified: false,
    transportCompanyIdentificationVerified: false,
    companyEmpId: "",
    driverContact: "",
    transportCompany: "",

    // Docs Check
    docInformationVerified: false,
    poInPackingList: false,
    poMaterialsVerified: false,
    packingListDeliveryChalan:
      "Each transporter identified, quarantine areas must be properly qualified, maintained and planned as required by TUMS G17 with a present temperature assessment like casual hazard based control.",

    // Vehicle Information
    vehicleSecuritySeals: false,
    externalSecuritySealsIntact: false,
    vehicleExteriorInspected: false,
    vehicleType: "",
    heightOfVehicle: "",
    widthOfVehicle: "",
    lengthOfVehicle: "",
    licensePlate: "",
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

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
    // Handle save logic here
    console.log("Form Data:", formData);
    alert("Form saved successfully!");
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Driver Information";
      case 2:
        return "Docs Check";
      case 3:
        return "Vehicle Information";
      default:
        return "Driver Information";
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <DriverInformation
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 2:
        return (
          <DocsCheck
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      case 3:
        return (
          <VehicleInformation
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
      default:
        return (
          <DriverInformation
            formData={formData}
            handleInputChange={handleInputChange}
          />
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <Navbar />

        <div className="p-6">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <span>Driver Check-In</span>
            <ChevronRight className="w-4 h-4" />
            <span>{getStepTitle()}</span>
          </div>

          {/* Progress Steps */}
          <ProgressSteps currentStep={currentStep} />

          {/* Form Content */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-8 py-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">
                Driver Check-In
              </h2>
            </div>

            <div className="px-8 py-6">{renderCurrentStep()}</div>

            {/* Action Buttons */}
            <div className="px-8 py-6 border-t border-gray-200 flex justify-between">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`px-6 py-2 rounded text-sm font-medium ${
                  currentStep === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                BACK
              </button>

              <button
                onClick={currentStep === 3 ? handleSave : handleNext}
                className="px-6 py-2 bg-teal-500 text-white rounded text-sm font-medium hover:bg-teal-600"
              >
                {currentStep === 3 ? "SAVE" : "SAVE & CONTINUE"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCheckInSystem;
