'use client';

import Logo from 'public/first-flow/logo.webm';
import LogoSafari from 'public/first-flow/logo.mp4';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { PopupAccess } from './popup-access';


export const FirstFlow = () => {
	const [password, setPassword] = useState('');
	const router = useRouter();
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [showForm, setShowForm] = useState(true);
	const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => {
		setPassword(event.target.value);
	};

	const handleOpenPopup = () => {
		setIsOpen(true);
	};

	const handleClosePopup = () => {
		setIsOpen(false);
	};

	const handleButtonClick = () => {
		setShowForm(false);
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
					handleButtonClick()
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
		<header className="flex justify-center items-center w-auto pb-10 sm:pb-0 h-screen sm:h-auto lg:h-screen bg-[#080000]">
			<div className='mx-10 flex flex-col items-center'>
				<video ref={videoRef} className='w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]' muted={true} playsInline>
					<source src={Logo} type="video/webm" />
					<source src={LogoSafari} type="video/mp4"/>
				</video>
				{showForm &&
					<form onSubmit={onSubmit} id='form-submit' className="flex flex-col items-center">
						<input
							value={password}
							onChange={handlePasswordChange}
							className='w-[280px] sm:w-[380px] h-[60px] rounded-[10px] px-5 text-black bg-white bg-no-repeat bg-cover focus:outline-none'
							placeholder='Enter password'
						/>
						<button
							type='submit'
							className='btn-primary outline outline-0 w-[280px] sm:w-[380px] h-[60px] mt-2'
						>
							<h4>Let’s start</h4>
						</button>
						<div className='flex flex-col items-center sm:flex-row pt-5'>
							Don&apos;t have a password?{' '}
							<div onClick={handleOpenPopup} className='text-green underline ml-1'>
								Request access
							</div>
						</div>
					</form>
				}
				{isOpen && <PopupAccess onClose={handleClosePopup} />}
			</div>
		</header>
	);
};