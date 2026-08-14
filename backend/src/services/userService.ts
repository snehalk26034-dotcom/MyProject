import User from "../models/User";
import type { UserAttributes, UserCreationAttributes } from "../interface/user.interface";

export async function createUser(data: UserCreationAttributes): Promise<User> {
  return User.create(data);
}

export async function getAllUsers(): Promise<User[]> {
  return User.findAll({
    order: [["createdAt", "DESC"]],
  });
}

export async function getUserById(id: number): Promise<User | null> {
  return User.findByPk(id);
}

export async function updateUser(id: number, data: Partial<UserAttributes>): Promise<User | null> {
  const user = await User.findByPk(id);

  if (!user) {
    return null;
  }

  await user.update(data);
  return user;
}

export async function deleteUser(id: number): Promise<boolean> {
  const user = await User.findByPk(id);

  if (!user) {
    return false;
  }

  await user.destroy();
  return true;
}
