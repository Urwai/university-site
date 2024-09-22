import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { useCourse } from "../../assets/store"; // Use the correct context hook

const EditCourse = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { updateCourse } = useCourse();

  // Get course data and index from location state
  const { data: courseToEdit, index } = location.state;

  // State to handle the edited course
  const [editedCourse, setEditedCourse] = useState(courseToEdit);

  // Update the input fields as the user types
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedCourse({
      ...editedCourse,
      [name]: value,
    });
  };

  // Save the changes
  const handleSave = () => {
    updateCourse(index, editedCourse); // Update course in the store
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="bg-cloudy-blue-gradient w-screen min-h-screen flex items-center justify-center relative">
      <div className="bg-gray-50 p-8 w-1/4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Course</h2>
        <form>
          <div className="mb-6 w-full">
            <label className="block text-gray-700 mb-2">Course Name:</label>
            <input
              type="text"
              name="courseName"
              value={editedCourse.courseName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter Course Name"
            />

            <label className="block text-gray-700 mt-4 mb-2">Course Code:</label>
            <input
              type="text"
              name="courseCode"
              value={editedCourse.courseCode}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter Course Code"
            />

            <label className="block text-gray-700 mt-4 mb-2">Credit Hours:</label>
            <input
              type="text"
              name="creditHours"
              value={editedCourse.creditHours}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter Credit Hours"
            />

            <label className="block text-gray-700 mt-4 mb-2">Department Name:</label>
            <input
              type="text"
              name="deptName"
              value={editedCourse.deptName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter Department Name"
            />

            <label className="block text-gray-700 mt-4 mb-2">Teacher Name:</label>
            <input
              type="text"
              name="teacherName"
              value={editedCourse.teacherName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Enter Teacher Name"
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

export default EditCourse;
