import * as auth from '$lib/server/auth.js';

export async function handle({ event, resolve }) {
	
	const sessionToken = event.cookies.get(auth.sessionCookieName);

	if (sessionToken) {
		const { session, user } = await auth.validateSessionToken(sessionToken);
		if (session) {
			auth.setSessionTokenCookie(event, sessionToken, session.sessionExpiresAt);
		} else {
			auth.deleteSessionTokenCookie(event);
		}
		event.locals.user = user || null;
		event.locals.session = session || null;
	} else {
		
		event.locals.user = null;
		event.locals.session = null;
	}
	return resolve(event);
}
