import React, { useState } from "react";
import { useStudent } from "../../assets/store";
import { useNavigate } from "react-router-dom";

const StudentPanel = () => {
  const navigate = useNavigate();
  const { students } = useStudent(); // Fetch students from store
  const [aridNo, setAridNo] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const currentYear = new Date();
  const newCurrentYear = currentYear.getFullYear().toString().slice(-2); // Last two digits of current year

  // Define the handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Find if the input ARID number matches any student's ARID number
    const matchedStudent = students.find((student) => {
      const expectedAridNo = `${newCurrentYear}-ARID-${student.rollno}`; // Match the ARID pattern
      return expectedAridNo.toLowerCase() === aridNo.toLowerCase(); // Case-insensitive comparison
    });

    if (matchedStudent) {
      console.log("Yes, you are logged in"); // Success message
      localStorage.setItem("lastStudentRollNo", `${newCurrentYear}-ARID-${matchedStudent.rollno}`); // Save roll number in localStorage
      setErrorMessage(""); // Clear any previous error message
      navigate("/student/authorities"); // Redirect after successful login
    } else {
      console.log("ARID number does not match"); // Error message
      setErrorMessage("ARID number does not match."); // Set error message
    }
  };

  return (
    <div className="bg-cloudy-blue-gradient w-screen min-h-screen flex items-center justify-center relative">
      <div className="bg-gray-50 p-8 w-1/4 h-auto rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your ARID Number:</label>
            <input
              type="text"
              value={aridNo}
              onChange={(e) => setAridNo(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="YY-ARID-rollno"
            />
          </div>
          {errorMessage && (
            <p className="text-red-500 mb-4">{errorMessage}</p> // Display error message if it exists
          )}
          <button
            type="submit"
            className="bg-indigo-900 text-gray-50 py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentPanel;
