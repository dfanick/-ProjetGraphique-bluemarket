// src/routes/api/categories.js
import { getCategories } from '$lib/server/db/schema.js'; // Importer la fonction getCategories

export async function GET() {
  try {
    console.log('Requête GET reçue pour récupérer les catégories');

    const categories = await getCategories(); // Appel à la fonction qui récupère les catégories depuis la base de données
    console.log('Catégories récupérées :', categories);

    return new Response(JSON.stringify(categories), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Erreur lors de la récupération des catégories :', err);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
