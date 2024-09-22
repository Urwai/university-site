import React, { useEffect, useState } from "react";
import { useCourse, useTeacher, useStudent } from "../../assets/store";

const FacultyAuthorities = () => {
  const { teachers } = useTeacher();
  const { courses } = useCourse();
  const { students } = useStudent();

  const [teacherData, setTeacherData] = useState(null);

  useEffect(() => {
    const teacherId = localStorage.getItem("teacherId");
    const teacherName = localStorage.getItem("teacherName");
    console.log("Retrieved Teacher ID:", teacherId); // Debugging line
    console.log("Retrieved Teacher Name:", teacherName); // Debugging line

    if (teacherId && teacherName) {
      const matchedTeacher = teachers.find(
        (teacher) => teacher.teacherId.toString() === teacherId && teacher.teacherName === teacherName
      );
      console.log("Matched Teacher:", matchedTeacher); // Debugging line
      setTeacherData(matchedTeacher);
    }
  }, [teachers]);

  if (!teacherData) return <p>Loading...</p>;

  // Debugging
  console.log("Teacher Data:", teacherData);
  console.log("Courses Data:", courses);
  console.log("Students Data:", students);

  // Filter courses taught by the teacher
  const teacherCourses = courses.filter(course => 
    course.teacherName === teacherData.teacherName
  );

  // Assuming students have a property indicating their course or you have some other association
  const courseToStudents = students.reduce((acc, student) => {
    if (!acc[student.studentCourse]) {
      acc[student.studentCourse] = [];
    }
    acc[student.studentCourse].push(student);
    return acc;
  }, {});

  return (
    <div className="bg-cloudy-blue-gradient w-screen min-h-screen flex items-center justify-center relative">
      <div className="bg-gray-50 p-8 w-3/4 h-auto rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{teacherData.teacherName}</h2>

        <table className="w-full border-collapse mb-6">
          <thead>
            <tr>
              <th className="border-b-2 border-gray-300 p-4">Course</th>
              <th className="border-b-2 border-gray-300 p-4">Students</th>
            </tr>
          </thead>
          <tbody>
            {teacherCourses.map((course) => (
              <tr key={course.courseId}>
                <td className="border-b border-gray-300 p-4 text-center">{course.courseName}</td>
                <td className="border-b border-gray-300 p-4 text-center">
                  <ul>
                    {courseToStudents[course.courseName]?.map(student => (
                      <li key={student.studentId}>{student.studentName}</li>
                    )) || <li>No students enrolled</li>}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyAuthorities;
