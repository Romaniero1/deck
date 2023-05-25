'use client';

import { SetStateAction, useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export const AdminFlow = () => {
	const router = useRouter();
	const isPasswordCorrect = localStorage.getItem('isPasswordCorrect');
	isPasswordCorrect === 'true' ? null : router.push('/');
	const [pass, setPassword] = useState('');
	const [firm, setFirm] = useState('');
	const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => {
		setPassword(event.target.value);
	};
	const handleFirmChange = (event: { target: { value: SetStateAction<string>; }; }) => {
		setFirm(event.target.value);
	};


	const onSubmit = async (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		const response = await fetch('https://isuxrpuwprutyqgdlmfh.supabase.co/rest/v1/vittaverse', {
			method: 'POST',
			headers: {
				apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdXhycHV3cHJ1dHlxZ2RsbWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1OTcwNjYsImV4cCI6MjAwMDE3MzA2Nn0.CT4oR_aEysJ6A_rycI5afthMWvFTTRrtRf89uQ9i2Xo',
				Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlzdXhycHV3cHJ1dHlxZ2RsbWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1OTcwNjYsImV4cCI6MjAwMDE3MzA2Nn0.CT4oR_aEysJ6A_rycI5afthMWvFTTRrtRf89uQ9i2Xo',
				'Content-Type': 'application/json',
				Prefer: 'return=minimal'
			},
			body: JSON.stringify({ firm, pass }),
		});
		if (response.ok) {
			toast.success('Add firm!');
		} else {
			toast.error('Error!');
		}
	};


	return (
		<header className="flex justify-center items-center w-screen h-screen overflow-hidden bg-[#080000] bg-cover">
			<div className='mx-10 flex flex-col items-center '>
				<form onSubmit={onSubmit} className="flex flex-col items-center">
					<input
						value={firm}
						onChange={handleFirmChange}
						className='w-[380px] h-[60px] rounded-[10px] px-5 text-black bg-white bg-no-repeat bg-cover focus:outline-none'
						placeholder='Company name'
					/>
					<input
						value={pass}
						onChange={handlePasswordChange}
						className='w-[380px] h-[60px] rounded-[10px] px-5 text-black bg-white bg-no-repeat bg-cover focus:outline-none mt-2'
						placeholder='Password'
					/>
					<button
						type='submit'
						className='outline outline-0 w-[380px] h-[60px] mt-2 rounded-[8px] bg-green text-white hover:bg-darkGreen'
					>
						<h2>Add firm</h2>
					</button>
				</form>
			</div>
		</header>
	);
}