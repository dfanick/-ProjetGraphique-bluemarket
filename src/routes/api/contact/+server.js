import { json } from '@sveltejs/kit';

export async function POST({ request }) {
  try {
    const data = await request.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return json({ error: 'Tous les champs sont requis.' }, { status: 400 });
    }

    // Ici, vous pouvez traiter les données, comme les enregistrer dans une base de données
    console.log('Formulaire reçu:', { name, email, message });

    return json({ success: true }, { status: 200 });
  } catch (e) {
    return json({ error: 'Erreur interne du serveur.' }, { status: 500 });
  }
}
