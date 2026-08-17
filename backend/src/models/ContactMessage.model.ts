import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class ContactMessage extends Model {
  declare id: string;
  declare first_name: string;
  declare last_name: string;
  declare email: string;
  declare message: string;
  declare created_at: Date;
  declare updated_at: Date;
}

ContactMessage.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },

    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "contact_messages",
    timestamps: false,
  }
);

export default ContactMessage;