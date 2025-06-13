import React from "react";
import { Menu, X } from "lucide-react";
import { User } from "@heroui/react";
import { Bedtime, Notifications } from "@mui/icons-material";

const Nav = ({ onMenuToggle, isMobileMenuOpen }) => {
  return (
    <div className="bg-gradient-to-r from-teal-400 via-teal-500 to-teal-700 text-white px-4 sm:px-6 py-4 flex justify-between items-center w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <button
          onClick={onMenuToggle}
          className="lg:hidden mr-3 p-1 rounded hover:bg-teal-700 hover:bg-opacity-50"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
        <h1 className="text-sm sm:text-lg font-medium">
          Inventory Process Management
        </h1>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <Bedtime className="w-5 h-5 cursor-pointer hover:bg-teal-700 hover:bg-opacity-50 p-1 rounded" />
        <Notifications className="w-5 h-5 cursor-pointer hover:bg-teal-700 hover:bg-opacity-50 p-1 rounded" />
        <div className="cursor-pointer hover:bg-teal-700 hover:bg-opacity-50 p-1 rounded">
          <img
            src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            alt="Profile"
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
