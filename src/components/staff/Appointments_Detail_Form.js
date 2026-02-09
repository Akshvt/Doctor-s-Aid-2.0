
import React, { useState } from "react";
import "../../styles/staff/Appointments_Detail_Form.css";

const Appointments_Detail_Form = () => {
  const [formData, setFormData] = useState({
    docId: "",
    pId: "",
    date: "",
    bloodPressure: "",
    glucose: "",
    pulse: "",
    temperature: "",
    measurementTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Vitals Recorded Successfully!");
    // You can add API call here
  };

  return (
    <div className="appointment-container">
      <h2 className="form-title">Record Patient Vitals</h2>
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Doc_Id:</label>
          <input type="text" name="docId" value={formData.docId} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>P_Id:</label>
          <input type="text" name="pId" value={formData.pId} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Blood Pressure:</label>
            <input type="text" name="bloodPressure" value={formData.bloodPressure} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Glucose:</label>
            <input type="text" name="glucose" value={formData.glucose} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Pulse:</label>
            <input type="text" name="pulse" value={formData.pulse} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Temperature:</label>
            <input type="text" name="temperature" value={formData.temperature} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label>Measurement Time:</label>
          <input type="time" name="measurementTime" value={formData.measurementTime} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-btn">Submit Vitals</button>
      </form>
    </div>
  );
};

export default Appointments_Detail_Form;

