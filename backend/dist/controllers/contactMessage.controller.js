"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const contactMessage_service_1 = __importDefault(require("../services/contactMessage.service"));
class ContactMessageController {
    async createContactMessage(req, reply) {
        try {
            const contactData = req.body;
            const response = await contactMessage_service_1.default.createContactMessage(contactData);
            return reply.status(201).send(response);
        }
        catch (error) {
            return reply.status(500).send({
                message: "Internal Server Error",
                error: error.message,
            });
        }
    }
    async getContactMessages(req, reply) {
        try {
            const response = await contactMessage_service_1.default.getContactMessages();
            return reply.status(200).send(response);
        }
        catch (error) {
            return reply.status(500).send({
                message: "Internal Server Error",
                error: error.message,
            });
        }
    }
}
exports.default = new ContactMessageController();
