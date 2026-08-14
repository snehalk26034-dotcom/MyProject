import User from "../models/User";
import {
  createUserInterface,
  updateUserInterface,
} from "../interface/user.interface";

class UserService {
  async createUser(userData: createUserInterface) {
    const user = await User.create({
      ...userData,
    });

    return {
      success: true,
      message: "User created successfully",
      data: user,
    };
  }

  async getAllUsers() {
    const users = await User.findAll({
      where: {
        is_deleted: false,
      },
    });

    if (users.length === 0) {
      return {
        success: false,
        message: "No users found",
      };
    }

    return {
      success: true,
      message: "Users fetched successfully",
      data: users,
    };
  }

  async getUserById(userId: string) {
    const user = await User.findOne({
      where: {
        id: userId,
        is_deleted: false,
      },
    });

    if (!user) {
      return {
        success: false,
        message: "User not found",
      };
    }

    return {
      success: true,
      message: "User found successfully",
      data: user,
    };
  }

  async updateUser(userId: string, userData: updateUserInterface) {
    const user = await User.findOne({
      where: {
        id: userId,
        is_deleted: false,
      },
    });

    if (!user) {
      return {
        success: false,
        message: "User not found",
      };
    }

    await user.update(userData);

    return {
      success: true,
      message: "User updated successfully",
      data: user,
    };
  }

  async deleteUser(userId: string) {
    const user = await User.findOne({
      where: {
        id: userId,
        is_deleted: false,
      },
    });

    if (!user) {
      return {
        success: false,
        message: "User not found",
      };
    }

    await user.update({
      is_deleted: true,
    });

    return {
      success: true,
      message: "User deleted successfully",
    };
  }
}

export default new UserService();