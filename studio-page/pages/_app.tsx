import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AppType } from 'next/dist/shared/lib/utils';
import { withTRPC } from '@trpc/next';
import { AppRouter } from 'server/routers/app';
// import 'core-js/full';

/* TRPC Setup */
//RE: https://github.dev/nexxeln/trpc-nextjs
const getBaseUrl = () => {
	if (process.env.NODE_ENV !== 'production')
		return `http://localhost:${process.env.PORT ?? 3002}`;

	return `https://www.tinyversestudios.com`;
};

const withTRPCSetup = withTRPC<AppRouter>({
	config: ({ ctx }) => ({
		url: `${getBaseUrl()}/api/trpc`,
	}),
	ssr: false,
});
/*---*/

/* Observatibility software */
//export { reportWebVitals } from 'next-axiom';
/*---*/

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default withTRPCSetup(MyApp);
