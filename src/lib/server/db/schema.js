
 import { query } from './index.js'; 


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
 
  
export function getIframeURLs() {
	return [
		// 7les produits les plus vendues avec un filtres de periode
		"http://localhost:3000/public/question/e0b1c9b4-f9b4-415f-8d30-cb2eba15b933",
	
		// 4les categories les plus vendus avec un filtres de periode
		"http://localhost:3000/public/question/7b542c7e-21b1-44d4-9fca-8dfe1c8f487c",
		
		//6Les produits les plus vendus, avec leur catégorie, sur une periode
		"http://localhost:3000/public/question/18aac05e-926d-4a17-8065-2a4bdcc84849",

		//1Analyse des Ventes par Secteur d’Activité et par Catégorie de Produit
		"http://localhost:3000/public/question/bc116872-1399-4bc2-8570-52ec30f618e2",
		
		//5Les produits ayant le plus grand nombre d'offres 
		"http://localhost:3000/public/question/26d0e7b5-8f9e-49c6-a593-3dd415bc54aa", 
		
		//2Les 10 vendeurs ayant créé le plus grand nombre d'offres
		"http://localhost:3000/public/question/bda11946-248c-42cb-ac6d-2dacf768ac3b",
		
		//3les vendeurs ayant généré le plus de revenus avec filtres de periode
		"http://localhost:3000/public/question/2cd0b2b1-88f4-4b83-99e9-1e0a5ef87e90", 
		
		//8Les 10 catégories avec le plus de produits associés
		"http://localhost:3000/public/question/47c93039-1bc1-4b24-842b-09516293e1fd",
  ];
}


function validateName(name) {
	if (!name || name.length < 2) {
	  throw new Error('Le nom ou prénom doit contenir au moins 2 caractères.');
	}
 }
 
 function validateEmail(email) {
	if (!email || !email.includes('@') || !email.includes('.')) {
	  throw new Error('L\'adresse email est invalide.');
	}
 }
 
 function validatePhoneNumber(phone) {
	if (phone && (phone.length !== 10 || isNaN(phone))) {
	  throw new Error('Le numéro de téléphone est invalide (10 chiffres requis).');
	}
 }
 
 function validateMessage(message) {
	if (!message || message.length < 10) {
	  throw new Error('Le message doit contenir au moins 10 caractères.');
	}
 }
 
 export const contactQueries = {
	insertContact: `
	  INSERT INTO contact_form (nom, prenom, courriel, numero, message) 
	  VALUES ($1, $2, $3, $4, $5)
	`,
 };
 
 export async function insertContactForm(nom, prenom, courriel, numero, message) {
	try {
	  validateName(nom);
	  validateName(prenom);
	  validateEmail(courriel);
	  validatePhoneNumber(numero);
	  validateMessage(message);
 
	  const res = await query(contactQueries.insertContact, [nom, prenom, courriel, numero, message]);
	  return { success: true, result: res };
	} catch (err) {
	  console.error('Erreur lors de l\'insertion :', err);
	  throw new Error(err.message); // On renvoie un message clair
	}
 }
 