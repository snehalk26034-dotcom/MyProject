"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactMessage_route_1 = __importDefault(require("./contactMessage.route"));
const routes = async (fastify) => {
    fastify.register(contactMessage_route_1.default, {
        prefix: "/api/v1/contact",
    });
};
exports.default = routes;
