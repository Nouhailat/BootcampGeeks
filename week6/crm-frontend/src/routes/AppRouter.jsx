import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import EmployerDashboard from "../pages/EmployerDashboard";
import ManagerLeads from "../pages/ManagerLeads";
import EmployerManagers from '../pages/EmployerManagers';
import EmployerLeads from '../pages/EmployerLeads';
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/employer/dashboard" element={<EmployerDashboard />} />
        <Route path="/manager/leads" element={<ManagerLeads />} />
        <Route path="/employer/managers" element={<EmployerManagers />} />
        <Route path="/employer/leads"    element={<EmployerLeads />} />
      </Routes>
    </BrowserRouter>
  );
}
