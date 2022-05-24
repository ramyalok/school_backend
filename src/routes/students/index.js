const express = require('express');
const studentRouter = express.Router();

const Student = require("../admin/students");
const Class_Section = require(".");
const Subjects = require("./subjects");

//================== STUDENTS ===================//
studentRouter.post("/student/create",Student.create_students);
studentRouter.post("/student/edit",Student.edit_student);
studentRouter.post("/student/delete",Student.delete_student);

//================= CLASS SECTION =================//
studentRouter.post("/class/create",Class_Section.create_class);
studentRouter.post("/class/edit",Class_Section.edit_class);
studentRouter.post("/class/delete",Class_Section.delete_class);

//================= SUBJECTS ======================//
studentRouter.post("/subject/create", Subjects.create_subjects);
studentRouter.post("/subject/edit",Subjects.edit_subject);
studentRouter.post("/subject/delete",Subjects.delete_subject);

module.exports = studentRouter;
