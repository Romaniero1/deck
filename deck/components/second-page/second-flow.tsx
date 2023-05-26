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
			<header>
				<video ref={videoRef} className='fixed inset-0 w-full h-full object-cover z-[-1]' autoPlay loop muted>
					<source src={Bg} type="video/webm" />
				</video>
				<div className='flex flex-col mx-[17px] sm:mx-[33px] xl:mx-[120px]'>
					<div className='flex flex-col md:flex-row items-start justify-between pt-10'>
						<div className='flex w-[240px] md:w-[340px]'>
							<Image src={Logo} width={200} height={36} alt='Logo' />
						</div>
						<div className='flex w-full md:w-auto flex-col sm:flex-row mt-10 md:mt-0'>
							<a
								href='https://calendly.com/vittaverse/intro'
								target='_blank'
								rel='noopener noreferrer'
								className='w-full md:w-auto'
							>
								<button className='btn-primary w-full md:w-[184px] h-[48px]'>
									<h4>Book a meeting</h4>
								</button>
							</a>
							<PopupContact />
						</div>
					</div>
					<div className='mt-10 md:mt-[70px] items-center'>
						<div className='flex items-center flex-col lg:flex-row lg:justify-center lg:items-stretch'>
							<Slider />
							<Onepagers />
						</div>
					</div>
				</div>
			</header>
			<footer className='mt-20 md:mt-[180px] border-t-[1px] w-screen border-white pt-2 border-opacity-50'>
				<div className='flex mx-[17px] sm:mx-[33px] xl:mx-[120px] justify-between items-end'>
					<p>
						© Vittaverse 2023
					</p>
					<button onClick={handleOpenPopup}>
						Disclaimer
					</button>
				</div>
			</footer>
			{isOpen && <PopupDisclaimer onClose={handleClosePopup} />}
		</>
	)
};
