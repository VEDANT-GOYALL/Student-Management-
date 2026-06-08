import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./app.css";
function App() {

  const [students, setStudents] =
    useState([]);

  const loadStudents = async () => {

    const response =
      await fetch(
        "https://student-management-vvlu.onrender.com/students"
      );

    const data =
      await response.json();

    setStudents(data);

  };

  useEffect(() => {

    loadStudents();

  }, []);

  const addStudent = async (name, course) => {

      await fetch(
        "https://student-management-vvlu.onrender.com/students",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            name,
            course
          })
        }
      );

      loadStudents();

    };

  const deleteStudent =
    async (id) => {

      const res=await fetch(
        `https://student-management-vvlu.onrender.com/${id}`,
        {
          method: "DELETE"
        }
      );
      const msg=await res.json()
      

      loadStudents();
      alert(msg.message)

    };

  return (
    <div>

      <h1>
        Student Management System
      </h1>

      <StudentForm
        addStudent={addStudent}
      />

      <StudentList
        students={students}
        deleteStudent={
          deleteStudent
        }
      />

    </div>
  );

}

export default App;