import React, { useState } from "react";
import "../../styles/staff/OPDRecords.css";

const OPDRecords = () => {
  const [formData, setFormData] = useState({
    appId: "",
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // TODO: API call or store data
  };

  return (
    <div className="opd-records-wrapper">
      <div className="opd-records-container">
        <h2>OPD Records - Form</h2>
        <form className="opd-form" onSubmit={handleSubmit}>
          <input type="text" name="appId" placeholder="App_Id" value={formData.appId} onChange={handleChange} required />
          <input type="text" name="docId" placeholder="Doc_Id" value={formData.docId} onChange={handleChange} required />
          <input type="text" name="pId" placeholder="P_Id" value={formData.pId} onChange={handleChange} required />
          <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange} required />
          <input type="text" name="bloodPressure" placeholder="Blood Pressure" value={formData.bloodPressure} onChange={handleChange} />
          <input type="text" name="glucose" placeholder="Glucose" value={formData.glucose} onChange={handleChange} />
          <input type="text" name="pulse" placeholder="Pulse" value={formData.pulse} onChange={handleChange} />
          <input type="text" name="temperature" placeholder="Temperature" value={formData.temperature} onChange={handleChange} />
          <input type="time" name="measurementTime" placeholder="Measurement Time" value={formData.measurementTime} onChange={handleChange} />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default OPDRecords;
