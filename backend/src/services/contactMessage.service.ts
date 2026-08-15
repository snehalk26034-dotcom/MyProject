import ContactMessage from "../models/ContactMessage.model";
import { createContactMessageInterface } from "../interface/contactMessage.interface";

class ContactMessageService {
  async createContactMessage(
    contactData: createContactMessageInterface
  ) {
    const contactMessage = await ContactMessage.create({
      ...contactData,
    });

    return {
      success: true,
      message: "Contact message created successfully",
      data: contactMessage,
    };
  }

  async getContactMessages() {
    const contactMessages = await ContactMessage.findAll({
      order: [["created_at", "DESC"]],
    });

    return {
      success: true,
      message: "Contact messages fetched successfully",
      data: contactMessages,
    };
  }
}

export default new ContactMessageService();