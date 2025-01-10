
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
export const coproductQueries = {
	getTen: 'SELECT * FROM coproduct LIMIT 10',
	getById: 'SELECT * FROM coproduct WHERE id = $1', 
 };
 
 export async function getTenCoproducts() {
	try {
	  const res = await query(coproductQueries.getTen);
	  return res;
	} catch (err) {
	  console.error('Erreur lors de la récupération des dix coproducts :', err);
	  throw err;
	}
 }
 
 export async function getCoproductById(id) {
	try {
	  const res = await query(coproductQueries.getById, [id]); 
	  return res[0]; 
	} catch (err) {
	  console.error(`Erreur lors de la récupération du coproduct avec l'ID ${id} :`, err);
	  throw err;
	}
 }
 
