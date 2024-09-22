import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useStudent } from "../../assets/store";

const EditStudents = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateStudent } = useStudent();

  // Get student data from location state
  const { data: studentToEdit, index } = location.state;

  // State to handle the edited student
  const [editedStudent, setEditedStudent] = useState(studentToEdit);

  // Update the input fields as the user types
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedStudent({
      ...editedStudent,
      [name]: value,
    });
  };

  // Save the changes
  const handleSave = () => {
    updateStudent(index, editedStudent); // Update student in the store
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="bg-cloudy-blue-gradient w-screen min-h-screen flex items-center justify-center relative">
      <div className="bg-gray-50 p-8 w-1/4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Student</h2>
        <form>
          <div className="mb-6 w-full">
            <label className="block text-gray-700 mb-2">Student Name:</label>
            <input
              type="text"
              name="studentName"
              value={editedStudent.studentName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter Student name"
            />
            <label className="block text-gray-700 mt-4 mb-2">Student Age:</label>
            <input
              type="number"
              name="studentAge"
              value={editedStudent.studentAge}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter Student age"
            />
            <label className="block text-gray-700 mt-4 mb-2">Student Department:</label>
            <input
              type="text"
              name="studentDept"
              value={editedStudent.studentDept}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter Student department"
            />
            <label className="block text-gray-700 mt-4 mb-2">Student Teacher:</label>
            <input
              type="text"
              name="studentTeacher"
              value={editedStudent.studentTeacher}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter Student teacher"
            />
            <label className="block text-gray-700 mt-4 mb-2">Student Course:</label>
            <input
              type="text"
              name="studentCourse"
              value={editedStudent.studentCourse}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter Student course"
            />
            <button
              type="button"
              onClick={handleSave}
              className="bg-indigo-900 text-gray-50 px-5 py-3 rounded-2xl mt-4 ml-28"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudents;
