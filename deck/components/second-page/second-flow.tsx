'use client';

import Image from 'next/image';
import Logo from '/public/second-flow/logo.svg';
import { useEffect, useRef, useState } from 'react';
//import { MutateResult, useMutateLogin } from 'hooks/useMutateLogin';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { PopupContact } from './popup-contact';
import { Onepagers } from './onepagers-card';
import { Slider } from './slide-card';

const pdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

const openPdf = () => {
  window.open(pdfUrl, '_blank');
};

export const SecondFlow = () => {
	return (
		<header className="bg-black">
			<div className='flex flex-col mx-[120px]'>
				<div className='flex flex-row items-start justify-between pt-10'>
					<div className='flex w-[240px] md:w-[340px]'>
						<Image src={Logo} width={200} height={36} alt='Logo' />
					</div>
					<div className='flex flex-row'>
						<a
							href='https://calendly.com/tinyverse-studios/tvs-intro-call'
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
				<div className='flex flex-col lg:flex-row mt-10 sm:mt-8 xl:mt-[30px]'>
					<div className='flex flex-col items-center '>
						<div className="flex items-center justify-center h-screen">
							<div className="w-full max-w-2xl">
								<Slider pdfUrl={pdfUrl} />
								<div className="text-center mt-4">
									<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openPdf}>
										Open PDF
									</button>
								</div>
							</div>
						</div>

						{/* <Slider /> */}
						{/* <Onepagers /> */}
					</div>
				</div>
			</div>
		</header>

	)
};
