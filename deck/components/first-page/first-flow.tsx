'use client';

import Logo from 'public/first-flow/logo.webm';
//import { trpc } from 'utils/trpc';
import { SetStateAction, useEffect, useRef, useState } from 'react';
//import { MutateResult, useMutateLogin } from 'hooks/useMutateLogin';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { PopupAccess } from './popup-access';


export const FirstFlow = () => {
	const [password, setPassword] = useState('');
	const router = useRouter();
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => {
		setPassword(event.target.value);
	};

	const handleOpenPopup = () => {
		setIsOpen(true);
	};

	const handleClosePopup = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		const handleVideoEnd = () => {
		  router.push('/deck');
		};
		if (videoRef.current) {
		  videoRef.current.addEventListener('ended', handleVideoEnd);
		}

		return () => {
		  if (videoRef.current) {
			videoRef.current.removeEventListener('ended', handleVideoEnd);
		  }
		};
	  }, []);

	  
	const onSubmit = async (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		const response = await fetch('https://isuxrpuwprutyqgdlmfh.supabase.co/rest/v1/vittaverse?select=pass', {
		  method: 'GET',
		  headers: {
			apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdXhycHV3cHJ1dHlxZ2RsbWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1OTcwNjYsImV4cCI6MjAwMDE3MzA2Nn0.CT4oR_aEysJ6A_rycI5afthMWvFTTRrtRf89uQ9i2Xo',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdXhycHV3cHJ1dHlxZ2RsbWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1OTcwNjYsImV4cCI6MjAwMDE3MzA2Nn0.CT4oR_aEysJ6A_rycI5afthMWvFTTRrtRf89uQ9i2Xo',
			'Content-Type': 'application/json',
			Prefer: 'return=minimal'
		  },
		});
	  
		if (response.ok) {
			const passwords = await response.json();
			console.log(response);
			const match = passwords.find((p: { pass: string; }) => p.pass === password);
			if (match) {
			  console.log('Password matched!');
			  if (match.pass === 'admin') {
				localStorage.setItem('isPasswordCorrect', 'true');
				toast.success('Hey Ash!');
				window.addEventListener('beforeunload', () => {
				  console.log('1 second pause');
				  return null;
				});
				setTimeout(() => {
				  window.removeEventListener('beforeunload', () => {
					console.log('beforeunload event listener removed');
				  });
				  router.push('/admin');
				}, 1000);
			  } else {
				localStorage.setItem('isPasswordCorrect', 'true');
				toast.success('Success!');
				if (videoRef.current) {
					videoRef.current.style.display = 'block';
					videoRef.current.play();
				  }
			  }
		  
			} else {
			  console.log('Password not found!');
			  localStorage.setItem('isPasswordCorrect', 'false');
			  toast.error('Invalid password!');
			}
		  } else {
			console.log('Error fetching passwords!');
			localStorage.setItem('isPasswordCorrect', 'false');
			toast.error('Error fetching passwords!');
		  }
		}; 
		

	return (
		<header className="flex justify-center items-center w-screen h-screen overflow-hidden bg-[#080000] bg-cover">
			<div className='mx-10 flex flex-col items-center '>
			<video ref={videoRef} className='w-[400px] h-[400px]' muted>
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
						//onClick={handleClickNewPage}
						type='submit'
						className='outline outline-0 w-[380px] h-[60px] mt-2 rounded-[8px] bg-green text-white hover:bg-darkGreen'
					>
						<h2>Let’s start</h2>
					</button>
				</form>
				<p className='pt-5'>
						Don&apos;t have a password?{' '}
						<button onClick={handleOpenPopup} className='text-green underline'>
							Request access
						</button>
					</p>
				{isOpen && <PopupAccess onClose={handleClosePopup} />}
			</div>
		</header>
	);
};