// dans quel but est fait ce code 

import { json } from '@sveltejs/kit';
import { getIframeURLs } from '$lib/server/db/schema.js';

export async function GET() {
	try {
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
