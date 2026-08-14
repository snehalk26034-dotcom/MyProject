"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_service_1 = __importDefault(require("../services/student.service"));
class StudentController {
    async getAllStudents(req, reply) {
        try {
            const paginationQuery = req.query;
            const response = await student_service_1.default.getAllStudents(paginationQuery);
            return reply.status(200).send(response);
        }
        catch (error) {
            return reply.status(500).send({
                message: "Internal Server Error",
                error: error.message
            });
        }
    }
    async getStudentById(req, reply) {
        try {
            const { student_id } = req.params;
            const response = await student_service_1.default.getStudentById(student_id);
            if (!response.success) {
                return reply.status(404).send(response);
            }
            return reply.status(200).send(response);
        }
        catch (error) {
            return reply.status(500).send({
                message: "Internal Server Error",
                error: error.message
            });
        }
    }
    async createStudent(req, reply) {
        try {
            const studentData = req.body;
            const response = await student_service_1.default.createStudent(studentData);
            return reply.status(201).send(response);
        }
        catch (error) {
            return reply.status(500).send({
                message: "Internal Server Error",
                error: error.message
            });
        }
    }
    async updateStudent(req, reply) {
        try {
            const { student_id } = req.params;
            const studentData = req.body;
            const response = await student_service_1.default.updateStudent(student_id, studentData);
            if (!response.success) {
                return reply.status(404).send(response);
            }
            return reply.status(200).send(response);
        }
        catch (error) {
            return reply.status(500).send({
                message: "Internal Server Error",
                error: error.message
            });
        }
    }
    async deleteStudent(req, reply) {
        try {
            const { student_id } = req.params;
            const response = await student_service_1.default.deleteStudent(student_id);
            if (!response.success) {
                return reply.status(404).send(response);
            }
            return reply.status(200).send(response);
        }
        catch (error) {
            return reply.status(500).send({
                message: "Internal Server Error",
                error: error.message
            });
        }
    }
}
exports.default = new StudentController();
