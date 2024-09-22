import React, { createContext, useState, useContext, useEffect } from "react";
import secureLocalStorage from "react-secure-storage";

// Department Context
const DepartmentContext = createContext();

export const useDepartment = () => useContext(DepartmentContext);

export const DepartmentProvider = ({ children }) => {
  const [departments, setDepartments] = useState(() => {
    try {
      const storedDepartments = secureLocalStorage.getItem("departments");
      return storedDepartments ? JSON.parse(storedDepartments) : [];
    } catch (error) {
      console.error("Failed to retrieve departments from storage:", error);
      return [];
    }
  });

  useEffect(() => {
    secureLocalStorage.setItem("departments", JSON.stringify(departments));
  }, [departments]);

  const addDepartment = (department) => {
    setDepartments((prev) => [...prev, department]);
  };

  const updateDepartment = (index, updatedDepartment) => {
    setDepartments((prev) => {
      const newDepartments = [...prev];
      newDepartments[index] = updatedDepartment;
      return newDepartments;
    });
  };

  const deleteDepartment = (index) => {
    setDepartments((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <DepartmentContext.Provider value={{ departments, addDepartment, updateDepartment, deleteDepartment }}>
      {children}
    </DepartmentContext.Provider>
  );
};

// Teacher Context
const TeacherContext = createContext();

export const useTeacher = () => useContext(TeacherContext);

export const TeacherProvider = ({ children }) => {
  const [teachers, setTeachers] = useState(() => {
    try {
      const storedTeachers = secureLocalStorage.getItem("teachers");
      return storedTeachers ? JSON.parse(storedTeachers) : [];
    } catch (error) {
      console.error("Failed to retrieve teachers from storage:", error);
      return [];
    }
  });

  useEffect(() => {
    secureLocalStorage.setItem("teachers", JSON.stringify(teachers));
  }, [teachers]);

  const addTeacher = (teacher) => {
    setTeachers((prev) => [...prev, teacher]);
  };

  const updateTeacher = (index, updatedTeacher) => {
    setTeachers((prev) => {
      const newTeachers = [...prev];
      newTeachers[index] = updatedTeacher;
      return newTeachers;
    });
  };

  const deleteTeacher = (index) => {
    setTeachers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <TeacherContext.Provider value={{ teachers, addTeacher, updateTeacher, deleteTeacher }}>
      {children}
    </TeacherContext.Provider>
  );
};

// Course Context
const CourseContext = createContext();

export const useCourse = () => useContext(CourseContext);

export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(() => {
    try {
      const storedCourses = secureLocalStorage.getItem("courses");
      return storedCourses ? JSON.parse(storedCourses) : [];
    } catch (error) {
      console.error("Failed to retrieve courses from storage:", error);
      return [];
    }
  });

  useEffect(() => {
    secureLocalStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const addCourse = (course) => {
    setCourses((prev) => [...prev, course]);
  };

  const updateCourse = (index, updatedCourse) => {
    setCourses((prev) => {
      const newCourses = [...prev];
      newCourses[index] = updatedCourse;
      return newCourses;
    });
  };

  const deleteCourse = (index) => {
    setCourses((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <CourseContext.Provider value={{ courses, addCourse, updateCourse, deleteCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

// Student Context
const StudentContext = createContext();

export const useStudent = () => useContext(StudentContext);

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState(() => {
    try {
      const storedStudents = secureLocalStorage.getItem("students");
      return storedStudents ? JSON.parse(storedStudents) : [];
    } catch (error) {
      console.error("Failed to retrieve students from storage:", error);
      return [];
    }
  });

  useEffect(() => {
    secureLocalStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const updateStudent = (index, updatedStudent) => {
    setStudents((prev) => {
      const newStudents = [...prev];
      newStudents[index] = updatedStudent;
      return newStudents;
    });
  };

  const deleteStudent = (index) => {
    setStudents((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
};

export default { DepartmentProvider, TeacherProvider, CourseProvider, StudentProvider };
