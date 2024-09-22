import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { studentSchema } from "../../Validations/Validations"; // Import the validation schema
import { useCourse, useDepartment, useStudent, useTeacher } from "../../assets/store";
import  secureLocalStorage  from  "react-secure-storage";

const CreateStudent = () => {
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [studentDept, setStudentDept] = useState("");
  const [studentTeacher, setStudentTeacher] = useState("");
  const [studentCourse, setStudentCourse] = useState("");
  const [rollno, setRollno] = useState(""); // Initialize as empty string
  const [errors, setErrors] = useState({}); // State to store validation errors

  const { departments } = useDepartment();
  const { teachers } = useTeacher();
  const { courses } = useCourse();
  const { students, addStudent } = useStudent(); // Fetch students for roll number generation

  const [filteredTeachers, setFilteredTeachers] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  const navigate = useNavigate();

  // Set the roll number on component mount based on the latest student
  useEffect(() => {
    const lastRollNo = students.length > 0
      ? Math.max(...students.map(student => student.rollno)) // Get the highest roll number from students
      : 243; // Default starting roll number if no students exist
    setRollno(lastRollNo + 1); // Set the next roll number
  }, [students]);

  // Filter teachers based on selected department
  useEffect(() => {
    const newFilteredTeachers = studentDept
      ? teachers.filter((teacher) => teacher.teacherDept === studentDept)
      : [];
    setFilteredTeachers(newFilteredTeachers);
  }, [studentDept, teachers]);

  // Filter courses based on selected department and selected teacher
  useEffect(() => {
    const newFilteredCourses = studentDept && studentTeacher
      ? courses.filter((course) => 
          course.deptName === studentDept && course.teacherName === studentTeacher
        )
      : [];
    setFilteredCourses(newFilteredCourses);
  }, [studentDept, studentTeacher, courses]);

  // Validation function
  const validate = async () => {
    try {
      await studentSchema.validate(
        {
          student_name: studentName,
          student_age: studentAge,
          student_dept: studentDept,
          student_teacher: studentTeacher,
          student_course: studentCourse,
        },
        { abortEarly: false }
      );
      setErrors({});
      return true;
    } catch (validationErrors) {
      const newErrors = {};
      validationErrors.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validate();

    if (isValid) {
      addStudent({
        studentName,
        studentAge,
        studentDept,
        studentTeacher,
        studentCourse,
        rollno, // Use the assigned roll number directly
      });
      secureLocalStorage.setItem("lastStudentRollNo", rollno); // Update the roll number in local storage
      navigate(-1);
    }
  };

  return (
    <div className="bg-cloudy-blue-gradient w-screen min-h-screen flex items-center justify-center relative">
      <div className="bg-gray-50 p-8 w-1/4 h-auto rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Student Name:</label>
            <input
              type="text"
              placeholder="Student Name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.student_name && (
              <p className="text-red-500 text-xs">{errors.student_name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Student Age:</label>
            <input
              type="number"
              placeholder="Student Age"
              value={studentAge}
              onChange={(e) => setStudentAge(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.student_age && (
              <p className="text-red-500 text-xs">{errors.student_age}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Department:</label>
            <select
              value={studentDept}
              onChange={(e) => setStudentDept(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Department</option>
              {departments.map((dept) => (
                <option key={dept.deptCode} value={dept.deptName}>
                  {dept.deptName}
                </option>
              ))}
            </select>
            {errors.student_dept && (
              <p className="text-red-500 text-xs">{errors.student_dept}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Teacher:</label>
            <select
              value={studentTeacher}
              onChange={(e) => setStudentTeacher(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Teacher</option>
              {filteredTeachers.map((teacher) => (
                <option key={teacher.teacherName} value={teacher.teacherName}>
                  {teacher.teacherName}
                </option>
              ))}
            </select>
            {errors.student_teacher && (
              <p className="text-red-500 text-xs">{errors.student_teacher}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Course:</label>
            <select
              value={studentCourse}
              onChange={(e) => setStudentCourse(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select Course</option>
              {filteredCourses.map((course) => (
                <option key={course.courseName} value={course.courseName}>
                  {course.courseName}
                </option>
              ))}
            </select>
            {errors.student_course && (
              <p className="text-red-500 text-xs">{errors.student_course}</p>
            )}
          </div>

          <div className="flex flex-nowrap">
            <button
              type="submit"
              className="bg-indigo-900 text-gray-50 py-3 px-4 rounded-2xl mb-4 ml-8"
            >
              Add Student
            </button>
            <button
              type="button"
              className="bg-indigo-900 text-gray-50 py-3 px-6 rounded-2xl mb-4 ml-4"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;


