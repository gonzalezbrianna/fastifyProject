import { getGoodNightMessage } from '../services/goodNightService.js';

export async function goodNightHandler(request, reply) {
    const message = await getGoodNightMessage();
    return reply.send({ message });
} 
