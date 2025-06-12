import React from "react";

const VehicleInformationForm = (props) => {
  // RJSF passes different props to custom field components
  const { formData = {}, onChange, schema, uiSchema } = props;

  // Helper function to update form data in RJSF format
  const handleChange = (field, value) => {
    const newFormData = { ...formData, [field]: value };
    onChange(newFormData);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="vehicle-security"
          checked={formData.vehicleSecurity || false}
          onChange={(e) => handleChange("vehicleSecurity", e.target.checked)}
          className="w-4 h-4 text-blue-600"
        />
        <label
          htmlFor="vehicle-security"
          className="text-sm font-medium text-gray-700"
        >
          Vehicle Security: No extra members in vehicle
        </label>
      </div>

      <div className="relative">
        <select
          value={formData.vehicleType || ""}
          onChange={(e) => handleChange("vehicleType", e.target.value)}
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base peer"
          id="vehicleType"
        >
          <option value="">Select Vehicle Type</option>
          <option value="truck">Truck</option>
          <option value="van">Van</option>
          <option value="trailer">Trailer</option>
        </select>
        <label
          htmlFor="vehicleType"
          className="absolute left-3 -top-2.5 text-xs text-gray-600 bg-white px-2 peer-focus:text-blue-600 transition-all duration-200"
        >
          Vehicle Type
        </label>
      </div>
      <div className="text-xs text-gray-500 mb-4 leading-relaxed">
        Accessing personnel must verify the vehicle type is suitable for
        maintaining material quality during transit, with particular attention
        to temperature control capabilities as specified in 21 CFR 111.10 for
        the materials requiring controlled environmental conditions.
      </div>

      <div className="relative">
        <input
          type="text"
          value={formData.licensePlate || ""}
          onChange={(e) => handleChange("licensePlate", e.target.value)}
          placeholder="Enter license plate number"
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base peer"
          id="licensePlate"
        />
        <label
          htmlFor="licensePlate"
          className="absolute left-3 -top-2.5 text-xs text-gray-600 bg-white px-2 peer-focus:text-blue-600 transition-all duration-200"
        >
          License Plate
        </label>
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
          checked={formData.exteriorSecuritySeals || false}
          onChange={(e) =>
            handleChange("exteriorSecuritySeals", e.target.checked)
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
          checked={formData.vehicleExteriorInspected || false}
          onChange={(e) =>
            handleChange("vehicleExteriorInspected", e.target.checked)
          }
          className="w-4 h-4 text-blue-600"
        />
        <label
          htmlFor="vehicle-inspected"
          className="text-sm font-medium text-gray-700"
        >
          Vehicle Exterior Inspected
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <select
            value={formData.vehicleHeight || ""}
            onChange={(e) => handleChange("vehicleHeight", e.target.value)}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base peer"
            id="vehicleHeight"
          >
            <option value="">Height in Feet</option>
            <option value="8">8 feet</option>
            <option value="10">10 feet</option>
            <option value="12">12 feet</option>
            <option value="14">14 feet</option>
          </select>
          <label
            htmlFor="vehicleHeight"
            className="absolute left-3 -top-2.5 text-xs text-gray-600 bg-white px-2 peer-focus:text-blue-600 transition-all duration-200"
          >
            Vehicle Height
          </label>
        </div>

        <div className="relative">
          <select
            value={formData.vehicleWidth || ""}
            onChange={(e) => handleChange("vehicleWidth", e.target.value)}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base peer"
            id="vehicleWidth"
          >
            <option value="">Width in Feet</option>
            <option value="6">6 feet</option>
            <option value="8">8 feet</option>
            <option value="10">10 feet</option>
          </select>
          <label
            htmlFor="vehicleWidth"
            className="absolute left-3 -top-2.5 text-xs text-gray-600 bg-white px-2 peer-focus:text-blue-600 transition-all duration-200"
          >
            Vehicle Width
          </label>
        </div>
      </div>
    </div>
  );
};

export default VehicleInformationForm;
