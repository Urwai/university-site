import React from "react";
import { useCourse } from "../../assets/store";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CourseTable = () => {
  const navigate = useNavigate();
  const { courses ,deleteCourse , updateCourse } = useCourse(); // Get course data from CourseProvider

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = courses.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(courses.length / recordPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  const handleAddCourse = ()=>{
    navigate("/admin/authorities/course/add");
  }

  const updateData = (index) => {
    const dataToEdit = courses[index];
    navigate("/admin/authorities/course/edit", { state: { data: dataToEdit, index } });
  };

  const deleteData = (index) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      deleteCourse(index);
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
        <button
          className="bg-indigo-900 text-gray-50 py-3 px-5 rounded-2xl mb-4 mr-96 -ml-96"
          onClick={handleAddCourse}
        >
          Add Course
        </button>
      <table className="bg-gray-50 w-full max-w-4xl h-auto rounded-lg shadow-lg border-collapse">
        <thead>
          <tr className="bg-indigo-900 text-gray-50 text-left border-b-2 border-gray-200">
            <th className="p-4">Course Name</th>
            <th className="p-4">Course Code</th>
            <th className="p-4">Credit Hours</th>
            <th className="p-4">Department</th>
            <th className="p-4">Teacher</th>
            <th className="p-4">Update</th>
              <th className="p-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((course, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="p-4">{course.courseName}</td>
              <td className="p-4">{course.courseCode}</td>
              <td className="p-4">{course.creditHours}</td>
              <td className="p-4">{course.deptName}</td>
              <td className="p-4">{course.teacherName}</td>
              <td>
                  <button
                    className="bg-indigo-900 text-gray-50 px-5 py-3 rounded-2xl ml-3"
                    onClick={() => updateData(index)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="bg-indigo-900 text-gray-50 p-3 rounded-2xl"
                    onClick={() => deleteData(index)}
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

export default CourseTable;
