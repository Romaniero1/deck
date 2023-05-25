'use client';

import Image from 'next/image';
import Logo from '/public/second-flow/logo.svg';
import { useRef, useState } from 'react';
//import { MutateResult, useMutateLogin } from 'hooks/useMutateLogin';
import { PopupContact } from './popup-contact';
import { Onepagers } from './onepagers-card';
import { Slider } from './slide-card';
import Bg from 'public/second-flow/bg.webm';
import { PopupDisclaimer } from './popup-disclaimer';
import { useRouter } from 'next/navigation';


export const SecondFlow = () => {
	const router = useRouter();
	if (typeof window !== 'undefined') {
		const isPasswordCorrect = localStorage.getItem('isPasswordCorrect');
		isPasswordCorrect === 'true' ? null : router.push('/');
	}
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isOpen, setIsOpen] = useState(false);
	const handleOpenPopup = () => {
		setIsOpen(true);
	};

	const handleClosePopup = () => {
		setIsOpen(false);
	};
	return (
		<>
			<header className="">
				<video ref={videoRef} className='fixed inset-0 w-full h-full object-cover z-[-1]' autoPlay loop muted>
					<source src={Bg} type="video/webm" />
				</video>
				<div className='flex flex-col mx-[120px]'>
					<div className='flex flex-row items-start justify-between pt-10'>
						<div className='flex w-[240px] md:w-[340px]'>
							<Image src={Logo} width={200} height={36} alt='Logo' />
						</div>
						<div className='flex flex-row'>
							<a
								href='https://calendly.com/vittaverse/intro'
								target='_blank'
								rel='noopener noreferrer'
							>
								<button className='w-[184px] h-[48px] bg-green rounded-[8px] text-white hover:bg-darkGreen'>
									<h2>Book a meeting</h2>
								</button>
							</a>
							<PopupContact />
						</div>
					</div>
					<div className='mt-[70px] items-center'>
						<div className='flex justify-center'>
							<Slider />
							<Onepagers />
						</div>
					</div>
				</div>
			</header>
			<footer className='absolute border-t-[1px] w-screen border-white bottom-2 pt-2 border-opacity-50'>
				<div className='flex mx-[120px] justify-between items-end'>
					<h4>
						© Vittaverse 2023
					</h4>
					<button onClick={handleOpenPopup}>
						Disclaimer
					</button>
				</div>
			</footer>
			{isOpen && <PopupDisclaimer onClose={handleClosePopup} />}
		</>
	)
};
