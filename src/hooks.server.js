import * as auth from '$lib/server/auth.js';

export async function handle({ event, resolve }) {
	// Récupération du token de session dans les cookies
	const sessionToken = event.cookies.get(auth.sessionCookieName);

	if (sessionToken) {
		// Valide le token de session et récupère la session et l'utilisateur
		const { session, user } = await auth.validateSessionToken(sessionToken);

		if (session) {
			// Renouvelle la durée du token si la session est valide
			auth.setSessionTokenCookie(event, sessionToken, session.sessionExpiresAt);
		} else {
			// Supprime le cookie si la session est invalide
			auth.deleteSessionTokenCookie(event);
		}

		// Ajoute l'utilisateur ou null à `event.locals.user`
		event.locals.user = user || null;
		event.locals.session = session || null;
	} else {
		// Pas de session : pas d'utilisateur
		event.locals.user = null;
		event.locals.session = null;
	}

	// Continue la requête
	return resolve(event);
}
