"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../models/user.model"));
const pagination_util_1 = require("../utils/pagination.util");
class UserService {
    async createUser(userData) {
        const user = await user_model_1.default.create({ ...userData });
        return {
            success: true,
            message: "User created successfully",
            data: user
        };
    }
    async getAllUsers(query = {}) {
        const pageData = (0, pagination_util_1.pagination)(query);
        const whereClause = { is_deleted: false };
        const users = await user_model_1.default.findAll({
            where: whereClause,
            limit: pageData.limit,
            offset: pageData.offset,
            order: [["created_at", "DESC"]]
        });
        const total = await user_model_1.default.count({ where: whereClause });
        if (users.length === 0) {
            return {
                success: false,
                message: "No users found"
            };
        }
        return {
            success: true,
            message: "Users fetched successfully",
            data: users,
            pagination: {
                page: pageData.page,
                limit: pageData.limit,
                total,
                totalPages: Math.max(1, Math.ceil(total / pageData.limit))
            }
        };
    }
    async getUserById(userId) {
        const user = await user_model_1.default.findOne({ where: { id: userId, is_deleted: false } });
        if (!user) {
            return {
                success: false,
                message: "User not found"
            };
        }
        return {
            success: true,
            message: "User found successfully",
            data: user
        };
    }
    async updateUser(userId, userData) {
        const user = await user_model_1.default.findOne({ where: { id: userId, is_deleted: false } });
        if (!user) {
            return {
                success: false,
                message: "User not found"
            };
        }
        await user.update(userData);
        return {
            success: true,
            message: "User updated successfully",
            data: user
        };
    }
    async deleteUser(userId) {
        const user = await user_model_1.default.findOne({ where: { id: userId, is_deleted: false } });
        if (!user) {
            return {
                success: false,
                message: "User not found"
            };
        }
        await user.update({ is_deleted: true });
        return {
            success: true,
            message: "User deleted successfully"
        };
    }
}
exports.default = new UserService();
