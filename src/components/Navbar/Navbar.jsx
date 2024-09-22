import React from "react";
import background from "../../assets/background.jpg";
import logo from "../../assets/university-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative">
      <img className="w-screen min-h-screen object-cover" src={background} alt="Background" />

      <div className="absolute top-0 left-0 bg-black bg-opacity-20 flex justify-start items-center p-3 w-full">
        <img src={logo} alt="University Logo" className="w-28" />
        <h2 className="text-gray-50 text-3xl font-bold pl-2">
          Arid <span className="text-indigo-900">University</span>
        </h2>
        <div className="flex ml-auto">
          <Link to="/admin" className="bg-indigo-900 text-gray-50 p-3 rounded-2xl mr-4">
          Admin
          </Link>
          <Link to="/faculty" className="bg-indigo-900 text-gray-50 p-3 rounded-2xl mr-4">
          Faculty
          </Link>
          <Link to="/student" className="bg-indigo-900 text-gray-50 p-3 rounded-2xl mr-20">
          Student
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;