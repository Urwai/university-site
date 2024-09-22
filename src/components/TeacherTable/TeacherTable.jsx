import React from "react";
import { useTeacher } from "../../assets/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TeacherTable = () => {
  const navigate = useNavigate();
  const { teachers, deleteTeacher, updateTeacher } = useTeacher();
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = teachers.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(teachers.length / recordPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  const handleAddTeacher = () => {
    navigate("/admin/authorities/teacher/add");
  };

  const updateData = (index) => {
    const dataToEdit = teachers[index];
    navigate("/admin/authorities/teacher/edit", { state: { data: dataToEdit, index } }); // Correct route for editing teachers
  };

  const deleteData = (index) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) { // Updated confirmation message
      deleteTeacher(index);
    }
  };
  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-cloudy-blue-gradient w-screen min-h-screen flex items-center justify-center relative">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <div className="flex justify-between w-full mb-4">
          <button
            className="bg-indigo-900 text-gray-50 py-3 px-12 rounded-2xl"
            onClick={handleAddTeacher}
          >
            Add Teacher
          </button>
        </div>

        <table className="bg-gray-50 w-full max-w-4xl h-auto rounded-lg shadow-lg border-collapse">
          <thead>
            <tr className="bg-indigo-900 text-gray-50 text-left border-b-2 border-gray-200">
              <th className="p-4">Teacher Name</th>
              <th className="p-4">Teacher Qualification</th>
              <th className="p-4">Teacher ID</th>
              <th className="p-4">Teacher Department</th>
              <th className="p-4">Update</th>
              <th className="p-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {records.map((teacher, index) => ( // Added index here
              <tr
                key={teacher.teacherId}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="p-4">{teacher.teacherName}</td>
                <td className="p-4">{teacher.teacherQualification}</td>
                <td className="p-4">{teacher.teacherId}</td>
                <td className="p-4">{teacher.teacherDept}</td>
                <td>
                  <button
                    className="bg-indigo-900 text-gray-50 px-5 py-3 rounded-2xl ml-3"
                    onClick={() => updateData(index)} // Use index
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="bg-indigo-900 text-gray-50 p-3 rounded-2xl"
                    onClick={() => deleteData(index)} // Use index
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
          <ul className="flex justify-center mt-8 space-x-2">
            <li>
              <a
                href="#"
                onClick={prePage}
                className="px-3 py-1 border rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li key={i}>
                <a
                  href="#"
                  onClick={() => {
                    changeCPage(n);
                  }}
                  className={`px-3 py-1 border rounded-md ${
                    currentPage === n
                      ? "bg-indigo-900 text-white"
                      : "bg-gray-200 text-gray-700"
                  } hover:bg-gray-300`}
                >
                  {n}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                onClick={nextPage}
                className="px-3 py-1 border rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default TeacherTable;
