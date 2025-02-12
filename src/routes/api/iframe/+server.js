//API qui vérifie l’authentification de l’utilisateur
// et renvoie les URLs des tableaux de bord.
//Utilise getIframeURLs de schema.js pour récupérer ces URLs.

import { json } from '@sveltejs/kit';
import { getIframeURLs } from '$lib/server/db/schema.js';

export async function GET(event) {
    try {
		  
        if (!event.locals.user) {
            return json({ error: 'Utilisateur non authentifié.' }, { status: 401 });
        }

       
        const iframeURLs = getIframeURLs();
        if (!Array.isArray(iframeURLs) || iframeURLs.some((url) => typeof url !== 'string')) {
            throw new Error('Les URLs des iframes sont invalides.');
        }

        return json({ iframeURLs });
    } catch (error) {
        console.error('Erreur lors de la récupération des URLs:', error.message);
        return json({ error: 'Erreur lors de la récupération des URLs' }, { status: 500 });
    }
}
