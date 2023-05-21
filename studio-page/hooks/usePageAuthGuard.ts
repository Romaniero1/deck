import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { SECRETS } from 'server/secrets';
import { SecretFlatfileItem } from 'server/types';
import { FALLBACK_URL, LOCAL_STORE_KEY } from './constants';
import { generateChallenge } from '@tinycolony/shared-lib';

export const usePageAuthGuard = () => {
	const router = useRouter();

	useEffect(() => {
		const authId = localStorage.getItem(LOCAL_STORE_KEY);

		if (authId === null) {
			router.push(FALLBACK_URL);

			return;
		}
	}, []);
};
