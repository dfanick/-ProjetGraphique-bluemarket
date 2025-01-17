
import { getTenCoproducts } from '$lib/server/db/schema.js'; // Importer la fonction depuis schema.js

export async function GET() {
  try {
    console.log('Requête GET reçue pour récupérer dix coproducts');
    
    const coproducts = await getTenCoproducts(); // Appel à la fonction qui récupère 10 coproducts depuis la DB
    console.log('Coproducts récupérés :', coproducts);
    
    return new Response(JSON.stringify(coproducts), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Erreur lors de la récupération des coproducts :', err);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
