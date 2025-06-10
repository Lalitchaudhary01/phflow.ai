import React, { useState } from "react";
import {
  Person,
  Home,
  LocalShipping,
  Inventory2,
  Visibility,
  CheckCircle,
  Description,
  Settings,
  Archive,
  Assignment,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";

const Sidebar = () => {
  const [expandedItems, setExpandedItems] = useState({
    "Inbound Logistic": true, // Initially expanded
  });

  const toggleExpanded = (itemLabel) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemLabel]: !prev[itemLabel],
    }));
  };

  const sidebarItems = [
    { icon: Home, label: "Home", active: false },
    {
      icon: LocalShipping,
      label: "Inbound Logistic",
      active: true,
      subItems: [
        { icon: Person, label: "Driver Check-In", active: true },
        { icon: Inventory2, label: "Material Offloading", active: false },
        { icon: Visibility, label: "Visual Inspection", active: false },
        { icon: CheckCircle, label: "Quantity Verification", active: false },
        { icon: Description, label: "Material Identification", active: false },
        { icon: Settings, label: "Release to QC", active: false },
        { icon: CheckCircle, label: "QC Approval", active: false },
        { icon: Archive, label: "Put Away", active: false },
        { icon: Assignment, label: "Close the POP", active: false },
      ],
    },
  ];

  return (
    <div className="w-64 bg-white shadow-sm h-screen border-r border-gray-200 fixed left-0 top-16 bottom-0">
      {/* phflow.ai logo section */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
          </div>
          <span className="font-medium text-gray-800 text-sm">phflow.ai</span>
        </div>
      </div>
      <nav className="py-2">
        {sidebarItems.map((item, index) => (
          <div key={index}>
            <div
              className={`flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors duration-150 ${
                item.active ? "bg-gray-100 text-gray-800" : "text-gray-600"
              }`}
              onClick={() => item.subItems && toggleExpanded(item.label)}
            >
              <item.icon
                className="w-4 h-4 mr-3 text-gray-500"
                style={{ fontSize: "16px" }}
              />
              <span className="flex-1">{item.label}</span>
              {item.subItems &&
                (expandedItems[item.label] ? (
                  <ExpandLess
                    className="w-3 h-3 text-gray-400 transition-transform duration-200"
                    style={{ fontSize: "12px" }}
                  />
                ) : (
                  <ExpandMore
                    className="w-3 h-3 text-gray-400 transition-transform duration-200"
                    style={{ fontSize: "12px" }}
                  />
                ))}
            </div>
            {item.subItems && expandedItems[item.label] && (
              <div className="ml-4 transition-all duration-200 ease-in-out">
                {item.subItems.map((subItem, subIndex) => (
                  <div
                    key={subIndex}
                    className={`flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors duration-150 ${
                      subItem.active
                        ? "text-gray-800 font-medium bg-gray-50"
                        : "text-gray-600"
                    }`}
                  >
                    <subItem.icon
                      className="w-4 h-4 mr-3 text-gray-500"
                      style={{ fontSize: "16px" }}
                    />
                    <span>{subItem.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
