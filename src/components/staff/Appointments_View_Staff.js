import React, { useState, useEffect } from "react";
import "../../styles/staff/Appointments_View_Staff.css"; // Keep your styling here

const Appointments_View_Staff = () => {
  const [appointments] = useState([
    {
      appId: "APP101",
      docId: "DOC201",
      pId: "P001",
      name: "Amit Kumar",
      date: "2025-04-04",
      vitals: {
        bloodPressure: "120/80",
        glucose: "95",
        pulse: "72",
        temperature: "98.6°F",
        measurementTime: "10:00 AM"
      }
    },
    {
      appId: "APP102",
      docId: "DOC202",
      pId: "P002",
      name: "Neha Sharma",
      date: "2025-04-04",
      vitals: {
        bloodPressure: "130/85",
        glucose: "110",
        pulse: "76",
        temperature: "99.1°F",
        measurementTime: "12:30 PM"
      }
    },
    {
      appId: "APP103",
      docId: "DOC201",
      pId: "P003",
      name: "Rahul Verma",
      date: "2025-04-05",
      vitals: {
        bloodPressure: "118/79",
        glucose: "102",
        pulse: "70",
        temperature: "98.4°F",
        measurementTime: "09:00 AM"
      }
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedVitals, setSelectedVitals] = useState(null);

  const filteredAppointments = appointments
    .filter((appointment) =>
      appointment.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((appointment) =>
      selectedDate ? appointment.date === selectedDate : true
    );

  return (
    <div className="staff-appointments">
      <h1>Booked Appointments</h1>

      {/* Search + Date Filter */}
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by Patient Name..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="date"
          className="date-filter"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* Appointments Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>App_Id</th>
              <th>Doc_Id</th>
              <th>P_Id</th>
              <th>P_Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.appId}</td>
                <td>{appointment.docId}</td>
                <td>{appointment.pId}</td>
                <td>{appointment.name}</td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => setSelectedVitals(appointment.vitals)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
            {filteredAppointments.length === 0 && (
              <tr>
                <td colSpan="5">No appointments found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Vitals Popup */}
      {selectedVitals && (
        <div className="vitals-popup">
          <h2>Patient Vitals</h2>
          <p><strong>Blood Pressure:</strong> {selectedVitals.bloodPressure}</p>
          <p><strong>Glucose:</strong> {selectedVitals.glucose}</p>
          <p><strong>Pulse:</strong> {selectedVitals.pulse}</p>
          <p><strong>Temperature:</strong> {selectedVitals.temperature}</p>
          <p><strong>Measurement Time:</strong> {selectedVitals.measurementTime}</p>
          <button onClick={() => setSelectedVitals(null)} className="close-btn">Close</button>
        </div>
      )}
    </div>
  );
};

export default Appointments_View_Staff;


