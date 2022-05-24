const express = require('express');
const adminRouter = express.Router();

const Student = require("./students");
const Class_Section = require("./class");
const Subjects = require("./subjects");

//================== STUDENTS ===================//
adminRouter.post("/student/create",Student.create_students);
adminRouter.post("/student/edit",Student.edit_student);
adminRouter.post("/student/delete",Student.delete_student);

//================= CLASS SECTION =================//
adminRouter.post("/class/create",Class_Section.create_class);
adminRouter.post("/class/edit",Class_Section.edit_class);
adminRouter.post("/class/delete",Class_Section.delete_class);

//================= SUBJECTS ======================//
adminRouter.post("/subject/create", Subjects.create_subjects);
adminRouter.post("/subject/edit",Subjects.edit_subject);
adminRouter.post("/subject/delete",Subjects.delete_subject);

module.exports = adminRouter;
