// PatientInfo.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import "../../styles/doctor/PatientInfo.css";

const PatientInfo = () => {
  const navigate = useNavigate();

  const [patients, setPatients] = useState([
    { id: 1, firstName: "Aman", lastName: "Kumar", dateRegistered: "2024-12-10" },
    { id: 2, firstName: "Neha", lastName: "Singh", dateRegistered: "2024-12-09" },
    { id: 3, firstName: "Rahul", lastName: "Sharma", dateRegistered: "2024-12-08" },
    { id: 4, firstName: "Priya", lastName: "Verma", dateRegistered: "2024-12-07" },
    { id: 5, firstName: "Karan", lastName: "Yadav", dateRegistered: "2024-12-06" },
    { id: 6, firstName: "Meena", lastName: "Patel", dateRegistered: "2024-12-05" },
    { id: 7, firstName: "Ravi", lastName: "Khan", dateRegistered: "2024-12-04" },
    { id: 8, firstName: "Anjali", lastName: "Mishra", dateRegistered: "2024-12-03" },
    { id: 9, firstName: "Suresh", lastName: "Reddy", dateRegistered: "2024-12-02" },
    { id: 10, firstName: "Divya", lastName: "Iyer", dateRegistered: "2024-12-01" },
  ]);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleViewDetails = (id) => {
    navigate(`/patient-details/${id}`);
  };

  return (
    <div className={`main-container ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
      <div className="content-container">
        <h1>Patient Info</h1>
        <ul>
          {patients.map((patient) => (
            <li key={patient.id}>
              {patient.firstName} {patient.lastName} (Registered: {patient.dateRegistered})
              <button onClick={() => handleViewDetails(patient.id)}>View Details</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientInfo;
