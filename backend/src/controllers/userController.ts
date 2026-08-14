import type { FastifyReply, FastifyRequest } from "fastify";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../services/userService";
import type { UserAttributes, UserCreationAttributes } from "../interface/user.interface";

export const createUserHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  try {
    const body = request.body as UserCreationAttributes;

    const newUser = await createUser(body);

    reply.code(201).send({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error: any) {
    const message = error?.original?.code === "ER_DUP_ENTRY"
      ? "A user with this email already exists."
      : "Unable to create user.";

    reply.code(409).send({
      success: false,
      message,
    });
  }
};

export const getAllUsersHandler = async (
  _request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  const users = await getAllUsers();

  reply.send({
    success: true,
    data: users,
  });
};

export const getUserByIdHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  const { id } = request.params as { id: string };
  const user = await getUserById(Number(id));

  if (!user) {
    reply.code(404).send({
      success: false,
      message: "User not found",
    });
    return;
  }
  
  reply.send({
    success: true,
    data: user,
  });
};

export const updateUserHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  const { id } = request.params as { id: string };
  const body = request.body as Partial<UserAttributes>;

  const user = await updateUser(Number(id), body);

  if (!user) {
    reply.code(404).send({
      success: false,
      message: "User not found",
    });
    return;
  }

  reply.send({
    success: true,
    message: "User updated successfully",
    data: user,
  });
};

export const deleteUserHandler = async (
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> => {
  const { id } = request.params as { id: string };
  const deleted = await deleteUser(Number(id));

  if (!deleted) {
    reply.code(404).send({
      success: false,
      message: "User not found",
    });
    return;
  }

  reply.send({
    success: true,
    message: "User deleted successfully",
  });
};
