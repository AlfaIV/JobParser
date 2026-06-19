import { createHash } from 'crypto';

export const generateId = (text: string) =>
    createHash('sha256')
        .update(text)
        .digest('base64')
        .replace(/[^a-zA-Z0-9]/g, '')
        .substring(0, 22);
