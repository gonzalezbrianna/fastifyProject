import { fetchGoodNight } from '../datastores/mockStore.js';

export async function getGoodNightMessage() {
    return await fetchGoodNight();
} 
