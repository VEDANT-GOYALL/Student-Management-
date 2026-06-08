from flask import request
from flask import jsonify

from models import *


def register_routes(app):

    @app.route(
        "/students",
        methods=["GET"]
    )
    def get_students():

        students = Student.query.all()

        result = []

        for student in students:

            result.append(
                {
                    "id": student.id,
                    "name": student.name,
                    "course": student.course
                }
            )

        return jsonify(result)


    @app.route(
        "/students",
        methods=["POST"]
    )
    def add_student():

        data = request.json

        student = Student(
            name=data["name"],
            course=data["course"]
        )

        db.session.add(student)
        db.session.commit()

        return jsonify(
            {
                "message":
                "Student added"
            }
        )


    @app.route(
        "/students/<int:id>",
        methods=["DELETE"]
    )
    def delete_student(id):

        student = Student.query.get(id)

        if not student:

            return jsonify(
                {
                    "message":
                    "Student not found"
                }
            ), 404

        db.session.delete(student)
        db.session.commit()

        return jsonify(
            {
                "message":
                "Student deleted"
            }
        )