import Head from 'next/head';
import { FirstFlow } from '../components/first-page';
import { Toaster } from 'react-hot-toast';

export default function Home() {
	return (
		<div className='text-white'>
			<Head>
				<title>Vittaverse</title>
				<meta name='description' content='Vittaverse' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Toaster position='bottom-right' />
			<main>
				<FirstFlow />
			</main>
		</div>
	);
}