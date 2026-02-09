import React, { useState } from "react";
import "../../styles/staff/Patient_Detail_Form.css";

const Patient_Detail_Form = () => {
  const [formData, setFormData] = useState({
    pId: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    allergies: "",
    medicalHistory: "",
    address: "",
    aadhar: "",
    emergencyName: "",
    emergencyNumber: "",
    emergencyRelation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted patient data:", formData);
    alert("Patient information submitted successfully!");
  };

  return (
    <div className="staff-patient-info-container">
      <h1 className="form-title">Staff - Patient Information Form</h1>
      <form onSubmit={handleSubmit} className="patient-form">
        {/* Patient ID */}
        <div className="form-group">
          <input
            type="text"
            name="pId"
            placeholder="Patient ID"
            value={formData.pId}
            onChange={handleChange}
            required
          />
        </div>

        {/* Personal Details */}
        <h2 className="section-title">Personal Details</h2>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="allergies"
            placeholder="Allergies"
            value={formData.allergies}
            onChange={handleChange}
          />
          <textarea
            name="medicalHistory"
            placeholder="Medical History"
            value={formData.medicalHistory}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="aadhar"
            placeholder="Aadhar Number"
            value={formData.aadhar}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        {/* Emergency Contact Details */}
        <h2 className="section-title">Emergency Contact</h2>
        <div className="form-group">
          <input
            type="text"
            name="emergencyName"
            placeholder="Emergency Contact Name"
            value={formData.emergencyName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="emergencyRelation"
            placeholder="Emergency Relation"
            value={formData.emergencyRelation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="emergencyNumber"
            placeholder="Emergency Phone Number"
            value={formData.emergencyNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit */}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default Patient_Detail_Form;

