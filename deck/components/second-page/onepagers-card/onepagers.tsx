import { useState } from 'react';
import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';

export const Onepagers = () => {
	const closeModals = () => setOpen(false);
	const [open, setOpen] = useState(false);

	const zoomPluginInstance = zoomPlugin();
	const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;
	const getFilePluginInstance = getFilePlugin();
	const { DownloadButton } = getFilePluginInstance;

	return (
		<div className='flex items-end relative w-full lg:w-1/3 h-[200px] sm:h-[248px] lg:h-auto rounded-[24px] border-[1px] border-light mt-5 lg:mt-0 lg:ml-5 bg-black bg-opacity-50' onClick={() => setOpen(!open)}>
			<div className="flex bg-[url('/second-flow/bg-card/bg.png')] bg-contain bg-bottom bg-no-repeat rounded-b-[24px] h-[85%] w-full">
				<h3 className='absolute top-4 left-4'>
					Roadmap
				</h3>
				<div
					className="absolute top-4 right-4 w-7 h-7 bg-cover bg-[url('/second-flow/link_button_ua.svg')] duration-100 hover:rotate-[40deg]"
				/>
			</div>
					{open &&
						<>
							<div className="flex flex-col fixed inset-0 z-10 bg-black bg-opacity-80 justify-center items-center" onClick={closeModals}  />
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
											<Viewer fileUrl="Roadmap.pdf" defaultScale={SpecialZoomLevel.PageFit} plugins={[zoomPluginInstance, getFilePluginInstance]} theme="dark" />
										</div>
									</div>
								</Worker>
							</div>
						</>
					}
				</div>
	);
};
