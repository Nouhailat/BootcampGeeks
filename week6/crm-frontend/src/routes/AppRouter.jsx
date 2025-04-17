import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import EmployerDashboard from "../pages/EmployerDashboard";
import ManagerLeads from "../pages/ManagerLeads";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employer/dashboard" element={<EmployerDashboard />} />
        <Route path="/manager/leads" element={<ManagerLeads />} />
      </Routes>
    </BrowserRouter>
  );
}
