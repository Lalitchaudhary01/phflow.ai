import React from "react";

const DocsCheckForm = (props) => {
  const { formData = {}, onChange, schema = {} } = props;

  const handleChange = (field, value) => {
    const newFormData = { ...formData, [field]: value };
    onChange(newFormData);
  };

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
          checked={formData.supplierInfoVerified || false}
          onChange={(e) =>
            handleChange("supplierInfoVerified", e.target.checked)
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

      <div className="relative">
        <input
          type="text"
          placeholder={
            schema.properties?.packingList?.placeholder || "Sub-Packing List"
          }
          value={formData.packingList || ""}
          onChange={(e) => handleChange("packingList", e.target.value)}
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base peer"
          id="packingList"
        />
        <label
          htmlFor="packingList"
          className="absolute left-3 -top-2.5 text-xs text-gray-600 bg-white px-2 peer-focus:text-blue-600 transition-all duration-200"
        >
          Packing List
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="po-packing"
          checked={formData.poInPackingList || false}
          onChange={(e) => handleChange("poInPackingList", e.target.checked)}
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
          checked={formData.poMaterialsVerified || false}
          onChange={(e) =>
            handleChange("poMaterialsVerified", e.target.checked)
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

      <div className="relative">
        <select
          value={formData.documentsReceived || ""}
          onChange={(e) => handleChange("documentsReceived", e.target.value)}
          className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base peer"
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
