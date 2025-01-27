

import { json } from '@sveltejs/kit';
import { insertContactForm } from '$lib/server/db/schema.js';

export async function POST({ request }) {
  try {
    const data = await request.json();
    const { nom, prenom, courriel, numero, message } = data;

    // Appel à la fonction d'insertion qui inclut la validation
    await insertContactForm(nom, prenom, courriel, numero, message);

    return json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('Erreur lors de l\'insertion :', err);
    return json({ success: false, error: err.message || 'Erreur interne du serveur.' }, { status: 400 });
  }
}

