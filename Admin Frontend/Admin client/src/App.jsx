import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MedicineTable from "./components/medicineTable";
import MedicineDetails from "./components/MedicineDetails";
import PharmacyTable from "./components/PharmacyTable"; // Import PharmacyTable
import PharmacyDetails from "./components/PharmacyDetails"; // Import PharmacyDetails
import AddPharmacy from "./components/AddPharmacy";
import UpdatePharmacy from "./components/UpdatePharmacy";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => <div></div>;
const Manufacturers = () => <div></div>;
const LocalDistributors = () => <div></div>;
const Settings = () => <div></div>;

function Layout() {
  const location = useLocation();
  const hideSidebarRoutes = ["/login", "/signup"];

  return (
    <div className="d-flex">
      {!hideSidebarRoutes.includes(location.pathname) && <Sidebar />}
      <div className="flex-grow-1">
        {!hideSidebarRoutes.includes(location.pathname) && <Header />}
        <div className="container mt-5">
          {/* Added Bootstrap margin to prevent overlap */}
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/medicines" element={<MedicineTable />} />
            <Route
              path="/medicine/medicinedetails/:id"
              element={<MedicineDetails />}
            />
            <Route path="/pharmacies" element={<PharmacyTable />} />{" "}
            {/* Updated */}
            <Route
              path="/pharmacy/pharmacydetails/:id"
              element={<PharmacyDetails />}
            />
            <Route path="/pharmacy/add" element={<AddPharmacy />} />
            <Route
              path="/pharmacy/update/:id"
              element={<UpdatePharmacy />} // Added route for update page
            />
            <Route path="/manufacturers" element={<Manufacturers />} />
            <Route path="/local-distributors" element={<LocalDistributors />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        {!hideSidebarRoutes.includes(location.pathname) && <Footer />}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
