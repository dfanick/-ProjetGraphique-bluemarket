import { sha256 } from '@oslojs/crypto/sha2';
import { encodeBase64url, encodeHexLowerCase } from '@oslojs/encoding';
import { query } from './db/index';

const DAY_IN_MS = 1000 * 60 * 60 * 24;

export const sessionCookieName = 'auth-session';

export function generateSessionToken() {
	const bytes = crypto.getRandomValues(new Uint8Array(18));
	const token = encodeBase64url(bytes);
	return token;
}

/**
 * @param {string} token
 * @param {string} userId
 */
export async function createSession(token, userId) {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const sessionExpiresAt = new Date(Date.now() + DAY_IN_MS * 30);
	await query(
		'INSERT INTO auth_sessions (userid, session_token, session_expires_at) VALUES ($1, $2, $3)',
		[userId, sessionId, sessionExpiresAt]
	);
	return { token, sessionExpiresAt };
}

/** @param {string} token */
export async function validateSessionToken(token) {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const result = await query('SELECT * FROM auth_sessions WHERE session_token = $1', [sessionId]);
	const session = result[0];

	if (!session) {
		return { session: null, user: null };
	}

	const sessionExpired = Date.now() >= new Date(session.session_expires_at).getTime();
	if (sessionExpired) {
		await query('DELETE FROM auth_sessions WHERE session_token = $1', [sessionId]);
		return { session: null, user: null };
	}

	const renewSession = Date.now() >= new Date(session.session_expires_at).getTime() - DAY_IN_MS * 15;
	if (renewSession) {
		const newExpiresAt = new Date(Date.now() + DAY_IN_MS * 30);
		await query('UPDATE auth_sessions SET session_expires_at = $1 WHERE session_token = $2', [newExpiresAt, sessionId]);
		session.session_expires_at = newExpiresAt;
	}

	const userResult = await query('SELECT id, username FROM auth_users WHERE id = $1', [session.userid]);
	const user = userResult[0];

	return { session, user };
}

/** @param {string} sessionId */
export async function invalidateSession(sessionId) {
	await query('DELETE FROM auth_sessions WHERE session_token = $1', [sessionId]);
}

/**
 * @param {import("@sveltejs/kit").RequestEvent} event
 * @param {string} token
 * @param {Date} expiresAt
 */
export function setSessionTokenCookie(event, token, expiresAt) {
	event.cookies.set(sessionCookieName, token, {
		expires: expiresAt,
		path: '/'
	});
}

/** @param {import("@sveltejs/kit").RequestEvent} event */
export function deleteSessionTokenCookie(event) {
	event.cookies.delete(sessionCookieName, {
		path: '/'
	});
}
