import { FastifyInstance } from "fastify";
import userController from "../controllers/userController";

async function userRoutes(fastify: FastifyInstance) {
  fastify.post("/users", userController.createUser);

  fastify.get("/users", userController.getAllUsers);

  fastify.get("/users/:user_id", userController.getUserById);

  fastify.put("/users/:user_id", userController.updateUser);

  fastify.delete("/users/:user_id", userController.deleteUser);
}

export default userRoutes;