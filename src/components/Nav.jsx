import React from "react";
import { Menu, User, X } from "lucide-react";
import { Bedtime, Notifications } from "@mui/icons-material";

const Nav = ({ onMenuToggle, isMobileMenuOpen }) => {
  return (
    <div className="bg-teal-500 text-white px-4 sm:px-6 py-4 flex justify-between items-center w-full fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center">
        <button
          onClick={onMenuToggle}
          className="lg:hidden mr-3 p-1 rounded hover:bg-teal-600"
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
        <Bedtime className="w-5 h-5 cursor-pointer hover:bg-teal-600 hover:bg-opacity-50 p-1 rounded" />
        <Notifications className="w-5 h-5 cursor-pointer hover:bg-teal-600 hover:bg-opacity-50 p-1 rounded" />
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer">
          <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
