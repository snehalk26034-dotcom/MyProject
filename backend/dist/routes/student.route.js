"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_controller_1 = __importDefault(require("../controllers/student.controller"));
async function studentRoutes(fastify) {
    fastify.get("/", student_controller_1.default.getAllStudents);
    fastify.post("/", student_controller_1.default.createStudent);
    fastify.get("/:student_id", student_controller_1.default.getStudentById);
    fastify.put("/:student_id", student_controller_1.default.updateStudent);
    fastify.delete("/:student_id", student_controller_1.default.deleteStudent);
}
exports.default = studentRoutes;
