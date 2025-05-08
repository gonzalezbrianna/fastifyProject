import { goodNightHandler } from '../controllers/goodNightController.js';

export default async function goodNightRoutes(fastify, options) {
    fastify.get('/goodnight', goodNightHandler);
} 
