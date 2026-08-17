import { FastifyPluginAsync } from "fastify";
import contactMessageController from "../controllers/contactMessage.controller";

const contactMessageRoutes: FastifyPluginAsync = async (fastify) => {
  fastify.post(
    "/create-contact-message",
    contactMessageController.createContactMessage
  );

  fastify.get(
    "/getAll-contact-messages",
    contactMessageController.getContactMessages
  );
};

export default contactMessageRoutes;