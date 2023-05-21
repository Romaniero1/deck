import { AdminFlow } from 'components/admin-page';
import { usePageAuthGuard } from 'hooks/usePageAuthGuard';
import Head from 'next/head';


export default function Admin() {
	usePageAuthGuard();

	return (
		<div className='text-white overflow-x-hidden'>
			<Head>
				<title>Tinyverse Studios</title>
				<meta name='description' content='Tinyverse Studios' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<AdminFlow />
			</main>
		</div>
	);
}
