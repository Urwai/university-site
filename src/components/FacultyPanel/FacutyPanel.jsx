import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTeacher } from "../../assets/store";

const FacultyPanel = () => {
  const navigate = useNavigate();
  const { teachers } = useTeacher();
  const [teacherId, setTeacherId] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    const teacher = teachers.find(
      (teacher) => teacher.teacherId.toString() === teacherId && teacher.teacherName === teacherName
    );
    
    if (!teacher) {
      errors.general = "Teacher ID or Name is incorrect.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("teacherId", teacherId);
      localStorage.setItem("teacherName", teacherName);
      navigate("/faculty/authorities");
    }
  };

  return (
    <div className="bg-cloudy-blue-gradient w-screen min-h-screen flex items-center justify-center relative">
      <div className="bg-gray-50 p-8 w-1/4 h-auto rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Teacher Name:</label>
            <input
              type="text"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Teacher ID:</label>
            <input
              type="text"
              value={teacherId}
              onChange={(e) => setTeacherId(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter your assigned id"
            />
          </div>
          {errors.general && <p className="text-red-500 text-xs mb-3">{errors.general}</p>}
          <button
            type="submit"
            className="bg-indigo-900 text-gray-50 py-3 px-4 rounded-2xl ml-32"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default FacultyPanel;
