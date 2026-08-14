"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = __importDefault(require("../services/user.service"));
class UserController {
    async createUser(req, reply) {
        try {
            const userData = req.body;
            const response = await user_service_1.default.createUser(userData);
            return reply.status(201).send(response);
        }
        catch (error) {
            return reply.status(500).send({
                message: "Internal Server Error",
                error: error.message
            });
        }
    }
    async getAllUsers(req, reply) {
        try {
            const paginationQuery = req.query;
            const response = await user_service_1.default.getAllUsers(paginationQuery);
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
    async getUserById(req, reply) {
        try {
            const { user_id } = req.params;
            const response = await user_service_1.default.getUserById(user_id);
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
    async updateUser(req, reply) {
        try {
            const { user_id } = req.params;
            const userData = req.body;
            const response = await user_service_1.default.updateUser(user_id, userData);
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
    async deleteUser(req, reply) {
        try {
            const { user_id } = req.params;
            const response = await user_service_1.default.deleteUser(user_id);
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
exports.default = new UserController();
