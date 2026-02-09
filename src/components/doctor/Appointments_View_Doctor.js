import React, { useState } from "react";
import "../../styles/staff/Appointments_View_Staff.css"; // Reuse same styling

const Appointments_View_Doctor = () => {
  const [appointments] = useState([
    {
      appId: "APP201",
      docId: "DOC101",
      pId: "P101",
      name: "Ravi Mehta",
      date: "2025-04-04",
      vitals: {
        bloodPressure: "122/80",
        glucose: "98",
        pulse: "74",
        temperature: "98.7°F",
        measurementTime: "09:30 AM"
      }
    },
    {
      appId: "APP202",
      docId: "DOC101",
      pId: "P102",
      name: "Sneha Kapoor",
      date: "2025-04-04",
      vitals: {
        bloodPressure: "128/86",
        glucose: "105",
        pulse: "78",
        temperature: "99.0°F",
        measurementTime: "11:15 AM"
      }
    },
    {
      appId: "APP203",
      docId: "DOC101",
      pId: "P103",
      name: "Vikram Singh",
      date: "2025-04-05",
      vitals: {
        bloodPressure: "115/75",
        glucose: "100",
        pulse: "69",
        temperature: "98.2°F",
        measurementTime: "01:00 PM"
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

      {/* Search and Date Filter */}
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

      {/* Appointment Table */}
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

export default Appointments_View_Doctor;
