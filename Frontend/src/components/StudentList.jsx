function StudentList({
  students,
  deleteStudent
}) {

  return (

    <div>

      <h2>
        Students
      </h2>

      {
        students.map(
          (student) => (

            <div
              key={
                student.id
              }
            >

              <h3>
                {
                  student.name
                }
              </h3>

              <p>
                {
                  student.course
                }
              </p>

              <button
                onClick={() =>
                  deleteStudent(
                    student.id
                  )
                }
              >
                Delete
              </button>

              <hr />

            </div>

          )
        )
      }

    </div>

  );

}

export default StudentList;