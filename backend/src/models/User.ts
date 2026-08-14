import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";
import type { UserAttributes, UserCreationAttributes } from "../interface/user.interface";

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  declare id?: number;
  declare first_name: string;
  declare middle_name?: string | null;
  declare last_name: string;
  declare email: string;
  declare phone: string;
  declare password: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middle_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: true,
  }
);

export default User;
