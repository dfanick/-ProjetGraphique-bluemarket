import { hash, verify } from '@node-rs/argon2';
import { fail, redirect } from '@sveltejs/kit';
import { query } from '$lib/server/db/index'; 
import * as auth from '$lib/server/auth'; 

export const load = async (event) => {
  
  if (event.locals.user) {
    throw redirect(302, '/');
  }
  return {};
};

export const actions = {
	login: async (event) => {
		 // Récupération des données du formulaire
		 const formData = await event.request.formData();
		 const username = formData.get('username');
		 const password = formData.get('password');

		 // Validation des champs
		 if (!validateUsername(username)) {
			  return fail(400, {
					message: "Le format du nom d'utilisateur est invalide."
			  });
		 }
		 if (!validatePassword(password)) {
			  return fail(400, {
					message: 'Le mot de passe doit comporter entre 6 et 255 caractères.'
			  });
		 }

		 // Vérification de l'utilisateur dans la base de données
		 const result = await query('SELECT * FROM auth_users WHERE username = $1', [username]);
		 const existingUser = result[0];

		 // Si l'utilisateur n'existe pas, retournez un message d'erreur
		 if (!existingUser) {
			  return fail(400, { message: "Nom d'utilisateur ou mot de passe incorrect." });
		 }
		 console.log('Stored password hash:', existingUser.passwordhash);

		 // Vérification du mot de passe
		 const validPassword = await verify(password, existingUser.passwordhas);
		 if (!validPassword) {
			  return fail(400, { message: "Nom d'utilisateur ou mot de passe incorrect." });
		 }

		 // Générer un token de session
		 const sessionToken = auth.generateSessionToken();
		 const session = await auth.createSession(sessionToken, existingUser.id);

		 // Sauvegarder le cookie de session
		 auth.setSessionTokenCookie(event, sessionToken, session.sessionExpiresAt);

		 // Redirection vers la page d'accueil après la connexion
		 return redirect(302, '/tableaudebord');
	},

	register: async (event) => {
		const formData = await event.request.formData();
		const username = formData.get('username');
		const password = formData.get('password');

		if (!validateUsername(username)) {
			return fail(400, {
				message: "Le format du nom d'utilisateur est invalide."
			});
		}
		if (!validatePassword(password)) {
			return fail(400, {
				message: 'Le mot de passe doit comporter entre 6 et 255 caractères.'
			});
		}

		const passwordHash = await hash(password, {
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});

		const result = await query(
			'INSERT INTO auth_users (username, passwordhash) VALUES ($1, $2) RETURNING id',
			[username, passwordHash]
		);

		const userId = result[0].id;
		const sessionToken = auth.generateSessionToken();
		const session = await auth.createSession(sessionToken, userId);
		auth.setSessionTokenCookie(event, sessionToken, session.sessionExpiresAt);

		return redirect(302, '/');
	}
};


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
