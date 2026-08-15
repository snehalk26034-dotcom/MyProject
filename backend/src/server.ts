import Fastify from "fastify";
import sequelize from "./config/database";
import routes from "./routes";

import "./models/ContactMessage.model";

const fastify = Fastify({
  logger: true,
});

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");

    await sequelize.sync();
    console.log("Database synced successfully");

    await fastify.register(routes);

    await fastify.listen({
      port: Number(process.env.PORT) || 3011,
      host: "0.0.0.0",
    });

    console.log("Server running on port 3011");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

startServer();