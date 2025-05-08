import helloController from '../controllers/helloController.js';

export default async function helloRoutes(fastify, options) {
  fastify.get('/hello', helloController.sayHello);
}
