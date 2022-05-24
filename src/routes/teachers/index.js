const express = require('express');
const teacherRouter = express.Router();

const Student = require("../admin/students");
const Class_Section = require(".");
const Subjects = require("./subjects");

//================== STUDENTS ===================//
teacherRouter.post("/student/create",Student.create_students);
teacherRouter.post("/student/edit",Student.edit_student);
teacherRouter.post("/student/delete",Student.delete_student);

//================= CLASS SECTION =================//
teacherRouter.post("/class/create",Class_Section.create_class);
teacherRouter.post("/class/edit",Class_Section.edit_class);
teacherRouter.post("/class/delete",Class_Section.delete_class);

//================= SUBJECTS ======================//
teacherRouter.post("/subject/create", Subjects.create_subjects);
teacherRouter.post("/subject/edit",Subjects.edit_subject);
teacherRouter.post("/subject/delete",Subjects.delete_subject);

module.exports = teacherRouter;
