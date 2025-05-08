import helloService from '../services/helloService.js';

const sayHello = async (request, reply) => {
  const message = await helloService.getHelloMessage();
  reply.send({ success: true, message });
};

export default { sayHello };
