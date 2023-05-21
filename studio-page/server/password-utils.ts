import { SecretFlatfileItem, SecretMap } from './types';
import * as crypto from 'crypto';

export const validatePassword = (
	secrets: SecretMap,
	password: string
): SecretFlatfileItem | undefined => {
	const hashedPassword = crypto
		.createHash('sha256')
		.update(password)
		.digest('hex');
		

	return secrets.get(hashedPassword);
	
};
