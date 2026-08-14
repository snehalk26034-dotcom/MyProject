"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_model_1 = __importDefault(require("../models/student.model"));
const pagination_util_1 = require("../utils/pagination.util");
class StudentService {
    async getAllStudents(query = {}) {
        const pageData = (0, pagination_util_1.pagination)(query);
        const whereClause = { is_deleted: false };
        const students = await student_model_1.default.findAll({
            where: whereClause,
            limit: pageData.limit,
            offset: pageData.offset,
            order: [["createdAt", "DESC"]]
        });
        const total = await student_model_1.default.count({ where: whereClause });
        return {
            success: true,
            message: "Students fetched successfully",
            data: students,
            pagination: {
                page: pageData.page,
                limit: pageData.limit,
                total,
                totalPages: Math.max(1, Math.ceil(total / pageData.limit))
            }
        };
    }
    async getStudentById(studentId) {
        const student = await student_model_1.default.findOne({ where: { id: studentId, is_deleted: false } });
        if (!student) {
            return {
                success: false,
                message: "Student not found"
            };
        }
        return {
            success: true,
            message: "Student found successfully",
            data: student
        };
    }
    async createStudent(studentData) {
        const student = await student_model_1.default.create({ ...studentData });
        return {
            success: true,
            message: "Student created successfully",
            data: student
        };
    }
    async updateStudent(studentId, studentData) {
        const student = await student_model_1.default.findOne({ where: { id: studentId, is_deleted: false } });
        if (!student) {
            return {
                success: false,
                message: "Student not found"
            };
        }
        await student.update(studentData);
        return {
            success: true,
            message: "Student updated successfully",
            data: student
        };
    }
    async deleteStudent(studentId) {
        const student = await student_model_1.default.findOne({ where: { id: studentId, is_deleted: false } });
        if (!student) {
            return {
                success: false,
                message: "Student not found"
            };
        }
        await student.update({ is_deleted: true });
        return {
            success: true,
            message: "Student deleted successfully"
        };
    }
}
exports.default = new StudentService();
