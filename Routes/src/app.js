import Fastify from 'fastify';
import { greetingHandler } from './controllers/greetingController.js';
import { goodNightHandler } from './controllers/goodNightController.js';

const fastify = Fastify({ logger: true });

// Routes
fastify.get('/greeting', greetingHandler);
fastify.get('/goodnight', goodNightHandler);

// Start server
fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
}); 
