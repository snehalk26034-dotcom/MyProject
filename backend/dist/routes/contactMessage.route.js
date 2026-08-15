"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactMessage_controller_1 = __importDefault(require("../controllers/contactMessage.controller"));
const contactMessageRoutes = async (fastify) => {
    fastify.post("/create-contact-message", contactMessage_controller_1.default.createContactMessage);
    fastify.get("/getAll-contact-messages", contactMessage_controller_1.default.getContactMessages);
};
exports.default = contactMessageRoutes;
