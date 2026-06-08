import { useState } from "react";

function StudentForm({
  addStudent
}) {

  const [name, setName] =
    useState("");

  const [course, setCourse] =
    useState("");

  const handleSubmit = () => {

    if (!name || !course) {
      return;
    }

    addStudent(
      name,
      course
    );

    setName("");
    setCourse("");

  };

  return (

    <div>

      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) =>
          setCourse(
            e.target.value
          )
        }
      />

      <br />
      <br />

      <button
        onClick={
          handleSubmit
        }
      >
        Add Student
      </button>

    </div>

  );

}

export default StudentForm;