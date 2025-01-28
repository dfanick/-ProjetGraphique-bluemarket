import { fail, redirect } from '@sveltejs/kit';
import { hash, verify } from '@node-rs/argon2';
import * as auth from '$lib/server/auth';
import { query } from '$lib/server/db/index';

export const actions = {
	// Action pour le login
	login: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		// Validation des entrées utilisateur
		if (!validateUsername(username)) {
			return fail(400, { message: "Le format du nom d'utilisateur est invalide." });
		}
		if (!validatePassword(password)) {
			return fail(400, {
				message: 'Le mot de passe doit comporter entre 6 et 255 caractères.',
			});
		}

		// Récupérer l'utilisateur dans la base de données
		const result = await query('SELECT * FROM auth_users WHERE username = $1', [username]);
		const existingUser = result[0];

		if (!existingUser) {
			return fail(400, { message: "Nom d'utilisateur ou mot de passe incorrect." });
		}

		// Vérification du mot de passe
		const validPassword = await verify(existingUser.passwordhash, password);
		if (!validPassword) {
			return fail(400, { message: "Nom d'utilisateur ou mot de passe incorrect." });
		}

		// Création de la session utilisateur
		const sessionToken = auth.generateSessionToken();
		const session = await auth.createSession(sessionToken, existingUser.id);

		// Définir le cookie de session
		auth.setSessionTokenCookie(event, sessionToken, session.sessionExpiresAt);

		// Redirection vers le tableau de bord
		throw redirect(302, '/tableaudebord');
	},

	// Action pour l'inscription
	register: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		// Validation des entrées utilisateur
		if (!validateUsername(username)) {
			return fail(400, { message: "Le format du nom d'utilisateur est invalide." });
		}
		if (!validatePassword(password)) {
			return fail(400, {
				message: 'Le mot de passe doit comporter entre 6 et 255 caractères.',
			});
		}

		// Vérifier si le nom d'utilisateur existe déjà
		const existingUsers = await query('SELECT id FROM auth_users WHERE username = $1', [username]);
		if (existingUsers.length > 0) {
			return fail(400, { message: 'Ce nom d’utilisateur est déjà pris.' });
		}

		// Hachage du mot de passe
		const passwordHash = await hash(password, {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1,
		});

		// Insérer le nouvel utilisateur dans la base de données
		const result = await query(
			'INSERT INTO auth_users (username, passwordhash) VALUES ($1, $2) RETURNING id',
			[username, passwordHash]
		);

		// Création de la session utilisateur
		const userId = result[0].id;
		const sessionToken = auth.generateSessionToken();
		const session = await auth.createSession(sessionToken, userId);

		// Définir le cookie de session
		auth.setSessionTokenCookie(event, sessionToken, session.sessionExpiresAt);

		// Redirection vers le tableau de bord
		throw redirect(302, '/tableaudebord');
	},
};

// Validation du nom d'utilisateur
function validateUsername(username) {
	return (
		typeof username === 'string' &&
		username.length >= 3 &&
		username.length <= 31 &&
		/^[a-z0-9_-]+$/.test(username)
	);
}

// Validation du mot de passe
function validatePassword(password) {
	return typeof password === 'string' && password.length >= 6 && password.length <= 255;
}
