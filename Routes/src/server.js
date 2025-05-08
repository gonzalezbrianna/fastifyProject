import Fastify from 'fastify';
import helloRoutes from './routes/helloRoutes.js';
import goodNightRoutes from './routes/goodNightRoutes.js';

const fastify = Fastify({ logger: true });

// Register routes
fastify.register(helloRoutes, { prefix: '/api' });
fastify.register(goodNightRoutes, { prefix: '/api' });

// Start server
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server running at ${address}`);
});
