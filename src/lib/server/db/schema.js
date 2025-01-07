
import { query } from './index.js'; 

export const addressQueries = {
  getTwo: 'SELECT * FROM address LIMIT 2', 
};


export async function getTwoAddresses() {
  try {
    const res = await query(addressQueries.getTwo); 
    return res; 
  } catch (err) {
    console.error('Erreur lors de la récupération des deux adresses :', err);
    throw err; 
  }
}
