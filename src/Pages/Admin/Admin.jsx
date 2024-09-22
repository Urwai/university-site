import React from "react";
import { Routes, Route } from "react-router-dom";
import { CourseProvider, DepartmentProvider, StudentProvider } from "../../assets/store";
import { TeacherProvider } from "../../assets/store";
import AdminPanel from "../../components/AdminPanel/AdminPanel";
import AdminAuthorities from "../../components/AdminAuthorities/AdminAuthorities";
import CreateDepartment from "../../components/CreateDepartment/CreateDepartment";
import CreateCourse from "../../components/CreateCourse/CreateCourse";
import CreateStudent from "../../components/CreateStudent/CreateStudent";
import CreateTeacher from "../../components/CreateTeacher/CreateTeacher";
import DepartmentTable from "../../components/DepartmentTable/DepartmentTablle";
import TeacherTable from "../../components/TeacherTable/TeacherTable";
import CourseTable from "../../components/CourseTable/CourseTable";
import StudentTable from "../../components/StudentTabel/StudentTable";
import EditTeacherTable from "../../components/EditTeacherTable/EditTeacherTable";
import EditDepartment from "../../components/EditDepartment/EditDepartment";
import EditCourse from "../../components/EditCourse/EditCourse";
import EditStudents from "../../components/EditStudents/EditStudents";

const Admin = () => {
  return (
    <DepartmentProvider>
      <TeacherProvider>
        <CourseProvider>
          <StudentProvider>
      <Routes>
        <Route path="/" element={<AdminPanel />} />
        <Route path="authorities" element={<AdminAuthorities />} />
        <Route path="authorities/department" element={<DepartmentTable />} />
        <Route path="authorities/course" element={<CourseTable />} />
        <Route path="authorities/teacher" element={<TeacherTable/>} />
        <Route path="authorities/student" element={<StudentTable />} />
        <Route path="authorities/department/add" element={<CreateDepartment />} />
        <Route path="authorities/teacher/add" element={<CreateTeacher/>} />
        <Route path="authorities/course/add" element={<CreateCourse />} />
        <Route path="authorities/student/add" element={<CreateStudent />} />
        <Route path="authorities/teacher/edit" element={<EditTeacherTable />} />
        <Route path="authorities/department/edit" element={<EditDepartment />} />
        <Route path="authorities/course/edit" element={<EditCourse />} />
        <Route path="authorities/student/edit" element={<EditStudents />} />

      </Routes>
      </StudentProvider>
      </CourseProvider>
      </TeacherProvider>
    </DepartmentProvider>
  );
};

export default Admin;

