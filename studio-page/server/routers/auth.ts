import { z } from 'zod';

import { createRouter } from '../create-router';
import { LoginResponse } from '../types';
import { validatePassword } from '../password-utils';
import { SECRETS } from '../secrets';

export const authRouter = createRouter().mutation('login', {
	input: z.object({
		password: z.string(),
	}),
	async resolve({ input }): Promise<LoginResponse> {
		const validRes = validatePassword(SECRETS, input.password);

		return { valid: validRes !== undefined, data: validRes ?? null };
	},
});
