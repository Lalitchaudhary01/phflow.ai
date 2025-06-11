import React from "react";

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

export default DriverInformation;
