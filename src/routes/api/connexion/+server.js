
import { json } from '@sveltejs/kit';
import * as auth from '$lib/server/auth.js';
import { db } from '$lib/server/db';

export async function POST({ request, cookies }) {
	const { username, password } = await request.json();

	
	const result = await db.query('SELECT * FROM users_sessions WHERE username = $1 AND password = $2', [username, password]);
	const user = result.rows[0];

	if (!user) {
		return json({ error: 'Nom d\'utilisateur ou mot de passe incorrect' }, { status: 401 });
	}

	const token = auth.generateSessionToken();
	const session = await auth.createSession(token, user.id);
	auth.setSessionTokenCookie(cookies, token, session.sessionExpiresAt);

	return json({ message: 'Connexion réussie' });
}
