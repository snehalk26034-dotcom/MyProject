"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = __importDefault(require("../controllers/userController"));
async function userRoutes(fastify) {
    fastify.post("/users", userController_1.default.createUser);
    fastify.get("/users", userController_1.default.getAllUsers);
    fastify.get("/users/:user_id", userController_1.default.getUserById);
    fastify.put("/users/:user_id", userController_1.default.updateUser);
    fastify.delete("/users/:user_id", userController_1.default.deleteUser);
}
exports.default = userRoutes;
