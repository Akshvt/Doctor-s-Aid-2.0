// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/SavedPatientInfo.css"; // Import CSS

// const SavedPatientInfo = () => {
//   const navigate = useNavigate();

//   const [patients, setPatients] = useState([
//     { id: 1, firstName: "Aman", lastName: "Kumar", dob: "1995-10-12", phone: "9876543210", email: "aman@example.com" },
//     { id: 2, firstName: "Neha", lastName: "Singh", dob: "1998-06-25", phone: "8765432109", email: "neha@example.com" },
//     { id: 3, firstName: "Rahul", lastName: "Sharma", dob: "2000-03-14", phone: "7654321098", email: "rahul@example.com" },
//   ]);

//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredPatients = patients.filter((patient) =>
//     `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="saved-patient-info">
//       <h1>Saved Patient Information</h1>

//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search by name..."
//         className="search-bar"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       {/* Patient Table */}
//       <table className="patient-table">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>DOB</th>
//             <th>Phone</th>
//             <th>Email</th>
//             <th>Action</th> {/* View Details Button */}
//           </tr>
//         </thead>
//         <tbody>
//           {filteredPatients.length > 0 ? (
//             filteredPatients.map((patient) => (
//               <tr key={patient.id}>
//                 <td>{patient.id}</td>
//                 <td>{patient.firstName} {patient.lastName}</td>
//                 <td>{patient.dob}</td>
//                 <td>{patient.phone}</td>
//                 <td>{patient.email}</td>
//                 <td>
//                   <button
//                     className="view-details-btn"
//                     onClick={() => navigate(`/patient-details/${patient.id}`)}
//                   >
//                     View Details
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" className="no-data">No records found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SavedPatientInfo;

import React, { useState } from "react";
import "../../styles/staff/Patient_Details_View.css"; // Your CSS

const Patient_Details_View = () => {
  const [patients] = useState([
    {
      P_Id: 1,
      First_Name: "Aman",
      Last_Name: "Kumar",
      DOB: "1995-10-12",
      Phone: "9876543210",
      Gender: "Male",
      Email: "aman@example.com",
      Allergies: "None",
      Medical_history: "Asthma",
      Address: "New Delhi, India",
      Aadhar: "123456789012",
      Emergency_Name: "Ravi Kumar",
      Emergency_Number: "9876543210",
      Emergency_Relation: "Father",
    },
    {
      P_Id: 2,
      First_Name: "Neha",
      Last_Name: "Singh",
      DOB: "1998-06-25",
      Phone: "8765432109",
      Gender: "Female",
      Email: "neha@example.com",
      Allergies: "Peanuts",
      Medical_history: "None",
      Address: "Mumbai, India",
      Aadhar: "123456789013",
      Emergency_Name: "Rita Singh",
      Emergency_Number: "9876543212",
      Emergency_Relation: "Mother",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const filteredPatients = patients.filter((patient) =>
    `${patient.First_Name} ${patient.Last_Name}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="saved-patient-info">
      <h1>Saved Patient Information</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Patient Table */}
      <table className="patient-table">
        <thead>
          <tr>
            <th>P_Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>DOB</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient) => (
              <tr key={patient.P_Id}>
                <td>{patient.P_Id}</td>
                <td>{patient.First_Name}</td>
                <td>{patient.Last_Name}</td>
                <td>{patient.DOB}</td>
                <td>{patient.Phone}</td>
                <td>
                  <button
                    className="view-details-btn"
                    onClick={() => setSelectedPatient(patient)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-data">No records found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal for View Details */}
      {selectedPatient && (
        <div className="modal-overlay" onClick={() => setSelectedPatient(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Patient Details</h2>
            <p><strong>Gender:</strong> {selectedPatient.Gender}</p>
            <p><strong>Email:</strong> {selectedPatient.Email}</p>
            <p><strong>Allergies:</strong> {selectedPatient.Allergies}</p>
            <p><strong>Medical History:</strong> {selectedPatient.Medical_history}</p>
            <p><strong>Address:</strong> {selectedPatient.Address}</p>
            <p><strong>Aadhar:</strong> {selectedPatient.Aadhar}</p>
            <p><strong>Emergency Contact Name:</strong> {selectedPatient.Emergency_Name}</p>
            <p><strong>Emergency Number:</strong> {selectedPatient.Emergency_Number}</p>
            <p><strong>Emergency Relation:</strong> {selectedPatient.Emergency_Relation}</p>
            <button onClick={() => setSelectedPatient(null)} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Patient_Details_View;

