import express from "express";
import departmentController from "./../controllers/department.controller.js";
import validation from '../middlewares/validation.middleware.js';
import {
    createDepartmentSchema,
    updateDepartmentSchema
} from "../validations/department.validation.js";
import { modelFilterSchema } from "../validations/filter.validation.js";

const router = express.Router();

router.route("/")
    .get(departmentController.findAll)
    .post(validation(createDepartmentSchema), departmentController.createDepartment)
    .patch(validation(updateDepartmentSchema), departmentController.updateDepartment)

router.route("/count-employees")
    .get(departmentController.countEmployees)    

router.route("/filter")
    .post(validation(modelFilterSchema), departmentController.getListDepartment)

router.route("/:id")
    .get(departmentController.findById)
    .delete(departmentController.deleteDepartment)
module.exports = router;