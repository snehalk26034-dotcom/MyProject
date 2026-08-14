import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
    (process.env.DB_NAME ?? "").trim(),
    (process.env.DB_USER ?? "").trim(),
    (process.env.DB_PASSWORD ?? "").trim(),
    {
        host: (process.env.DB_HOST ?? "localhost").trim(),
        dialect: "mysql",
        port: Number((process.env.DB_PORT ?? "3306").trim()),
        logging: false,
        dialectOptions: {
            connectTimeout: 2000,
        },
    }
);

export default sequelize;