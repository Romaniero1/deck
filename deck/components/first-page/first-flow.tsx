'use client';

import Image from 'next/image';
//import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Logo from 'public/first-flow/logo.webm';
//import { trpc } from 'utils/trpc';
import { useEffect, useRef, useState } from 'react';
//import { MutateResult, useMutateLogin } from 'hooks/useMutateLogin';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { PopupAccess } from './popup-access';

interface FormData {
	password: string;
}

export const FirstFlow = () => {
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

	const [password, setPassword] = useState('');
	const router = useRouter();
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	const handlePlay = () => {
		if (videoRef.current) {
			videoRef.current.play();
		}
	}
	const handleClickNewPage = () => {
		if (typeof window !== 'undefined') {
			router.push('/deck');
		}
	};
	const handleOpenPopup = () => {
		setIsOpen(true);
	};

	const handleClosePopup = () => {
		setIsOpen(false);
	};



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
			//body: JSON.stringify({ password }),
		});

		if (response.ok) {
			console.log('OK')
		} else {
			console.log('ERROR')
		}
	};

	return (
		<header className="flex justify-center items-center w-screen h-screen overflow-hidden bg-[#080000] bg-cover">
			<div className='mx-10 flex flex-col items-center '>
				<video ref={videoRef} className='w-[400px] h-[400px]'>
					<source src={Logo} type="video/webm" />
				</video>
				<form onSubmit={onSubmit} className="flex flex-col items-center">
					<input
						value={password}
						onChange={handlePasswordChange}
						className='w-[380px] h-[60px] rounded-[10px] px-5 text-black bg-white bg-no-repeat bg-cover focus:outline-none'
						placeholder='Input your code'
					/>
					<button
						onClick={handleClickNewPage}
						type='submit'
						className='outline outline-0 w-[380px] h-[60px] mt-2 rounded-[8px] bg-green text-white hover:bg-darkGreen'
					>
						<h2>Let’s start</h2>
					</button>
					<p className='pt-5'>
						Don&apos;t have a password?{' '}
						<button onClick={handleOpenPopup} className='text-green underline'>
							Request access
						</button>
					</p>
				</form>
				{isOpen && <PopupAccess onClose={handleClosePopup} />}
			</div>
		</header>
	);
};
