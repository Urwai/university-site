import React from "react";
import { Link } from "react-router-dom";

const AdminAuthorities = () => {
  return (
    <div className="bg-cloudy-blue-gradient w-screen min-h-screen flex items-center justify-center relative">
        <div className="bg-gray-50 p-8 w-1/4 h-auto rounded-lg shadow-lg flex flex-col text-center">
            <Link to="/admin/authorities/department" className="bg-indigo-900 text-gray-50 p-3 rounded-2xl mb-4 mt-2">Department</Link>
            <Link to="/admin/authorities/teacher" className="bg-indigo-900 text-gray-50 p-3 rounded-2xl mb-4">Teacher</Link>
            <Link to="/admin/authorities/course" className="bg-indigo-900 text-gray-50 p-3 rounded-2xl mb-4">Course</Link>
            <Link to="/admin/authorities/student" className="bg-indigo-900 text-gray-50 p-3 rounded-2xl mb-4">Student</Link>
        </div>
    </div>
  );
};

export default AdminAuthorities;