"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = routes;
const user_route_1 = __importDefault(require("./user.route"));
const student_route_1 = __importDefault(require("./student.route"));
async function routes(fastify) {
    fastify.register(user_route_1.default, { prefix: "/users" });
    fastify.register(student_route_1.default, { prefix: "/students" });
}
