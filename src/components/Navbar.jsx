import React from "react";
import { Bell, User } from "lucide-react";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  return (
    <div className="bg-teal-500 text-white px-6 py-4 flex justify-between items-center w-full fixed top-0 left-0 right-0 z-50">
      <h1 className="text-lg font-medium">Inventory Process Management</h1>
      <div className="flex items-center space-x-4">
        <BedtimeIcon className="w-5 h-5 cursor-pointer hover:bg-teal-600 hover:bg-opacity-50 p-1 rounded" />
        <NotificationsIcon className="w-5 h-5 cursor-pointer hover:bg-teal-600 hover:bg-opacity-50 p-1 rounded" />
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer">
          <User className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
