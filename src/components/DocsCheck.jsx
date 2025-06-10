import React from "react";
import { X } from "lucide-react";

const DocsCheck = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-6">
      {/* All Lot Listing Number */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="text-gray-500">All Lot Listing Number</span>
      </div>

      {/* Information Box */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md">
        <p className="text-xs text-blue-800 leading-relaxed">
          In accordance with G16 STB 17 1AA and G17 STB 17 1, the complete and
          exact list of testing number must be documented and verified for all
          Renault Material Reference.
        </p>
      </div>

      {/* Document Information Verified */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="docInformationVerified"
              className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
              checked={formData.docInformationVerified}
              onChange={(e) =>
                handleInputChange("docInformationVerified", e.target.checked)
              }
            />
            <label
              htmlFor="docInformationVerified"
              className="text-sm text-gray-700 font-medium"
            >
              Document Information Verified
            </label>
          </div>
          <X className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
        </div>

        {/* Packing List */}
        <div className="ml-7">
          <div className="text-xs text-gray-500 mb-2">Packing List</div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700"></span>
            <X className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>
        </div>
      </div>

      {/* Checkboxes for PO */}
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="poInPackingList"
            className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
            checked={formData.poInPackingList}
            onChange={(e) =>
              handleInputChange("poInPackingList", e.target.checked)
            }
          />
          <label htmlFor="poInPackingList" className="text-sm text-gray-700">
            PO in Packing List
          </label>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="poMaterialsVerified"
            className="h-4 w-4 text-teal-500 focus:ring-teal-500 border-gray-300 rounded"
            checked={formData.poMaterialsVerified}
            onChange={(e) =>
              handleInputChange("poMaterialsVerified", e.target.checked)
            }
          />
          <label
            htmlFor="poMaterialsVerified"
            className="text-sm text-gray-700"
          >
            PO Materials Verified
          </label>
        </div>
      </div>

      {/* Information provided by Driver */}
      <div className="space-y-2">
        <div className="text-sm text-gray-700 font-medium">
          Information provided by Driver
        </div>
        <div className="text-xs text-gray-500 mb-2">
          Packing List, Delivery Chalan
        </div>
        <textarea
          className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 text-xs"
          rows="4"
          value={formData.packingListDeliveryChalan}
          onChange={(e) =>
            handleInputChange("packingListDeliveryChalan", e.target.value)
          }
          placeholder="Each transporter identified, quarantine areas must be properly qualified, maintained and planned as required by TUMS G17 with a present temperature assessment like casual hazard based control."
        />
      </div>
    </div>
  );
};

export default DocsCheck;
