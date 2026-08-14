"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./config/database"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, fastify_1.default)({ logger: true });
app.register(routes_1.default, { prefix: "/api/v1" });
const startServer = async () => {
    try {
        const start = Date.now();
        await database_1.default.authenticate();
        app.log.info(`Database connected successfully`);
        await database_1.default.sync();
        await app.listen({
            port: Number(process.env.PORT),
            host: "0.0.0.0"
        });
        app.log.info(`Server is running on http://localhost:${process.env.PORT}`);
    }
    catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};
startServer();
