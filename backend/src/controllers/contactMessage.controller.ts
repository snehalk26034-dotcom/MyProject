import { FastifyReply, FastifyRequest } from "fastify";
import ContactMessageService from "../services/contactMessage.service";
import { createContactMessageInterface } from "../interface/contactMessage.interface";

class ContactMessageController {

  async createContactMessage(
    req: FastifyRequest,
    reply: FastifyReply
  ) {
    try {
      const contactData =
        req.body as createContactMessageInterface;

      const response =
        await ContactMessageService.createContactMessage(contactData);

      return reply.status(201).send(response);

    } catch (error) {
      return reply.status(500).send({
        message: "Internal Server Error",
        error: (error as Error).message,
      });
    }
  }

  async getContactMessages(
    req: FastifyRequest,
    reply: FastifyReply
  ) {
    try {
      const response =
        await ContactMessageService.getContactMessages();

      return reply.status(200).send(response);

    } catch (error) {
      return reply.status(500).send({
        message: "Internal Server Error",
        error: (error as Error).message,
      });
    }
  }
}

export default new ContactMessageController();