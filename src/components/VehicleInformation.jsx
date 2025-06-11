import React from "react";

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

      <div>
        <label className="block text-sm text-gray-600 mb-2">
          License Plate
        </label>
        <input
          type="text"
          value={formData.licensePlate || ""}
          onChange={(e) =>
            setFormData({ ...formData, licensePlate: e.target.value })
          }
          placeholder="Enter license plate number"
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
        />
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

export default VehicleInformation;
