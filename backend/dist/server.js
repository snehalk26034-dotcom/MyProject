"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const database_1 = __importDefault(require("./config/database"));
const routes_1 = __importDefault(require("./routes"));
require("./models/ContactMessage.model");
const fastify = (0, fastify_1.default)({
    logger: true,
});
async function startServer() {
    try {
        await database_1.default.authenticate();
        console.log("Database connected successfully");
        await database_1.default.sync();
        console.log("Database synced successfully");
        await fastify.register(routes_1.default);
        await fastify.listen({
            port: Number(process.env.PORT) || 3011,
            host: "0.0.0.0",
        });
        console.log("Server running on port 3011");
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
}
startServer();
