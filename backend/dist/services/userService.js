"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
class UserService {
    async createUser(userData) {
        const user = await User_1.default.create({
            ...userData,
        });
        return {
            success: true,
            message: "User created successfully",
            data: user,
        };
    }
    async getAllUsers() {
        const users = await User_1.default.findAll({
            where: {
                is_deleted: false,
            },
        });
        if (users.length === 0) {
            return {
                success: false,
                message: "No users found",
            };
        }
        return {
            success: true,
            message: "Users fetched successfully",
            data: users,
        };
    }
    async getUserById(userId) {
        const user = await User_1.default.findOne({
            where: {
                id: userId,
                is_deleted: false,
            },
        });
        if (!user) {
            return {
                success: false,
                message: "User not found",
            };
        }
        return {
            success: true,
            message: "User found successfully",
            data: user,
        };
    }
    async updateUser(userId, userData) {
        const user = await User_1.default.findOne({
            where: {
                id: userId,
                is_deleted: false,
            },
        });
        if (!user) {
            return {
                success: false,
                message: "User not found",
            };
        }
        await user.update(userData);
        return {
            success: true,
            message: "User updated successfully",
            data: user,
        };
    }
    async deleteUser(userId) {
        const user = await User_1.default.findOne({
            where: {
                id: userId,
                is_deleted: false,
            },
        });
        if (!user) {
            return {
                success: false,
                message: "User not found",
            };
        }
        await user.update({
            is_deleted: true,
        });
        return {
            success: true,
            message: "User deleted successfully",
        };
    }
}
exports.default = new UserService();
