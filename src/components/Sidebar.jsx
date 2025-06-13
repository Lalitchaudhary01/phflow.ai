import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Card, CardBody, Button } from "@heroui/react";
import {
  Person as PersonIcon,
  Home as HomeIcon,
  LocalShipping as TruckIcon,
  People as UserIcon,
  Inventory2 as Package2Icon,
  Visibility as EyeIcon,
  CheckCircle as CheckCircle2Icon,
  Description as FileTextIcon,
  Settings as SettingsIcon,
  Archive as ArchiveIcon,
  AssignmentTurnedIn as FileCheckIcon,
  ExpandLess as ChevronUpIcon,
  ExpandMore as ChevronDownIcon,
} from "@mui/icons-material";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
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
    { icon: HomeIcon, label: "Home", active: false, path: "/" },
    {
      icon: TruckIcon,
      label: "Inbound Logistic",
      active: true,
      subItems: [
        {
          icon: PersonIcon,
          label: "Driver Check-In",
          active: location.pathname === "/driver-checkin",
          path: "/driver-checkin",
        },
        {
          icon: Package2Icon,
          label: "Material Offloading",
          active: location.pathname === "/material-offloading",
          path: "/material-offloading",
        },
        {
          icon: EyeIcon,
          label: "Visual Inspection",
          active: location.pathname === "/visual-inspection",
          path: "/visual-inspection",
        },
        {
          icon: CheckCircle2Icon,
          label: "Quantity Verification",
          active: location.pathname === "/quantity-verification",
          path: "/quantity-verification",
        },
        {
          icon: FileTextIcon,
          label: "Material Identification",
          active: location.pathname === "/material-identification",
          path: "/material-identification",
        },
        {
          icon: SettingsIcon,
          label: "Release to QC",
          active: location.pathname === "/release-to-qc",
          path: "/release-to-qc",
        },
        {
          icon: CheckCircle2Icon,
          label: "QC Approval",
          active: location.pathname === "/qc-approval",
          path: "/qc-approval",
        },
        {
          icon: ArchiveIcon,
          label: "Put Away",
          active: location.pathname === "/put-away",
          path: "/put-away",
        },
        {
          icon: FileCheckIcon,
          label: "Close the POP",
          active: location.pathname === "/close-pop",
          path: "/close-pop",
        },
      ],
    },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`w-64 bg-white shadow-sm h-screen border-r border-gray-200 fixed left-0 top-16 bottom-0 z-30 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
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
              {item.path ? (
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors duration-150 ${
                    location.pathname === item.path
                      ? "bg-gray-100 text-gray-800"
                      : "text-gray-600"
                  }`}
                  onClick={onClose}
                >
                  <item.icon className="w-4 h-4 mr-3 text-gray-500" />
                  <span className="flex-1">{item.label}</span>
                </Link>
              ) : (
                <Button
                  variant="light"
                  className={`w-full justify-start px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors duration-150 text-gray-600 h-auto min-h-0 rounded-none bg-transparent`}
                  onClick={() => item.subItems && toggleExpanded(item.label)}
                  startContent={
                    <item.icon className="w-4 h-4 mr-3 text-gray-500" />
                  }
                  endContent={
                    item.subItems &&
                    (expandedItems[item.label] ? (
                      <ChevronUpIcon className="w-3 h-3 text-gray-400 transition-transform duration-200" />
                    ) : (
                      <ChevronDownIcon className="w-3 h-3 text-gray-400 transition-transform duration-200" />
                    ))
                  }
                >
                  <span className="flex-1 text-left">{item.label}</span>
                </Button>
              )}

              {item.subItems && expandedItems[item.label] && (
                <div className="ml-4 transition-all duration-200 ease-in-out">
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className={`flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 transition-colors duration-150 ${
                        location.pathname === subItem.path
                          ? "text-gray-800 font-medium bg-gray-200"
                          : "text-gray-600"
                      }`}
                      onClick={onClose}
                    >
                      <subItem.icon className="w-4 h-4 mr-3 text-gray-500" />
                      <span>{subItem.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
