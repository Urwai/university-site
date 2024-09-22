import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { useTeacher } from "../../assets/store"; // Use the correct context hook

const EditTeacherTable = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateTeacher } = useTeacher();

  // Get teacher data and index from location state
  const { data: teacherToEdit, index } = location.state;

  // State to handle the edited teacher
  const [editedTeacher, setEditedTeacher] = useState(teacherToEdit);

  // Update the input fields as the user types
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedTeacher({
      ...editedTeacher,
      [name]: value,
    });
  };

  // Save the changes
  const handleSave = () => {
    updateTeacher(index, editedTeacher); // Update teacher in the store
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="bg-cloudy-blue-gradient w-screen min-h-screen flex items-center justify-center relative">
      <div className="bg-gray-50 p-8 w-1/4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Teacher</h2>
        <form>
          <div className="mb-6 w-full">
            <label className="block text-gray-700 mb-2">Name:</label>
            <input
              type="text"
              name="teacherName"
              value={editedTeacher.teacherName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter teacher's name"
            />

            <label className="block text-gray-700 mt-4 mb-2">Teacher Qualification:</label>
            <input
              type="text"
              name="teacherQualification"
              value={editedTeacher.teacherQualification}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter teacher's qualification"
            />

            <label className="block text-gray-700 mt-4 mb-2">Teacher ID:</label>
            <input
              type="text"
              name="teacherId"
              value={editedTeacher.teacherId}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter teacher's ID"
            />

            <label className="block text-gray-700 mt-4 mb-2">Teacher Department:</label>
            <input
              type="text"
              name="teacherDept"
              value={editedTeacher.teacherDept}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter teacher's department"
            />

            <button
              type="button"
              onClick={handleSave}
              className="bg-indigo-900 text-gray-50 px-6 py-3 rounded-2xl mt-4 ml-28"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTeacherTable;
