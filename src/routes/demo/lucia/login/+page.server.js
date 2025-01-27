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
    try {
      const formData = await event.request.formData();
      const username = formData.get('username');
      const password = formData.get('password');

      
      if (!validateUsername(username)) {
        return fail(400, {
          message: 'Le format du nom d\'utilisateur est invalide.',
        });
      }
      if (!validatePassword(password)) {
        return fail(400, {
          message: 'Le mot de passe doit comporter entre 6 et 255 caractères.',
        });
      }

     
      const result = await query('SELECT * FROM auth_users WHERE username = $1', [username]);
      const existingUser = result.rows[0];
      if (!existingUser) {
        return fail(400, { message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
      }

 
      const validPassword = await verify(existingUser.passwordhash, password);
      if (!validPassword) {
        return fail(400, { message: 'Nom d\'utilisateur ou mot de passe incorrect.' });
      }

    
      const sessionToken = auth.generateSessionToken();
      const session = await auth.createSession(sessionToken, existingUser.id);
      auth.setSessionTokenCookie(event, sessionToken, session.sessionExpiresAt);

      
      throw redirect(302, '/');
    } catch (error) {
      console.error('Erreur de connexion:', error);
      return fail(500, { message: 'Une erreur imprévu est survenue pendant la connexion.' });
    }
  },

  /** Inscription */
  register: async (event) => {
    try {
      const formData = await event.request.formData();
      const username = formData.get('username');
      const password = formData.get('password');

      // Validation des entrées utilisateur
      if (!validateUsername(username)) {
        return fail(400, {
          message: 'Le format du nom d\'utilisateur est invalide.',
        });
      }
      if (!validatePassword(password)) {
        return fail(400, {
          message: 'Le mot de passe doit comporter entre 6 et 255 caractères.',
        });
      }

      // Hachage du mot de passe
      const passwordHash = await hash(password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
      });

      // Insérer un nouvel utilisateur dans la base de données
      const result = await query(
        'INSERT INTO auth_users (username, passwordhash) VALUES ($1, $2) RETURNING id',
        [username, passwordHash]
      );

      // Création de la session pour l'utilisateur inscrit
      const userId = result.rows[0].id;
      const sessionToken = auth.generateSessionToken();
      const session = await auth.createSession(sessionToken, userId);
      auth.setSessionTokenCookie(event, sessionToken, session.sessionExpiresAt);

      // Redirection vers la page d'accueil après une inscription réussie
      throw redirect(302, '/');
    } catch (error) {
      console.error('Erreur d\'inscription:', error);
      return fail(500, { message: 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.' });
    }
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
