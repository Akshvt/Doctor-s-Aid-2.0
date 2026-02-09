import React, { useState } from "react";
import "../../styles/staff/IPD_Records_Form.css";

const IPD_Records_Form = () => {
  const [formData, setFormData] = useState({
    recId: "",
    ipdId: "",
    staffId: "",
    dateTime: "",
    bloodPressure: "",
    glucose: "",
    pulse: "",
    temperature: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted IPD Record:", formData);
    // Submit logic goes here
  };

  return (
    <div className="ipd-records-wrapper">
      <div className="ipd-records-container">
        <h2>IPD Records Form</h2>
        <form className="ipd-form" onSubmit={handleSubmit}>
          <input type="text" name="recId" placeholder="Rec_Id" value={formData.recId} onChange={handleChange} required />
          <input type="text" name="ipdId" placeholder="IPD_Id" value={formData.ipdId} onChange={handleChange} required />
          <input type="text" name="staffId" placeholder="Staff_Id" value={formData.staffId} onChange={handleChange} required />
          <input type="datetime-local" name="dateTime" value={formData.dateTime} onChange={handleChange} required />
          <input type="text" name="bloodPressure" placeholder="Blood Pressure" value={formData.bloodPressure} onChange={handleChange} />
          <input type="text" name="glucose" placeholder="Glucose" value={formData.glucose} onChange={handleChange} />
          <input type="text" name="pulse" placeholder="Pulse" value={formData.pulse} onChange={handleChange} />
          <input type="text" name="temperature" placeholder="Temperature" value={formData.temperature} onChange={handleChange} />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default IPD_Records_Form;
