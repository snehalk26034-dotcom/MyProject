"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
async function userRoutes(fastify) {
    fastify.post("/create-user", user_controller_1.default.createUser);
    fastify.get("/getAll-user", user_controller_1.default.getAllUsers);
    fastify.get("/user/:user_id", user_controller_1.default.getUserById);
    fastify.put("/user/:user_id/update-user", user_controller_1.default.updateUser);
    fastify.delete("/user/:user_id/delete-user", user_controller_1.default.deleteUser);
}
exports.default = userRoutes;
