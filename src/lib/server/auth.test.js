import { describe, it, expect, } from 'vitest';
import { generateSessionToken, } from './auth';


describe('generateSessionToken', () => {
    it('should generate a valid Base64url token', () => {
        const token = generateSessionToken();
        expect(token).toBeDefined();
        expect(typeof token).toBe("string");
    });
});

