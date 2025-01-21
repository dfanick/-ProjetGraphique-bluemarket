import { json } from '@sveltejs/kit';
import { insertContactForm } from '$lib/server/db/schema.js';
export async function POST({ request }) {
  try {
    const data = await request.json();
    const { nom, prenom, courriel, numero, message } = data;

    // Appel à la fonction d'insertion qui inclut la validation
    const result = await insertContactForm(nom, prenom, courriel, numero, message);

    if (result.success) {
      return json({ success: true }, { status: 200 });
    } else {
      return json({ error: 'Une erreur est survenue lors de l\'insertion.' }, { status: 500 });
    }
  } catch (err) {
    console.error('Erreur lors de la gestion du formulaire de contact :', err);
    return json({ error: err.message || 'Erreur interne du serveur.' }, { status: 500 });
  }
}
