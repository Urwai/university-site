import React from "react";
import { useStudent } from "../../assets/store";

const StudentAuthorities = () => {
  const { students } = useStudent();

  // Get the roll number from localStorage
  const rollNo = localStorage.getItem("lastStudentRollNo");
  console.log("Roll No from localStorage:", rollNo); // Debugging to ensure the correct roll number is fetched

  // Get the current year in 'YY' format
  const newCurrentYear = new Date().getFullYear().toString().slice(-2);

  const filteredStudents = students.filter((student) => {
    console.log(`Student Roll No: ${newCurrentYear}-ARID-${student.rollno}`); // Debugging to ensure we're checking the correct roll numbers
    return `${newCurrentYear}-ARID-${student.rollno}` === rollNo; // Matching the roll number directly
  });
  
  return (
    <div className="bg-cloudy-blue-gradient w-screen min-h-screen flex items-center justify-center relative">
      <div className="bg-gray-50 p-8 w-full max-w-4xl rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Authorities</h2>
        <div className="bg-white w-full rounded-lg shadow-lg overflow-hidden">
          <table className="w-full text-left table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border">Roll Number</th>
                <th className="px-4 py-2 border">Student Name</th>
                <th className="px-4 py-2 border">Student Age</th>
                <th className="px-4 py-2 border">Student Dept</th>
                <th className="px-4 py-2 border">Student Teacher</th>
                <th className="px-4 py-2 border">Student Course</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="px-4 py-2 border">{student.rollno}</td>
                    <td className="px-4 py-2 border">{student.studentName}</td>
                    <td className="px-4 py-2 border">{student.studentAge}</td>
                    <td className="px-4 py-2 border">{student.studentDept}</td>
                    <td className="px-4 py-2 border">{student.studentTeacher}</td>
                    <td className="px-4 py-2 border">{student.studentCourse}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-2 border" colSpan="6">
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentAuthorities;

