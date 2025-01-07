
import { getTwoAddresses } from '$lib/server/db/schema.js'; 


export async function GET() {
  try {
    console.log('Requête GET reçue pour récupérer deux adresses');
    
    const addresses = await getTwoAddresses(); 
    console.log('Adresses récupérées :', addresses);
    
    return new Response(JSON.stringify(addresses), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Erreur lors de la récupération des adresses :', err);
    return new Response(JSON.stringify({ error: 'Erreur serveur' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

