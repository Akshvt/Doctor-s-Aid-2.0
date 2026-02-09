
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

// Common Components
import HomePage from "./components/common/HomePage";
import Logout from "./components/common/Logout";
import ThemeToggle from "./components/common/ThemeToggle";

// Doctor Components
import Doctor_Login_Page from "./components/doctor/Doctor_Login_Page";
import Doctor_Main_Page from "./components/doctor/Doctor_Main_Page";
import Doctor_Profile from "./components/doctor/Doctor_Profile";
import Appointments_View_Doctor from "./components/doctor/Appointments_View_Doctor";
import PatientInfo from "./components/doctor/PatientInfo";

// Patient Components
import PatientPage from "./components/patient/PatientPage";
import PatientMainPage from "./components/patient/PatientMainPage";

// Staff Components
import Staff_Login_Page from "./components/staff/Staff_Login_Page";
import Staff_Main_Page from "./components/staff/Staff_Main_Page";
import Staff_Profile from "./components/staff/Staff_Profile";
import Appointments_View_Staff from "./components/staff/Appointments_View_Staff";
import Appointments_Detail_Form from "./components/staff/Appointments_Detail_Form";
import Patient_Detail_Form from "./components/staff/Patient_Detail_Form";
import Patient_Details_View from "./components/staff/Patient_Details_View";
import IPD_Records_Form from "./components/staff/IPD_Records_Form";
import OPDRecords from "./components/staff/OPDRecords";

// Prediction Components (Shared)
import Heart_Prediction from "./components/predictions/Heart_Prediction";
import Diabetic_Prediction from "./components/predictions/Diabetic_Prediction";


const App = () => {
  return (
    <ThemeProvider>
      <Router>
        {/* Global Theme Toggle */}
        <ThemeToggle />

        <Routes>
          {/* Home - Role Selection */}
          <Route path="/" element={<HomePage />} />

          {/* Doctor Routes */}
          <Route path="/doctor-login" element={<Doctor_Login_Page />} />
          <Route path="/doctor" element={<Doctor_Main_Page />} />
          <Route path="/appointments" element={<Appointments_View_Doctor />} />
          <Route path="/patients" element={<PatientInfo />} />
          <Route path="/profile" element={<Doctor_Profile />} />

          {/* Patient Routes */}
          <Route path="/patient" element={<PatientPage />} />
          <Route path="/patient-main" element={<PatientMainPage />} />

          {/* Staff Routes */}
          <Route path="/staff-login" element={<Staff_Login_Page />} />
          <Route path="/staff-home" element={<Staff_Main_Page />} />
          <Route path="/staff-profile" element={<Staff_Profile />} />
          <Route path="/staff-appointments" element={<Appointments_View_Staff />} />
          <Route path="/book-appointment" element={<Appointments_Detail_Form />} />
          <Route path="/staff-patient-info" element={<Patient_Detail_Form />} />
          <Route path="/saved-patient-info" element={<Patient_Details_View />} />
          <Route path="/ipd-records" element={<IPD_Records_Form />} />
          <Route path="/opd-records" element={<OPDRecords />} />

          {/* Prediction Routes (Shared) */}
          <Route path="/prediction/heart-diseases" element={<Heart_Prediction />} />
          <Route path="/prediction/diabetes" element={<Diabetic_Prediction />} />

          {/* Logout */}
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
