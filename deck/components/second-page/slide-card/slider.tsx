import { Slide } from 'react-slideshow-image';

import Image from 'next/image';
import { useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';

import Picture1 from '/public/second-flow/slider/1.jpg';
import Picture2 from '/public/second-flow/slider/2.jpg';
import Picture3 from '/public/second-flow/slider/3.jpg';
import Picture4 from '/public/second-flow/slider/4.jpg';
import Picture5 from '/public/second-flow/slider/5.jpg';
import Picture6 from '/public/second-flow/slider/6.jpg';
import Picture7 from '/public/second-flow/slider/7.jpg';
import Picture8 from '/public/second-flow/slider/8.jpg';
import Picture9 from '/public/second-flow/slider/9.jpg';
import Picture10 from '/public/second-flow/slider/10.jpg';
import Picture11 from '/public/second-flow/slider/11.jpg';
import Picture12 from '/public/second-flow/slider/12.jpg';
import Picture13 from '/public/second-flow/slider/13.jpg';
import Picture14 from '/public/second-flow/slider/14.jpg';
import Picture15 from '/public/second-flow/slider/15.jpg';
import Picture16 from '/public/second-flow/slider/16.jpg';

export const Slider = () => {
	const slideImages = [Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, Picture7, Picture8, Picture9, Picture10,
		Picture11, Picture12, Picture13, Picture14, Picture15, Picture16
	];
	const buttonStyle = {
		width: "15px",
		background: 'none',
		border: '0px',
		fill: "white",
		margin: '10px',
	};
	const properties = {
		duration: 3500,
		autoplay: true,
		transitionDuration: 1200,
		arrows: true,
		infinite: true,
		easing: "ease",
		nextArrow: <button className='hover:scale-[1.2]' style={{ ...buttonStyle }}><svg className='hover:fill-[#E4E3E3]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14"> <path d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z" /></svg></button>,
		prevArrow: <button className='rotate-180 hover:scale-[1.2]' style={{ ...buttonStyle }}><svg className='hover:fill-[#E4E3E3]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14"> <path d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z" /></svg></button>
	};
	const closeModal = () => setOpen(false);
	const [open, setOpen] = useState(false);

	const zoomPluginInstance = zoomPlugin();
	const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;
	const getFilePluginInstance = getFilePlugin();
	const { DownloadButton } = getFilePluginInstance;

	return (
		<div className='w-full lg:w-2/3 rounded-[24px} '>
			<Slide {...properties}>
				{slideImages.map((each, index) => (
					<div key={index} className="each-slide" onClick={() => setOpen(o => !o)}>
						<Image src={each} alt="sample" className='rounded-[24px] border-[1px] border-light lazy' />
					</div>
				))}
			</Slide>
			{open &&
				<>
					<div className="flex flex-col fixed inset-0 z-10 bg-black bg-opacity-80 justify-center items-center" onClick={closeModal} />
					<div className="flex flex-col fixed top-[10%] z-30 left-[10%] w-[80%] h-[75%] bg-black bg-opacity-80 justify-center items-center">
						<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js">
							<div
								className="rpv-core__viewer"
								style={{
									border: '1px solid rgba(0, 0, 0, 0.3)',
									display: 'flex',
									flexDirection: 'column',
									height: '100%',
									width: '100%',

								}}
							>
								<div
									style={{
										alignItems: 'center',
										backgroundColor: '#eeeeee',
										borderBottom: '1px solid rgba(0, 0, 0, 1)',
										display: 'flex',
										justifyContent: 'center',
										padding: '4px',
									}}
								>
									<ZoomOutButton />
									<ZoomPopover />
									<ZoomInButton />
									<DownloadButton />
								</div>
								<div
									style={{
										flex: 1,
										overflow: 'hidden',
									}}
								>
									<Viewer fileUrl="Deck.pdf" defaultScale={SpecialZoomLevel.PageFit} plugins={[zoomPluginInstance, getFilePluginInstance]} theme="dark" />
								</div>
							</div>
						</Worker>
					</div>
				</>
			}
		</div>
	)
}