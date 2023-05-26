import Onepager from '/public/second-flow/onepager/onepager.png';
//import PrismaZoom from 'react-prismazoom';
import Popup from 'reactjs-popup';
import Image from 'next/image';
import { RefObject, useState } from 'react';
import React from 'react';

export const Onepagers = () => {
	const [openTVop, TVOneP] = useState(false);
	const closeTV = () => TVOneP(false);

	const refZoom: RefObject<any> = React.createRef();

	const zoomIn = () => {
		if (refZoom && refZoom.current && refZoom.current.zoomIn) {
			refZoom.current.zoomIn(refZoom.current.getZoom() + 1);
		}
	};

	const zoomOut = () => {
		if (refZoom && refZoom.current && refZoom.current.zoomOut) {
			refZoom.current.zoomOut(refZoom.current.getZoom() - 1);
		}
	};

	return (
		<div className='flex items-end relative w-full lg:w-1/3 h-[200px] sm:h-[248px] lg:h-auto rounded-[24px] border-[1px] border-light mt-5 lg:mt-0 lg:ml-5 bg-black bg-opacity-50' onClick={() => TVOneP((o) => !o)}>
			<div className="flex bg-[url('/second-flow/bg-card/bg.png')] bg-contain bg-bottom bg-no-repeat rounded-b-[24px] h-[85%] w-full">
				<h3 className='absolute top-4 left-4'>
					Roadmap
				</h3>
				<div
					className="absolute top-4 right-4 w-7 h-7 bg-cover bg-[url('/second-flow/link_button_ua.svg')] duration-100 hover:rotate-[40deg]"
				/>
			</div>
			<Popup open={openTVop} closeOnDocumentClick onClose={closeTV}>
				<div className='flex flex-col items-center'>
					<a
						className='flex flex-col fixed inset-0 w-screen h-screen bg-black bg-opacity-80 justify-center items-center'
						onClick={closeTV}
					/>
					{/* 					<PrismaZoom ref={refZoom}>
						<Image
							src={Onepager}
							width={510}
							height={650}
							alt='Onepager'
							unoptimized
						/>
					</PrismaZoom> */}
					<div className='fixed bottom-[10vh]'>
						<button className='w-10 h-10' onClick={zoomIn}>
							<svg
								className='App-buttonIcon'
								viewBox='0 0 24 24'
								fill='white'
							>
								<path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-9h-3V8a1 1 0 0 0-2 0v3H8a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2z' />
							</svg>
						</button>
						<button className='w-10 h-10' onClick={zoomOut}>
							<svg
								className='App-buttonIcon'
								viewBox='0 0 24 24'
								fill='white'
							>
								<path d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-9H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2z' />
							</svg>
						</button>
					</div>
				</div>
			</Popup>
		</div>
	);
};
