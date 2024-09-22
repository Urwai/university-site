import React from "react";
import { Routes, Route } from "react-router-dom";
import FacultyPanel from "../../components/FacultyPanel/FacutyPanel";
import { CourseProvider, StudentProvider, TeacherProvider } from "../../assets/store";
import FacultyAuthorities from "../../components/FacultyAuthorties/FacultyAuthorities";

const Faculty = ()=>{
    
    return <TeacherProvider>
        <CourseProvider>
            <StudentProvider>
    <Routes>
        <Route path="/" element={<FacultyPanel />} />
        <Route path="authorities" element={<FacultyAuthorities />} />
    </Routes>
    </StudentProvider>
    </CourseProvider>
    </TeacherProvider>
}

export default Faculty;