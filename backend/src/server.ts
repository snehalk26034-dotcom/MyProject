import Fastify from "fastify";
import dotenv from "dotenv";
import sequelize from "./config/database";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = Fastify({
  logger: true,
});

app.register(userRoutes, { prefix: "/api/v1" });

const start = async () => {
  const skipDbCheck = (process.env.SKIP_DB_CHECK ?? "false").trim().toLowerCase() === "true";

  if (!skipDbCheck) {
    try {
      await sequelize.authenticate();
      console.log("Database connected successfully");
      await sequelize.sync({ alter: true });
    } catch (error) {
      console.warn(
        "Database connection failed. The server will still start, but database APIs will not work until the DB credentials are fixed."
      );
      console.warn("Please check your MySQL username/password in the .env file.");
      console.warn((error as Error).message);
    }
  } else {
    console.warn("Skipping MySQL connection check because SKIP_DB_CHECK=true in the .env file.");
  }

  const configuredPort = Number((process.env.PORT ?? "3011").trim()) || 3011;

  const tryListen = async (port: number): Promise<void> => {
    try {
      await app.listen({
        port,
        host: "0.0.0.0",
      });

      console.log(`Server running on http://localhost:${port}`);
    } catch (error: any) {
      if (error?.code === "EADDRINUSE") {
        const nextPort = port + 1;
        console.warn(
          `Port ${port} is already in use. Trying ${nextPort} instead.`
        );
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
