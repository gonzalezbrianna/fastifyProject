import { fetchGreeting } from '../datastores/mockStore.js';

const getHelloMessage = async () => {
  return await fetchGreeting();
};

export default { getHelloMessage };
