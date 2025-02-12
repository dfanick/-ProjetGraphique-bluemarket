import { fail, redirect } from '@sveltejs/kit';
import { hash, verify } from '@node-rs/argon2';
import * as auth from '$lib/server/auth';
import { query } from '$lib/server/db/index';

export const actions = {
	login: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		
		if (!validateUsername(username)) {
			return fail(400, { message: "Le format du nom d'utilisateur est invalide." });
		}
		if (!validatePassword(password)) {
			return fail(400, {
				message: 'Le mot de passe doit comporter entre 6 et 255 caractères.',
			});
		}

		
		const result = await query('SELECT * FROM auth_users WHERE username = $1', [username]);
		const existingUser = result[0];

		if (!existingUser) {
			return fail(400, { message: "Nom d'utilisateur ou mot de passe incorrect." });
		}

		
		const validPassword = await verify(existingUser.passwordhash, password);
		if (!validPassword) {
			return fail(400, { message: "Nom d'utilisateur ou mot de passe incorrect." });
		}

		
		const sessionToken = auth.generateSessionToken();
		const session = await auth.createSession(sessionToken, existingUser.id);

		
		auth.setSessionTokenCookie(event, sessionToken, session.sessionExpiresAt);

		
		throw redirect(302, '/tableaudebord');
	},

	
	register: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username');
		const password = formData.get('password');


		if (!validateUsername(username)) {
			return fail(400, { message: "Le format du nom d'utilisateur est invalide." });
		}
		if (!validatePassword(password)) {
			return fail(400, {
				message: 'Le mot de passe doit comporter entre 6 et 255 caractères.',
			});
		}

		
		const existingUsers = await query('SELECT id FROM auth_users WHERE username = $1', [username]);
		if (existingUsers.length > 0) {
			return fail(400, { message: 'Ce nom d’utilisateur est déjà pris.' });
		}

	
		const passwordHash = await hash(password, {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1,
		});

		
		const result = await query(
			'INSERT INTO auth_users (username, passwordhash) VALUES ($1, $2) RETURNING id',
			[username, passwordHash]
		);

		
		const userId = result[0].id;
		const sessionToken = auth.generateSessionToken();
		const session = await auth.createSession(sessionToken, userId);

		
		auth.setSessionTokenCookie(event, sessionToken, session.sessionExpiresAt);

		
		return {
			success: "Inscription réussie ! Vous pouvez maintenant vous connecter.",};
	},
};


function validateUsername(username) {
	return (
		typeof username === 'string' &&
		username.length >= 3 &&
		username.length <= 31 &&
		/^[a-z0-9_-]+$/.test(username)
	);
}

function validatePassword(password) {
	if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
		 return false;
	}

	
	const hasUpperCase = /[A-Z]/.test(password);
	const hasLowerCase = /[a-z]/.test(password);
	const hasDigit = /[0-9]/.test(password);
	
	return hasUpperCase && hasLowerCase && hasDigit && password.length >= 6;
}

