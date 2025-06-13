import React from "react";
import { Input, Checkbox } from "@heroui/react";

const VehicleInformationForm = (props) => {
  const { formData = {}, onChange, schema = {} } = props;

  const handleChange = (field, value) => {
    const newFormData = { ...formData, [field]: value };
    onChange(newFormData);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-start space-x-3">
        <Checkbox
          isSelected={formData.vehicleSecurity || false}
          onValueChange={(checked) => handleChange("vehicleSecurity", checked)}
          size="sm"
          radius="sm"
          color="primary"
          classNames={{
            wrapper:
              "w-4 h-4 border-gray-400 data-[selected=true]:border-blue-600 data-[selected=true]:bg-blue-600 mt-1",
            icon: "w-3 h-3 text-white",
          }}
        />
        <span className="text-sm font-medium text-gray-700 leading-5 select-none">
          Vehicle Security: No extra members in vehicle
        </span>
      </div>

      <div className="relative">
        <select
          value={formData.vehicleType || ""}
          onChange={(e) => handleChange("vehicleType", e.target.value)}
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base peer hover:border-gray-400"
          id="vehicleType"
        >
          {schema.properties?.vehicleType?.enum?.map((value, index) => (
            <option key={value} value={value}>
              {schema.properties?.vehicleType?.enumNames?.[index] || value}
            </option>
          ))}
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
        <Input
          type="text"
          placeholder=" "
          value={formData.licensePlate || ""}
          onChange={(e) => handleChange("licensePlate", e.target.value)}
          className="max-w-full"
          variant="bordered"
          size="md"
          classNames={{
            inputWrapper:
              "border-gray-300 hover:border-gray-400 focus-within:!border-blue-500 focus-within:ring-2 focus-within:ring-blue-200/50 group-data-[focus=true]:border-blue-500",
            input: "text-sm sm:text-base pt-6 pb-2",
          }}
        />
        <label className="absolute left-3 top-2 text-xs text-gray-500 bg-white px-1 transition-all duration-200 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-600 peer-focus:translate-y-0 data-[filled=true]:top-2 data-[filled=true]:text-xs data-[filled=true]:text-gray-500">
          License Plate
        </label>
      </div>

      <div className="text-xs text-gray-500 mb-4 leading-relaxed">
        Accessing personnel must check the license plate information following
        established written procedures per 21 CFR 111.103(a) and verify it
        matches any pre-notification documentation provided by the
        transportation supplier.
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox
          isSelected={formData.exteriorSecuritySeals || false}
          onValueChange={(checked) =>
            handleChange("exteriorSecuritySeals", checked)
          }
          size="sm"
          radius="sm"
          color="primary"
          classNames={{
            wrapper:
              "w-4 h-4 border-gray-400 data-[selected=true]:border-blue-600 data-[selected=true]:bg-blue-600 mt-1",
            icon: "w-3 h-3 text-white",
          }}
        />
        <span className="text-sm font-medium text-gray-700 leading-5 select-none">
          Exterior Security Seals Intact
        </span>
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox
          isSelected={formData.vehicleExteriorInspected || false}
          onValueChange={(checked) =>
            handleChange("vehicleExteriorInspected", checked)
          }
          size="sm"
          radius="sm"
          color="primary"
          classNames={{
            wrapper:
              "w-4 h-4 border-gray-400 data-[selected=true]:border-blue-600 data-[selected=true]:bg-blue-600 mt-1",
            icon: "w-3 h-3 text-white",
          }}
        />
        <span className="text-sm font-medium text-gray-700 leading-5 select-none">
          Vehicle Exterior Inspected
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative">
          <select
            value={formData.vehicleHeight || ""}
            onChange={(e) => handleChange("vehicleHeight", e.target.value)}
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base peer hover:border-gray-400"
            id="vehicleHeight"
          >
            {schema.properties?.vehicleHeight?.enum?.map((value, index) => (
              <option key={value} value={value}>
                {schema.properties?.vehicleHeight?.enumNames?.[index] || value}
              </option>
            ))}
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
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base peer hover:border-gray-400"
            id="vehicleWidth"
          >
            {schema.properties?.vehicleWidth?.enum?.map((value, index) => (
              <option key={value} value={value}>
                {schema.properties?.vehicleWidth?.enumNames?.[index] || value}
              </option>
            ))}
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
