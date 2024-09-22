import React, { useState, useEffect } from "react";
import { useDepartment } from "../../assets/store";
import { useTeacher } from "../../assets/store";
import { useCourse } from "../../assets/store";
import { useNavigate } from "react-router-dom";
import { courseSchema } from "../../Validations/Validations"; // Adjust the path if necessary

const CreateCourse = () => {
  const navigate = useNavigate();
  const { departments } = useDepartment();
  const { teachers } = useTeacher();
  const { addCourse } = useCourse();

  const [courseName, setCourseName] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [creditHours, setCreditHours] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [deptName, setDeptName] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [errors, setErrors] = useState({}); // State to store validation errors

  useEffect(() => {
    const newFilteredTeachers = deptName
      ? teachers.filter((teacher) => teacher.teacherDept === deptName)
      : [];
    setFilteredTeachers(newFilteredTeachers);
  }, [deptName, teachers]);

  const validate = async () => {
    try {
      await courseSchema.validate(
        {
          courseName,
          courseCode,
          creditHours,
          teacherName,
          deptName,
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
      addCourse({ courseName, courseCode, creditHours, teacherName, deptName });
      navigate(-1);
    }
  };

  const handleCancel = () => {
    // navigate("/admin/authorities/course");
    navigate(-1);
  };

  return (
    <div className="bg-cloudy-blue-gradient w-screen min-h-screen flex items-center justify-center relative">
      <div className="bg-gray-50 p-8 w-1/4 h-auto rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Course Name:</label>
            <input
              type="text"
              placeholder="Course Name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.courseName && (
              <p className="text-red-500 text-xs">{errors.courseName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Course Code:</label>
            <input
              type="text"
              placeholder="Course Code"
              value={courseCode}
              onChange={(e) => setCourseCode(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.courseCode && (
              <p className="text-red-500 text-xs">{errors.courseCode}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Credit Hours:</label>
            <input
              type="text"
              placeholder="Credit Hours"
              value={creditHours}
              onChange={(e) => setCreditHours(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.creditHours && (
              <p className="text-red-500 text-xs">{errors.creditHours}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Department:</label>
            <select
              value={deptName}
              onChange={(e) => setDeptName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.deptCode} value={dept.deptName}>
                  {dept.deptName}
                </option>
              ))}
            </select>
            {errors.deptName && (
              <p className="text-red-500 text-xs">{errors.deptName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Teacher:</label>
            <select
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Teacher</option>
              {filteredTeachers.map((teacher) => (
                <option key={teacher.teacherName} value={teacher.teacherName}>
                  {teacher.teacherName}
                </option>
              ))}
            </select>
            {errors.teacherName && (
              <p className="text-red-500 text-xs">{errors.teacherName}</p>
            )}
          </div>
          <div className="flex flex-nowrap">
            <button
              type="submit"
              className="bg-indigo-900 text-gray-50 py-3 px-4 rounded-2xl mb-4 ml-8"
            >
              Add Course
            </button>
            <button
              type="button"
              className="bg-indigo-900 text-gray-50 py-3 px-6 rounded-2xl mb-4 ml-4"
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

export default CreateCourse;
