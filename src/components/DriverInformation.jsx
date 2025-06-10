import React from "react";

const DriverInformation = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-8">
      {/* Delivery Appointment Confirmed */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="deliveryConfirmed"
            className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
            checked={formData.deliveryAppointmentConfirmed}
            onChange={(e) =>
              handleInputChange(
                "deliveryAppointmentConfirmed",
                e.target.checked
              )
            }
          />
          <label
            htmlFor="deliveryConfirmed"
            className="text-sm text-gray-700 font-medium"
          >
            Delivery Appointment Confirmed
          </label>
        </div>

        <div className="ml-7">
          <div className="text-xs text-gray-500 mb-2">Driver Name</div>
          <input
            type="text"
            className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-sm"
            value={formData.driverName}
            onChange={(e) => handleInputChange("driverName", e.target.value)}
            placeholder="Enter the driver name"
          />
        </div>
      </div>

      {/* Driver Identification Verified */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="driverIdVerified"
            className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
            checked={formData.driverIdentificationVerified}
            onChange={(e) =>
              handleInputChange(
                "driverIdentificationVerified",
                e.target.checked
              )
            }
          />
          <label
            htmlFor="driverIdVerified"
            className="text-sm text-gray-700 font-medium"
          >
            Driver Identification Verified
          </label>
        </div>

        <div className="ml-7 space-y-4">
          <div>
            <div className="text-xs text-gray-500 mb-2">Company Emp ID</div>
            <input
              type="text"
              className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-sm"
              value={formData.companyEmpId}
              onChange={(e) =>
                handleInputChange("companyEmpId", e.target.value)
              }
              placeholder=""
            />
          </div>

          <div>
            <div className="text-xs text-gray-500 mb-2">
              Enter the driver contact
            </div>
            <input
              type="text"
              className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-sm"
              value={formData.driverContact}
              onChange={(e) =>
                handleInputChange("driverContact", e.target.value)
              }
              placeholder=""
            />
          </div>
        </div>
      </div>

      {/* Transport Company Identification Verified */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="transportCompanyVerified"
            className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
            checked={formData.transportCompanyIdentificationVerified}
            onChange={(e) =>
              handleInputChange(
                "transportCompanyIdentificationVerified",
                e.target.checked
              )
            }
          />
          <label
            htmlFor="transportCompanyVerified"
            className="text-sm text-gray-700 font-medium"
          >
            Transport Company Identification Verified
          </label>
        </div>

        <div className="ml-7">
          <div className="text-xs text-gray-500 mb-2">Transport Company</div>
          <input
            type="text"
            className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-sm"
            value={formData.transportCompany}
            onChange={(e) =>
              handleInputChange("transportCompany", e.target.value)
            }
            placeholder="Enter the name of the transport company"
          />
        </div>
      </div>
    </div>
  );
};

export default DriverInformation;
