// import React, { useEffect, useState } from "react";
// import "../styles/StaffProfile.css"; // Create this CSS file for styling

// const StaffProfile = () => {
//   const [staff, setStaff] = useState(null);

//   // Dummy data (replace with API call or context later)
//   const staffData = {
//     "staff123": {
//       S_Id: "S001",
//       First_Name: "Ravi",
//       Last_Name: "Sharma",
//       Email: "ravi.sharma@hospital.com",
//       Specialty: "Cardiology",
//       Phone: "9876543210",
//     },
//     // Add more dummy records if needed
//   };

//   useEffect(() => {
//     const username = localStorage.getItem("staffUsername"); // 🔐 Retrieve username from localStorage
//     if (username && staffData[username]) {
//       setStaff(staffData[username]);
//     }
//   }, []);

//   if (!staff) {
//     return <div className="staff-profile"><h2>Loading profile...</h2></div>;
//   }

//   return (
//     <div className="staff-profile">
//       <h1>Staff Profile</h1>
//       <div className="profile-card">
//         <p><strong>Staff ID:</strong> {staff.S_Id}</p>
//         <p><strong>First Name:</strong> {staff.First_Name}</p>
//         <p><strong>Last Name:</strong> {staff.Last_Name}</p>
//         <p><strong>Email:</strong> {staff.Email}</p>
//         <p><strong>Specialty:</strong> {staff.Specialty}</p>
//         <p><strong>Phone:</strong> {staff.Phone}</p>
//       </div>
//     </div>
//   );
// };

// export default StaffProfile;



import React from "react";
import "../../styles/staff/Staff_Profile.css"; // Make sure this CSS file exists

const StaffProfile = () => {
  // Hardcoded staff data (no user checks)
  const staff = {
    S_Id: "S001",
    First_Name: "Ravi",
    Last_Name: "Sharma",
    Email: "ravi.sharma@hospital.com",
    Specialty: "Cardiology",
    Phone: "9876543210",
  };

  return (
    <div className="staff-profile">
      <h1>Staff Profile</h1>
      <div className="profile-card">
        <p><strong>Staff ID:</strong> {staff.S_Id}</p>
        <p><strong>First Name:</strong> {staff.First_Name}</p>
        <p><strong>Last Name:</strong> {staff.Last_Name}</p>
        <p><strong>Email:</strong> {staff.Email}</p>
        <p><strong>Specialty:</strong> {staff.Specialty}</p>
        <p><strong>Phone:</strong> {staff.Phone}</p>
      </div>
    </div>
  );
};

export default StaffProfile;
