import React from "react";
import { Input, Checkbox } from "@heroui/react";

const DriverInformationForm = (props) => {
  const { formData = {}, onChange, schema } = props;

  const handleChange = (field, value) => {
    const newFormData = { ...formData, [field]: value };
    onChange(newFormData);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex items-start space-x-3">
        <Checkbox
          isSelected={formData.deliveryAppointmentConfirmed || false}
          onValueChange={(checked) =>
            handleChange("deliveryAppointmentConfirmed", checked)
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
          Delivery Appointment Confirmed
        </span>
      </div>

      <div className="relative">
        <Input
          type="text"
          placeholder=" "
          value={formData.driverName || ""}
          onChange={(e) => handleChange("driverName", e.target.value)}
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
          Driver Name
        </label>
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox
          isSelected={formData.driverIdentificationVerified || false}
          onValueChange={(checked) =>
            handleChange("driverIdentificationVerified", checked)
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
          Driver Identification Verified
        </span>
      </div>

      <div className="relative">
        <Input
          type="text"
          placeholder=" "
          value={formData.transportCompany || ""}
          onChange={(e) => handleChange("transportCompany", e.target.value)}
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
          Transport Company
        </label>
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox
          isSelected={formData.transportCompanyVerified || false}
          onValueChange={(checked) =>
            handleChange("transportCompanyVerified", checked)
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
          Transport Company Identification Verified
        </span>
      </div>
    </div>
  );
};

export default DriverInformationForm;
