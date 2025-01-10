import { getCoproductById } from '$lib/server/db/schema.js';

export async function GET({ params }) {
  const { id } = params; 

  try {
    console.log(`Requête GET reçue pour récupérer le coproduct avec l'ID : ${id}`);
    
    const coproduct = await getCoproductById(id); 
    if (!coproduct) {
      return new Response(JSON.stringify({ error: 'Coproduct non trouvé' }), { status: 404 });
    }
    
    return new Response(JSON.stringify(coproduct), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Erreur lors de la récupération du coproduct :', err);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
