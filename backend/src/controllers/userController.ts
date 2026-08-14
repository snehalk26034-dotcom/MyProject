import { FastifyReply, FastifyRequest } from "fastify";
import UserService from "../services/userService";
import {
  createUserInterface,
  updateUserInterface,
} from "../interface/user.interface";

class UserController {
  async createUser(req: FastifyRequest, reply: FastifyReply) {
    try {
      const userData = req.body as createUserInterface;
      const response = await UserService.createUser(userData);

      return reply.status(201).send(response);
    } catch (error) {
      return reply.status(500).send({
        message: "Internal Server Error",
        error: (error as Error).message,
      });
    }
  }

  async getAllUsers(req: FastifyRequest, reply: FastifyReply) {
    try {
      const response = await UserService.getAllUsers();

      if (!response.success) {
        return reply.status(404).send(response);
      }

      return reply.status(200).send(response);
    } catch (error) {
      return reply.status(500).send({
        message: "Internal Server Error",
        error: (error as Error).message,
      });
    }
  }

  async getUserById(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { user_id } = req.params as { user_id: string };
      const response = await UserService.getUserById(user_id);

      if (!response.success) {
        return reply.status(404).send(response);
      }

      return reply.status(200).send(response);
    } catch (error) {
      return reply.status(500).send({
        message: "Internal Server Error",
        error: (error as Error).message,
      });
    }
  }

  async updateUser(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { user_id } = req.params as { user_id: string };
      const userData = req.body as updateUserInterface;
      const response = await UserService.updateUser(user_id, userData);

      if (!response.success) {
        return reply.status(404).send(response);
      }

      return reply.status(200).send(response);
    } catch (error) {
      return reply.status(500).send({
        message: "Internal Server Error",
        error: (error as Error).message,
      });
    }
  }

  async deleteUser(req: FastifyRequest, reply: FastifyReply) {
    try {
      const { user_id } = req.params as { user_id: string };
      const response = await UserService.deleteUser(user_id);

      if (!response.success) {
        return reply.status(404).send(response);
      }

      return reply.status(200).send(response);
    } catch (error) {
      return reply.status(500).send({
        message: "Internal Server Error",
        error: (error as Error).message,
      });
    }
  }
}

export default new UserController();