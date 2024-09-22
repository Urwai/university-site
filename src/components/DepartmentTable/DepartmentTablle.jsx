import React, { useState } from "react";
import { useDepartment } from "../../assets/store";
import { useNavigate } from "react-router-dom";

const DepartmentTable = () => {
  const { departments, updateDepartment, deleteDepartment } = useDepartment();
  // Assuming these functions are provided in your context
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 5;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = departments.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(departments.length / recordPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  const handleAddDepartment = () => {
    navigate("/admin/authorities/department/add");
  };

  const updateData = (index) => {
    const dataToEdit = departments[index];
    navigate("/admin/authorities/department/edit", {
      state: { data: dataToEdit, index },
    });
  };

  const deleteData = (index) => {
    if (window.confirm("Are you sure you want to delete this department?")) {
      deleteDepartment(index);
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
          className="bg-indigo-900 text-gray-50 py-3 px-9 rounded-2xl mb-4 mr-96 -ml-80"
          onClick={handleAddDepartment}
        >
          Add Department
        </button>
        <table className="bg-gray-50 w-full h-auto rounded-lg shadow-lg border-collapse">
          <thead>
            <tr className="bg-indigo-900 text-gray-50 text-left border-b-2 border-gray-200">
              <th className="p-4">Department Name</th>
              <th className="p-4">Department Code</th>
              <th className="p-4">Head of Department</th>
              <th className="p-4">Update</th>
              <th className="p-4">Delete</th>
            </tr>
          </thead>
          <tbody>
            {records.map((dept, index) => (
              <tr
                key={dept.deptCode} // Use a unique key if available
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="p-4">{dept.deptName}</td>
                <td className="p-4">{dept.deptCode}</td>
                <td className="p-4">{dept.hod}</td>
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

export default DepartmentTable;
