import { trpc } from 'utils/trpc';
import { useEffect, useState } from 'react';
import { LOCAL_STORE_KEY } from './constants';
import { LoginResponse } from 'server/types';

export type MutateResult = LoginResponse | null;

interface UseMutateLoginProps {
	onMutate?: (result: MutateResult) => any;
}

export const useMutateLogin = ({ onMutate }: UseMutateLoginProps) => {
	const loginMutation = trpc.useMutation(['auth.login']);
	const { mutate } = loginMutation;

	const [passwordInput, setPasswordInput] = useState<string | null>(null);

	useEffect(() => {
		if (loginMutation.isLoading || loginMutation.isIdle) return;

		var finalResult: MutateResult | null = null;

		if (
			loginMutation.error !== null ||
			loginMutation.data === undefined ||
			loginMutation.data.data === null
		) {
			//Do nothing for now
			// clearPersistedAuth();
		}

		if (loginMutation.isSuccess && loginMutation.data) {
			if (loginMutation.data.data === null) {
				console.error('loginMutation.data is NULL', loginMutation.data);
			}

			passwordInput !== null && persistAuth(passwordInput);

			finalResult = loginMutation.data;
		}

		onMutate && onMutate(finalResult);
	}, [loginMutation.data, loginMutation.isLoading, loginMutation.error]);

	const clearPersistedAuth = () =>
		window.localStorage.removeItem(LOCAL_STORE_KEY);
	const persistAuth = (secret: string) =>
		window.localStorage.setItem(LOCAL_STORE_KEY, secret);

	const mutateWrapper = (...props: Parameters<typeof mutate>) => {
		setPasswordInput(props[0].password);

		mutate(...props);
	};

	return { mutate: mutateWrapper };
};
