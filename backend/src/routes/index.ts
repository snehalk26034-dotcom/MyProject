import { FastifyPluginAsync } from "fastify";
import contactMessageRoutes from "./contactMessage.route";

const routes: FastifyPluginAsync = async (fastify) => {
    fastify.register(contactMessageRoutes, {
        prefix: "/api/v1/contact",
    });
};

export default routes;