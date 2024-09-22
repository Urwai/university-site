import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { teacherSchema } from "../../Validations/Validations"; // Adjust the path if necessary
import { useDepartment, useTeacher } from "../../assets/store";
import  secureLocalStorage  from  "react-secure-storage";

const CreateTeacher = () => {
  const navigate = useNavigate();
  const { departments } = useDepartment();
  const { addTeacher } = useTeacher();

  const [teacherName, setTeacherName] = useState("");
  const [teacherDept, setTeacherDept] = useState("");
  const [teacherQualification, setTeacherQualification] = useState("");
  const [teacherId, setTeacherId] = useState(null);
  const [errors, setErrors] = useState({}); // State to store validation errors

  useEffect(() => {
    const lastTeacherId = parseInt(secureLocalStorage.getItem("lastTeacherId")) || 24978;
    setTeacherId(lastTeacherId + 1); 
  }, []);

  // Validation function
  const validate = async () => {
    try {
      await teacherSchema.validate(
        {
          teacherName,
          teacherDept,
          teacherQualification,
        },
        { abortEarly: false } // Collect all errors
      );
      setErrors({}); // Clear errors if validation passes
      return true; // Validation successful
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors); // Set validation errors if any
      return false; // Validation failed
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validate();

    if (isValid) {
      addTeacher({ teacherName, teacherDept, teacherQualification, teacherId });

      // Update last teacher ID in localStorage
      secureLocalStorage.setItem("lastTeacherId", teacherId);

      navigate(-1);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="bg-cloudy-blue-gradient w-screen min-h-screen flex items-center justify-center relative">
      <div className="bg-gray-50 p-8 w-1/4 h-auto rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Teacher Name:</label>
            <input
              type="text"
              placeholder="Teacher Name"
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.teacherName && (
              <p className="text-red-500 text-xs">{errors.teacherName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Teacher Qualification:</label>
            <input
              type="text"
              placeholder="Teacher Qualification"
              value={teacherQualification}
              onChange={(e) => setTeacherQualification(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.teacherQualification && (
              <p className="text-red-500 text-xs">{errors.teacherQualification}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Teacher Department:</label>
            <select
              value={teacherDept}
              onChange={(e) => setTeacherDept(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.deptCode} value={dept.deptName}>
                  {dept.deptName}
                </option>
              ))}
            </select>
            {errors.teacherDept && (
              <p className="text-red-500 text-xs">{errors.teacherDept}</p>
            )}
          </div>
          <div className="flex flex-nowrap">
            <button
              type="submit"
              className="bg-indigo-900 text-gray-50 p-3 rounded-2xl mb-4 ml-2"
            >
              Add Teacher
            </button>
            <button
              type="button"
              className="bg-indigo-900 text-gray-50 py-3 px-6 rounded-2xl mb-4 ml-8"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTeacher;
