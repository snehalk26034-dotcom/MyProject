"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
dotenv_1.default.config();
const app = (0, fastify_1.default)({
    logger: true,
});
app.register(userRoutes_1.default, { prefix: "/api/v1" });
const start = async () => {
    const skipDbCheck = (process.env.SKIP_DB_CHECK ?? "false").trim().toLowerCase() === "true";
    if (!skipDbCheck) {
        try {
            await database_1.default.authenticate();
            console.log("Database connected successfully");
            await database_1.default.sync({ alter: true });
        }
        catch (error) {
            console.warn("Database connection failed. The server will still start, but database APIs will not work until the DB credentials are fixed.");
            console.warn("Please check your MySQL username/password in the .env file.");
            console.warn(error.message);
        }
    }
    else {
        console.warn("Skipping MySQL connection check because SKIP_DB_CHECK=true in the .env file.");
    }
    const configuredPort = Number((process.env.PORT ?? "3011").trim()) || 3011;
    const tryListen = async (port) => {
        try {
            await app.listen({
                port,
                host: "0.0.0.0",
            });
            console.log(`Server running on http://localhost:${port}`);
        }
        catch (error) {
            if (error?.code === "EADDRINUSE") {
                const nextPort = port + 1;
                console.warn(`Port ${port} is already in use. Trying ${nextPort} instead.`);
                await tryListen(nextPort);
                return;
            }
            app.log.error(error);
            process.exit(1);
        }
    };
    await tryListen(configuredPort);
};
start();
