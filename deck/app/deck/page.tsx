import Head from 'next/head';
import { SecondFlow } from '../../components/second-page';

export default function Deck() {


	return (
		<div className='text-white overflow-x-hidden'>
			<Head>
				<title>Tinyverse Studios</title>
				<meta name='description' content='Tinyverse Studios' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<main>
				<SecondFlow />
			</main>
		</div>
	);
}
