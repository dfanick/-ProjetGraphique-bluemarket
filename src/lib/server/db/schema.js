
// import { query } from './index.js'; 

// export const addressQueries = {
//   getTwo: 'SELECT * FROM address LIMIT 2', 
// };


// export async function getTwoAddresses() {
//   try {
//     const res = await query(addressQueries.getTwo); 
//     return res; 
//   } catch (err) {
//     console.error('Erreur lors de la récupération des deux adresses :', err);
//     throw err; 
//   }
// }
// export const coproductQueries = {
// 	getTen: 'SELECT * FROM coproduct LIMIT 10',
// 	getById: 'SELECT * FROM coproduct WHERE id = $1', 
//  };
 
//  export async function getTenCoproducts() {
// 	try {
// 	  const res = await query(coproductQueries.getTen);
// 	  return res;
// 	} catch (err) {
// 	  console.error('Erreur lors de la récupération des dix coproducts :', err);
// 	  throw err;
// 	}
//  }
 
//  export async function getCoproductById(id) {
// 	try {
// 	  const res = await query(coproductQueries.getById, [id]); 
// 	  return res[0]; 
// 	} catch (err) {
// 	  console.error(`Erreur lors de la récupération du coproduct avec l'ID ${id} :`, err);
// 	  throw err;
// 	}
//  }
//  export const categoryQueries = {
// 	getCategories: `
// 	  SELECT id, name 
// 	  FROM category
// 	  ORDER BY name;
// 	`,
//  };
 


//  export async function getCategories() {
// 	try {
// 	  const res = await query(categoryQueries.getCategories);
// 	  return res;
// 	} catch (err) {
// 	  console.error('Erreur lors de la récupération des catégories :', err);
// 	  throw err;
// 	}
//  }



export function getIframeURLs() {
	return [
		'http://localhost:3000/public/question/bc116872-1399-4bc2-8570-52ec30f618e2',
		'http://localhost:3000/public/question/47c93039-1bc1-4b24-842b-09516293e1fd',
  ];
}

