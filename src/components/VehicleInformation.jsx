import React from "react";

const VehicleInformation = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      {/* Vehicle Security */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="vehicleSecuritySeals"
            className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
            checked={formData.vehicleSecuritySeals}
            onChange={(e) =>
              handleInputChange("vehicleSecuritySeals", e.target.checked)
            }
          />
          <label
            htmlFor="vehicleSecuritySeals"
            className="text-sm text-gray-700 font-medium"
          >
            Vehicle Security: No extra members in vehicle
          </label>
        </div>

        <div className="ml-7">
          <div className="text-xs text-gray-500 mb-2">Vehicle Type</div>
          <select
            className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-sm bg-white"
            value={formData.vehicleType}
            onChange={(e) => handleInputChange("vehicleType", e.target.value)}
          >
            <option value="">Select vehicle type</option>
            <option value="truck">Truck</option>
            <option value="trailer">Trailer</option>
            <option value="van">Van</option>
            <option value="container">Container</option>
            <option value="pickup">Pickup</option>
          </select>
        </div>
      </div>

      {/* Security Information Box */}
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-md space-y-3">
        <p className="text-xs text-yellow-800 leading-relaxed">
          Security personnel must verify the vehicle size is suitable for
          maneuvering activities quickly, loading vehicle etc and particular
          attention to employment centres capabilities in (*EM P31 T5U). All
          such otherwise requiring confirmed environmental validation.
        </p>
        <div className="text-xs text-yellow-700 font-medium">License Plate</div>
        <p className="text-xs text-yellow-800 leading-relaxed">
          Security personnel must check the license plate mentioned following
          regulations to allow procedures as GF (*GS P31 T6BH) which only J.
          minutes are pre-notification recommended provided by the
          transportation supplier.
        </p>
      </div>

      {/* Security Checks */}
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="externalSecuritySeals"
            className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
            checked={formData.externalSecuritySealsIntact}
            onChange={(e) =>
              handleInputChange("externalSecuritySealsIntact", e.target.checked)
            }
          />
          <label
            htmlFor="externalSecuritySeals"
            className="text-sm text-gray-700"
          >
            External Security Seals Intact
          </label>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="vehicleExteriorInspected"
            className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
            checked={formData.vehicleExteriorInspected}
            onChange={(e) =>
              handleInputChange("vehicleExteriorInspected", e.target.checked)
            }
          />
          <label
            htmlFor="vehicleExteriorInspected"
            className="text-sm text-gray-700"
          >
            Vehicle Exterior Inspected
          </label>
        </div>
      </div>

      {/* Vehicle Dimensions */}
      <div className="space-y-4">
        <div className="text-sm text-gray-700 font-medium">
          Vehicle Dimensions
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-xs text-gray-500 mb-2">
              Height of the vehicle in feet
            </div>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-sm"
              value={formData.heightOfVehicle}
              onChange={(e) =>
                handleInputChange("heightOfVehicle", e.target.value)
              }
              placeholder="Vehicle Height"
            />
          </div>

          <div>
            <div className="text-xs text-gray-500 mb-2">
              Width of the vehicle in feet
            </div>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-sm"
              value={formData.widthOfVehicle}
              onChange={(e) =>
                handleInputChange("widthOfVehicle", e.target.value)
              }
              placeholder="Vehicle Width"
            />
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-500 mb-2">
            Length of the vehicle in feet
          </div>
          <input
            type="text"
            className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-sm"
            value={formData.lengthOfVehicle || ""}
            onChange={(e) =>
              handleInputChange("lengthOfVehicle", e.target.value)
            }
            placeholder="Vehicle Length"
          />
        </div>
      </div>

      {/* License Plate */}
      <div className="space-y-2">
        <div className="text-sm text-gray-700 font-medium">
          License Plate Information
        </div>
        <div className="text-xs text-gray-500 mb-2">
          Enter vehicle license plate number
        </div>
        <input
          type="text"
          className="w-full max-w-md px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-sm"
          value={formData.licensePlate || ""}
          onChange={(e) => handleInputChange("licensePlate", e.target.value)}
          placeholder="License Plate Number"
        />
      </div>
    </div>
  );
};

export default VehicleInformation;
