import * as yup from 'yup';

export const userSchema = yup.object().shape({
  department_name: yup
    .string()
    .min(3, "Department name must be at least 3 characters long")
    .max(50, "Department name cannot be longer than 50 characters")
    .required("Department name is required"),
  department_code: yup
    .string()
    .matches(/^[A-Z0-9]+$/, "Department code must contain only uppercase letters and numbers")
    .min(2, "Department code must be at least 2 characters long")
    .max(10, "Department code cannot be longer than 10 characters")
    .required("Department code is required"),
  head_department: yup
    .string()
    .min(3, "Head of department name must be at least 3 characters long")
    .max(50, "Head of department name cannot be longer than 50 characters")
    .required("Head of department name is required")
});


export const teacherSchema = yup.object().shape({
  teacherName : yup.string().min(3,"Teacher name must be at least 3 characters long")
  .max(50, "Teacher name cannot be longer than 50 characters")
  .required("Teacher name is required"),

  teacherDept : yup.string()
  .required("Teacher name is required"),

  teacherQualification : yup.string()
  .min(3, "Teacher Qualification must be at least 3 characters long")
    .max(50, "Teacher Qualification cannot be longer than 50 characters")
    .required("Teacher Qualification is required")
})

export const courseSchema = yup.object().shape({
  courseName: yup.string()
    .min(3, "Course name must be at least 3 characters long")
    .max(50, "Course name cannot be longer than 50 characters")
    .required("Course name is required"),

  courseCode: yup.string()
    .min(3, "Course code must be at least 3 characters long")
    .max(10, "Course code cannot be longer than 10 characters")
    .required("Course code is required"),

  creditHours: yup.number()
    .positive("Credit hours must be a positive number")
    .required("Credit hours are required"),

  teacherName: yup.string()
    .required("Teacher selection is required"),

  deptName: yup.string()
    .required("Department selection is required")
});

export const studentSchema = yup.object().shape({
  student_name: yup.string().required("Student Name is required"),
  student_age: yup.number().required("Student Age is required").positive().integer(),
  student_dept: yup.string().required("Department is required"),
  student_teacher: yup.string().required("Teacher is required"),
  student_course: yup.string().required("Course is required"),
});