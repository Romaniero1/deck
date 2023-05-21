import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Logo from '/public/first-flow/logo.gif';
import { trpc } from 'utils/trpc';
import { useEffect } from 'react';
import { MutateResult, useMutateLogin } from 'hooks/useMutateLogin';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useState } from 'react';

interface FormData {
	password: string;
}

const MAILTO_LINK =
	'mailto:elmira@tinycolony.io?subject=Request access to Tinyverse Studios';

	export const FirstFlow = () => {
		const [password, setPassword] = useState('');
	  
/* 		const onSubmit = async (event) => {
			event.preventDefault();
		
			// Проверяем, существует ли ресурс на сервере
			const checkResponse = await fetch('https://isuxrpuwprutyqgdlmfh.supabase.co/rest/v1/password', {
			  method: 'GET',
			  headers: {
							apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdXhycHV3cHJ1dHlxZ2RsbWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1OTcwNjYsImV4cCI6MjAwMDE3MzA2Nn0.CT4oR_aEysJ6A_rycI5afthMWvFTTRrtRf89uQ9i2Xo',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdXhycHV3cHJ1dHlxZ2RsbWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1OTcwNjYsImV4cCI6MjAwMDE3MzA2Nn0.CT4oR_aEysJ6A_rycI5afthMWvFTTRrtRf89uQ9i2Xo',
	},
			});
		
			if (checkResponse.ok) {
			  // Ресурс уже существует на сервере
			  // Действия при ошибке создания ресурса
			  console.log('OK?')
			} else if (checkResponse.status === 404) {
			  // Ресурс не существует на сервере
			  // Создаем ресурс
			  const response = await fetch('https://isuxrpuwprutyqgdlmfh.supabase.co/rest/v1/password', {
				method: 'POST',
				headers: {
					apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdXhycHV3cHJ1dHlxZ2RsbWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1OTcwNjYsImV4cCI6MjAwMDE3MzA2Nn0.CT4oR_aEysJ6A_rycI5afthMWvFTTRrtRf89uQ9i2Xo',
					Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdXhycHV3cHJ1dHlxZ2RsbWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1OTcwNjYsImV4cCI6MjAwMDE3MzA2Nn0.CT4oR_aEysJ6A_rycI5afthMWvFTTRrtRf89uQ9i2Xo',
					'Content-Type': 'application/json',
					Prefer: 'return=minimal'
				},
				body: JSON.stringify({ password }),
			  });
		
			  if (response.ok) {
				console.log('OK')
			  } else {
				console.log('Error')
			  }
			} else {
				console.log('Trouble')
			}
		  }; */

		  
 		const onSubmit = async (event) => {
		  event.preventDefault();
	  
		  const response = await fetch('https://isuxrpuwprutyqgdlmfh.supabase.co/rest/v1/password', {
			method: 'POST',
			headers: {
			apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdXhycHV3cHJ1dHlxZ2RsbWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1OTcwNjYsImV4cCI6MjAwMDE3MzA2Nn0.CT4oR_aEysJ6A_rycI5afthMWvFTTRrtRf89uQ9i2Xo',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdXhycHV3cHJ1dHlxZ2RsbWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1OTcwNjYsImV4cCI6MjAwMDE3MzA2Nn0.CT4oR_aEysJ6A_rycI5afthMWvFTTRrtRf89uQ9i2Xo',
			'Content-Type': 'application/json',
			Prefer: 'return=minimal'
			},
			body: JSON.stringify({ password }),
		  });
	  
		  if (response.ok) {
			console.log('OK')
		  } else {
			console.log('ERROR')
		  }
		};
	  
		const handlePasswordChange = (event) => {
		  setPassword(event.target.value);
		};

		
/* export const FirstFlow = () => {
	const { register, handleSubmit } = useForm<FormData>();
 	const router = useRouter();
	const [submittedPassword, setSubmittedPassword] = useState<string | null>(
		null
	);

	const onMutate = (result: MutateResult) => {
		if (result?.data && result?.data?.firm === 'TC Internal Team') {
			console.log('result is Hello', result);
			toast.error('Invalid password');
			result && router.push('/admin');
		}
		if (result === undefined || result === null || !result.valid) {
			//TODO: Add hot toast for failure notification

			console.log('result is INVALID', result);

			toast.error('Invalid password');

			return;
		}

		console.log('result is VALID', result);

		toast.success('Success!');
		result && router.push('/main');
	};

	const { mutate } = useMutateLogin({
		onMutate,
	});

	const onSubmit = handleSubmit((data) => {
		mutate(data);
	}); */

	return (
		<header className="flex justify-center items-center w-screen h-screen overflow-hidden bg-[url('/first-flow/bg.png')] bg-cover">
			<div className='mx-10 flex flex-col items-center '>
				<Image src={Logo} width={600} height={250} alt='Logo' />
				<form onSubmit={onSubmit} className="flex flex-col items-center">
          <input
            value={password}
            onChange={handlePasswordChange}

						className='w-[280px] sm:w-[340px] h-[60px] rounded-[10px] px-4 text-black bg-white bg-no-repeat bg-cover focus:outline-none'
						placeholder='Input your code'
					/>
					<p className='pt-2'>
						Don&apos;t have a password?{' '}
						<a href={MAILTO_LINK} className='text-[#C57CFF]'>
							Request access
						</a>
					</p>
					<button
						type='submit'
						className='outline outline-0 w-[235px] h-[60px] mt-10 rounded-[16px] bg-purple text-white hover:bg-white hover:text-purple active:outline-white active:outline-4'
					>
						<h2>Let’s go</h2>
					</button>
				</form>
			</div>
		</header>
	);
};

