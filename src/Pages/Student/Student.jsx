import React from "react";
import { Routes, Route } from "react-router-dom";
import StudentPanel from "../../components/StudentPanel/StudentPanel"
import { StudentProvider } from "../../assets/store";
import StudentAuthorities from "../../components/StudentAuthorities/StudentAuthorities";

const Student = () => {
  return (
    <StudentProvider>
    <Routes>
      <Route path="/" element={<StudentPanel />} />
      <Route path="authorities" element={<StudentAuthorities />} />
    </Routes>
    </StudentProvider>
  );
};

export default Student;
