import React, { useState } from "react";
import { Check, ChevronRight, Bell, User, Menu, X } from "lucide-react";
import {
  Person,
  Home,
  LocalShipping,
  Inventory2,
  Visibility,
  CheckCircle,
  Description,
  Settings,
  Archive,
  Assignment,
  ExpandLess,
  ExpandMore,
  Bedtime,
  Notifications,
} from "@mui/icons-material";

// Navbar Component
const Navbar = ({ onMenuToggle, isMobileMenuOpen }) => {
  return (
    <div className="bg-teal-500 text-white px-4 sm:px-6 py-4 flex justify-between items-center w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <button
          onClick={onMenuToggle}
          className="lg:hidden mr-3 p-1 rounded hover:bg-teal-600"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
        <h1 className="text-sm sm:text-lg font-medium">
          Inventory Process Management
        </h1>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <Bedtime className="w-5 h-5 cursor-pointer hover:bg-teal-600 hover:bg-opacity-50 p-1 rounded" />
        <Notifications className="w-5 h-5 cursor-pointer hover:bg-teal-600 hover:bg-opacity-50 p-1 rounded" />
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer">
          <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </div>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = ({ isOpen, onClose }) => {
  const [expandedItems, setExpandedItems] = useState({
    "Inbound Logistic": true,
  });

  const toggleExpanded = (itemLabel) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemLabel]: !prev[itemLabel],
    }));
  };

  const sidebarItems = [
    { icon: Home, label: "Home", active: false },
    {
      icon: LocalShipping,
      label: "Inbound Logistic",
      active: true,
      subItems: [
        { icon: Person, label: "Driver Check-In", active: true },
        { icon: Inventory2, label: "Material Offloading", active: false },
        { icon: Visibility, label: "Visual Inspection", active: false },
        { icon: CheckCircle, label: "Quantity Verification", active: false },
        { icon: Description, label: "Material Identification", active: false },
        { icon: Settings, label: "Release to QC", active: false },
        { icon: CheckCircle, label: "QC Approval", active: false },
        { icon: Archive, label: "Put Away", active: false },
        { icon: Assignment, label: "Close the POP", active: false },
      ],
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        w-64 bg-white shadow-sm h-screen border-r border-gray-200 fixed left-0 top-16 bottom-0 z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
      >
        {/* phflow.ai logo section */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
            </div>
            <span className="font-medium text-gray-800 text-sm">phflow.ai</span>
          </div>
        </div>

        <nav className="py-2 overflow-y-auto">
          {sidebarItems.map((item, index) => (
            <div key={index}>
              <div
                className={`flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors duration-150 ${
                  item.active ? "bg-gray-100 text-gray-800" : "text-gray-600"
                }`}
                onClick={() => item.subItems && toggleExpanded(item.label)}
              >
                <item.icon
                  className="w-4 h-4 mr-3 text-gray-500 flex-shrink-0"
                  style={{ fontSize: "16px" }}
                />
                <span className="flex-1 truncate">{item.label}</span>
                {item.subItems &&
                  (expandedItems[item.label] ? (
                    <ExpandLess
                      className="w-3 h-3 text-gray-400 transition-transform duration-200 flex-shrink-0"
                      style={{ fontSize: "12px" }}
                    />
                  ) : (
                    <ExpandMore
                      className="w-3 h-3 text-gray-400 transition-transform duration-200 flex-shrink-0"
                      style={{ fontSize: "12px" }}
                    />
                  ))}
              </div>
              {item.subItems && expandedItems[item.label] && (
                <div className="ml-4 transition-all duration-200 ease-in-out">
                  {item.subItems.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className={`flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors duration-150 ${
                        subItem.active
                          ? "text-gray-800 font-medium bg-gray-50"
                          : "text-gray-600"
                      }`}
                    >
                      <subItem.icon
                        className="w-4 h-4 mr-3 text-gray-500 flex-shrink-0"
                        style={{ fontSize: "16px" }}
                      />
                      <span className="truncate">{subItem.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

// Breadcrumb Component
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

// Step Progress Component
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
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {step.completed ? <Check className="w-4 h-4" /> : step.id}
              </div>
              <span
                className={`mt-2 text-sm text-center ${
                  currentStep === step.id
                    ? "text-blue-600 font-medium"
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
          <span className="text-blue-600 font-medium text-sm">
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

// Step 1: Driver Information
const DriverInformation = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="delivery-appointment"
          checked={formData.deliveryAppointmentConfirmed}
          onChange={(e) =>
            setFormData({
              ...formData,
              deliveryAppointmentConfirmed: e.target.checked,
            })
          }
          className="w-4 h-4 text-blue-600"
        />
        <label
          htmlFor="delivery-appointment"
          className="text-sm font-medium text-gray-700"
        >
          Delivery Appointment Confirmed
        </label>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-2">Driver Name</label>
        <input
          type="text"
          placeholder="Enter the driver name"
          value={formData.driverName}
          onChange={(e) =>
            setFormData({ ...formData, driverName: e.target.value })
          }
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="driver-verified"
          checked={formData.driverIdentificationVerified}
          onChange={(e) =>
            setFormData({
              ...formData,
              driverIdentificationVerified: e.target.checked,
            })
          }
          className="w-4 h-4 text-blue-600"
        />
        <label
          htmlFor="driver-verified"
          className="text-sm font-medium text-gray-700"
        >
          Driver Identification Verified
        </label>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-2">
          Transport Company
        </label>
        <input
          type="text"
          placeholder="Enter the name of the transport company"
          value={formData.transportCompany}
          onChange={(e) =>
            setFormData({ ...formData, transportCompany: e.target.value })
          }
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="transport-verified"
          checked={formData.transportCompanyVerified}
          onChange={(e) =>
            setFormData({
              ...formData,
              transportCompanyVerified: e.target.checked,
            })
          }
          className="w-4 h-4 text-blue-600"
        />
        <label
          htmlFor="transport-verified"
          className="text-sm font-medium text-gray-700"
        >
          Transport Company Identification Verified
        </label>
      </div>
    </div>
  );
};

// Step 2: Docs Check
const DocsCheck = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <label className="block text-sm text-gray-600 mb-2">
          Bill of Lading Number
        </label>
        <div className="text-xs text-gray-500 mb-2 leading-relaxed">
          In accordance with 21 CFR 111.108 and 21 CFR 111.130, the complete
          audit trail of testing number must be documented and verified for all
          finished materials delivery.
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="supplier-verified"
          checked={formData.supplierInfoVerified}
          onChange={(e) =>
            setFormData({ ...formData, supplierInfoVerified: e.target.checked })
          }
          className="w-4 h-4 text-blue-600"
        />
        <label
          htmlFor="supplier-verified"
          className="text-sm font-medium text-gray-700"
        >
          Supplier Information Verified
        </label>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-2">Packing List</label>
        <input
          type="text"
          placeholder="Sub-Packing List"
          value={formData.packingList}
          onChange={(e) =>
            setFormData({ ...formData, packingList: e.target.value })
          }
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="po-packing"
          checked={formData.poInPackingList}
          onChange={(e) =>
            setFormData({ ...formData, poInPackingList: e.target.checked })
          }
          className="w-4 h-4 text-blue-600"
        />
        <label
          htmlFor="po-packing"
          className="text-sm font-medium text-gray-700"
        >
          PO in Packing List
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="po-materials"
          checked={formData.poMaterialsVerified}
          onChange={(e) =>
            setFormData({ ...formData, poMaterialsVerified: e.target.checked })
          }
          className="w-4 h-4 text-blue-600"
        />
        <label
          htmlFor="po-materials"
          className="text-sm font-medium text-gray-700"
        >
          PO Materials Verified
        </label>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-2">
          Documents received by Admin
        </label>
        <select
          value={formData.documentsReceived}
          onChange={(e) =>
            setFormData({ ...formData, documentsReceived: e.target.value })
          }
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
        >
          <option value="">Packing List, Delivery Challan</option>
          <option value="packing-list">Packing List</option>
          <option value="delivery-challan">Delivery Challan</option>
          <option value="both">Both</option>
        </select>
      </div>

      <div className="text-xs text-gray-500 leading-relaxed">
        Each temperature controlled quarantine area must be properly qualified,
        monitored, and cleaned as required by 21 CFR 111.15 (b) in current
        temperature documents that could impact material stability.
      </div>
    </div>
  );
};

// Step 3: Vehicle Information
const VehicleInformation = ({ formData, setFormData }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="vehicle-security"
          checked={formData.vehicleSecurity}
          onChange={(e) =>
            setFormData({ ...formData, vehicleSecurity: e.target.checked })
          }
          className="w-4 h-4 text-blue-600"
        />
        <label
          htmlFor="vehicle-security"
          className="text-sm font-medium text-gray-700"
        >
          Vehicle Security: No extra members in vehicle
        </label>
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-2">Vehicle Type</label>
        <select
          value={formData.vehicleType}
          onChange={(e) =>
            setFormData({ ...formData, vehicleType: e.target.value })
          }
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
        >
          <option value="">Select Vehicle Type</option>
          <option value="truck">Truck</option>
          <option value="van">Van</option>
          <option value="trailer">Trailer</option>
        </select>
      </div>

      <div className="text-xs text-gray-500 mb-4 leading-relaxed">
        Accessing personnel must verify the vehicle type is suitable for
        maintaining material quality during transit, with particular attention
        to temperature control capabilities as specified in 21 CFR 111.10 for
        the materials requiring controlled environmental conditions.
      </div>

      <div className="text-xs text-gray-500 mb-4 leading-relaxed">
        Accessing personnel must check the license plate information following
        established written procedures per 21 CFR 111.103(a) and verify it
        matches any pre-notification documentation provided by the
        transportation supplier.
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="exterior-security"
          checked={formData.exteriorSecuritySeals}
          onChange={(e) =>
            setFormData({
              ...formData,
              exteriorSecuritySeals: e.target.checked,
            })
          }
          className="w-4 h-4 text-blue-600"
        />
        <label
          htmlFor="exterior-security"
          className="text-sm font-medium text-gray-700"
        >
          Exterior Security Seals Intact
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="vehicle-inspected"
          checked={formData.vehicleExteriorInspected}
          onChange={(e) =>
            setFormData({
              ...formData,
              vehicleExteriorInspected: e.target.checked,
            })
          }
          className="w-4 h-4 text-tile-400"
        />
        <label
          htmlFor="vehicle-inspected"
          className="text-sm font-medium text-gray-700"
        >
          Vehicle Exterior Inspected
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Vehicle Height
          </label>
          <select
            value={formData.vehicleHeight}
            onChange={(e) =>
              setFormData({ ...formData, vehicleHeight: e.target.value })
            }
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
          >
            <option value="">Height in Feet</option>
            <option value="8">8 feet</option>
            <option value="10">10 feet</option>
            <option value="12">12 feet</option>
            <option value="14">14 feet</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-2">
            Vehicle Width
          </label>
          <select
            value={formData.vehicleWidth}
            onChange={(e) =>
              setFormData({ ...formData, vehicleWidth: e.target.value })
            }
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
          >
            <option value="">Width in Feet</option>
            <option value="6">6 feet</option>
            <option value="8">8 feet</option>
            <option value="10">10 feet</option>
          </select>
        </div>
      </div>
    </div>
  );
};

// Main Component
const DriverCheckInSystem = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSidebarClose = () => {
    setIsMobileMenuOpen(false);
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
    <div className="min-h-screen bg-gray-50">
      <Navbar
        onMenuToggle={handleMenuToggle}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <Sidebar isOpen={isMobileMenuOpen} onClose={handleSidebarClose} />

      <div className="lg:ml-64 pt-16">
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
      </div>
    </div>
  );
};

export default DriverCheckInSystem;
