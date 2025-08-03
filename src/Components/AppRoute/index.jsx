import { Routes, Route } from "react-router-dom";

import Dashboard from "../Pages/DashBoard/Dashboard";
import Inventory from "../Pages/Inventory/Inventory";
import Customers from "../Pages/Customers/Customers";
const AppRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/Customers" element={<Customers />} />
      </Routes>
    </div>
  );
};

export default AppRoute;
