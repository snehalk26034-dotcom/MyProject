import type { FastifyInstance } from "fastify";
import {
  createUserHandler,
  deleteUserHandler,
  getAllUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
} from "../controllers/userController";

export async function userRoutes(fastify: FastifyInstance): Promise<void> {
  fastify.post("/api/v1/users/create-user", createUserHandler);
  fastify.get("/api/v1/users/getAll-user", getAllUsersHandler);
  fastify.get("/api/v1/users/:id", getUserByIdHandler);
  fastify.put("/api/v1/users/:id", updateUserHandler);
  fastify.delete("/api/v1/users/:id", deleteUserHandler);
}
