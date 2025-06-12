import React from "react";

const DriverInformationForm = ({ formData, onChange, schema }) => {
  const handleChange = (field) => (event) => {
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    onChange({ ...formData, [field]: value });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="delivery-appointment"
          checked={formData.deliveryAppointmentConfirmed || false}
          onChange={handleChange("deliveryAppointmentConfirmed")}
          className="w-4 h-4 text-blue-600"
        />
        <label
          htmlFor="delivery-appointment"
          className="text-sm font-medium text-gray-700"
        >
          Delivery Appointment Confirmed
        </label>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder={
            schema.properties.driverName.placeholder || "Enter the driver name"
          }
          value={formData.driverName || ""}
          onChange={handleChange("driverName")}
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base peer"
          id="driverName"
        />
        <label
          htmlFor="driverName"
          className="absolute left-3 -top-2.5 text-xs text-gray-600 bg-white px-2 peer-focus:text-blue-600 transition-all duration-200"
        >
          Driver Name
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="driver-verified"
          checked={formData.driverIdentificationVerified || false}
          onChange={handleChange("driverIdentificationVerified")}
          className="w-4 h-4 text-blue-600"
        />
        <label
          htmlFor="driver-verified"
          className="text-sm font-medium text-gray-700"
        >
          Driver Identification Verified
        </label>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder={
            schema.properties.transportCompany.placeholder ||
            "Enter the name of the transport company"
          }
          value={formData.transportCompany || ""}
          onChange={handleChange("transportCompany")}
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base peer"
          id="transportCompany"
        />
        <label
          htmlFor="transportCompany"
          className="absolute left-3 -top-2.5 text-xs text-gray-600 bg-white px-2 peer-focus:text-blue-600 transition-all duration-200"
        >
          Transport Company
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="transport-verified"
          checked={formData.transportCompanyVerified || false}
          onChange={handleChange("transportCompanyVerified")}
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

export default DriverInformationForm;
