import React from "react";
import { Input, Checkbox } from "@heroui/react";

const DocsCheckForm = (props) => {
  const { formData = {}, onChange, schema = {} } = props;

  const handleChange = (field, value) => {
    const newFormData = { ...formData, [field]: value };
    onChange(newFormData);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        {/* Bill of Lading Number Input */}
        <div className="relative">
          <Input
            type="text"
            placeholder=" "
            value={formData.billOfLadingNumber || ""}
            onChange={(e) => handleChange("billOfLadingNumber", e.target.value)}
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
            Bill of Lading Number
          </label>
        </div>

        <div className="text-xs text-gray-500 mt-2 leading-relaxed">
          In accordance with 21 CFR 111.108 and 21 CFR 111.130, the complete
          audit trail of testing number must be documented and verified for all
          finished materials delivery.
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox
          isSelected={formData.supplierInfoVerified || false}
          onValueChange={(checked) =>
            handleChange("supplierInfoVerified", checked)
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
          Supplier Information Verified
        </span>
      </div>

      <div className="relative">
        <Input
          type="text"
          placeholder=" "
          value={formData.packingList || ""}
          onChange={(e) => handleChange("packingList", e.target.value)}
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
          Packing List
        </label>
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox
          isSelected={formData.poInPackingList || false}
          onValueChange={(checked) => handleChange("poInPackingList", checked)}
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
          PO in Packing List
        </span>
      </div>

      <div className="flex items-start space-x-3">
        <Checkbox
          isSelected={formData.poMaterialsVerified || false}
          onValueChange={(checked) =>
            handleChange("poMaterialsVerified", checked)
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
          PO Materials Verified
        </span>
      </div>

      <div className="relative">
        <select
          value={formData.documentsReceived || ""}
          onChange={(e) => handleChange("documentsReceived", e.target.value)}
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base peer hover:border-gray-400"
          id="documentsReceived"
        >
          {schema.properties?.documentsReceived?.enum?.map((value, index) => (
            <option key={value} value={value}>
              {schema.properties?.documentsReceived?.enumNames?.[index] ||
                value}
            </option>
          ))}
        </select>
        <label
          htmlFor="documentsReceived"
          className="absolute left-3 -top-2.5 text-xs text-gray-600 bg-white px-2 peer-focus:text-blue-600 transition-all duration-200"
        >
          Documents received by Admin
        </label>
      </div>

      <div className="text-xs text-gray-500 leading-relaxed">
        Each temperature controlled quarantine area must be properly qualified,
        monitored, and cleaned as required by 21 CFR 111.15 (b) in current
        temperature documents that could impact material stability.
      </div>
    </div>
  );
};

export default DocsCheckForm;
