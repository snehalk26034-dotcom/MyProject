"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContactMessage_model_1 = __importDefault(require("../models/ContactMessage.model"));
class ContactMessageService {
    async createContactMessage(contactData) {
        const contactMessage = await ContactMessage_model_1.default.create({
            ...contactData,
        });
        return {
            success: true,
            message: "Contact message created successfully",
            data: contactMessage,
        };
    }
    async getContactMessages() {
        const contactMessages = await ContactMessage_model_1.default.findAll({
            order: [["created_at", "DESC"]],
        });
        return {
            success: true,
            message: "Contact messages fetched successfully",
            data: contactMessages,
        };
    }
}
exports.default = new ContactMessageService();
