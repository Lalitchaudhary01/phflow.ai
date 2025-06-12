import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Nav";
import Sidebar from "./components/Sidebar";
import DriverCheckInSystem from "./DriverCheckInSystem";
import HomePage from "./components/HomePage";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSidebarClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar
          onMenuToggle={handleMenuToggle}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <Sidebar isOpen={isMobileMenuOpen} onClose={handleSidebarClose} />

        <div className="lg:ml-64 pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/driver-checkin" element={<DriverCheckInSystem />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
