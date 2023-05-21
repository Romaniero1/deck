import {
	faDiscord,
	faTwitter,
	faInstagram,
	faMediumM,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import 'react-slideshow-image/dist/styles.css';
import Logo from '/public/second-flow/logo.png';
import { Onepagers } from './onepagers-card/onepagers';
import { Slider } from './slide-card';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import Telegram from '/public/second-flow/telegram.svg';
import Mail from '/public/second-flow/mail.svg';
import Web from '/public/second-flow/website.svg';
import { CONSTANTS } from './constants';

export const SecondFlow = () => {
	const [openMM, setMM] = useState(false);
	const closeMM = () => setMM(false);
	const [openGP, setGP] = useState(false);
	const closeGP = () => setGP(false);
	const [openDiscl, setDiscl] = useState(false);
	const closeDiscl = () => setDiscl(false);

	return (
		<header className="w-screen xl:min-h-screen bg-[url('/first-flow/bg.png')] bg-scroll sm:bg-cover">
			<div className='flex flex-col items-center mx-[120px] lg:pb-10'>
				<div className='flex flex-col lg:flex-row items-center md:items-start lg:items-center xl:space-x-[100px] pt-[30px]'>
					<div className='flex flex-col sm:flex-row sm:items-start md:items-end'>
						<div className='flex w-[240px] md:w-[340px] xl:w-full'>
							<Image src={Logo} width={600} height={60} alt='Logo' />
						</div>
						<button
							onClick={() => setDiscl((o) => !o)}
							className='underline mt-5 sm:mt-0 sm:ml-8 lg:mr-5 xl:mb-1 xl:pl-10'
						>
							<h4>Disclaimer</h4>
						</button>
					</div>
					<Popup open={openDiscl} closeOnDocumentClick onClose={closeDiscl}>
						<div
							className='flex flex-col fixed inset-0 w-screen h-screen bg-black bg-opacity-80 justify-center items-center'
							onClick={closeDiscl}
						>
							<div className='overscroll-auto overflow-y-scroll md:w-[60%] h-[80%] w-[80%] p-4 bg-white rounded-[20px]'>
								<h1 className='text-[#7803D5] font-bold'>
									By sending the password you agree to the rules
								</h1>
								<div className='overscroll-auto overflow-y-scroll'>
									<h3 className='mt-5 pr-5 overscroll-auto overflow-y-scroll'>
										No securities regulatory authority or regulator in Canada
										has assessed the merits of the Company’s securities or
										reviewed the contents of this website or the slide-deck
										presentation on this website. Any representation to the
										contrary is an offence. This is a risky investment. You will
										be restricted from selling your securities for an indefinite
										period. The securities do not trade on any exchange or
										market. There is no minimum in the Company’s offering. You
										may be the only purchaser. Funds available under the
										Company’s offering may not be sufficient to accomplish our
										proposed objectives. You have 2 business days to cancel your
										agreement to purchase the securities. If there is a
										misrepresentation in the contents of this website or in the
										slide-deck presentation on this website, you have the right
										to sue either for damages or to cancel the related
										securities subscription agreement. The securities offered
										pursuant to this presentation will be issued under
										exemptions from the prospectus requirements of the
										securities laws of Canada and the rules, regulations and
										policies thereunder. The securities will be subject to
										certain resale restrictions. Persons who acquire the
										securities pursuant to the content of this website or the
										slide-deck presentation on this website will not have the
										benefit of the review of the material by the securities
										commissions or similar authorities in Canada. Each purchaser
										is advised to consult with their own legal counsel regarding
										the prospectus exemptions of applicable securities laws, the
										consequences of purchasing the securities pursuant to such
										exemptions and the applicable hold periods which will apply
										to the securities. You may lose all of your investment. You
										are advised to consult with your own legal and financial
										advisors as to the complete details of the securities, the
										Company’s offering, this the contents of the website and the
										slide-deck presentation on this website and any related
										securities subscription agreement. The contents of this
										website and the slide-deck presentation on this website
										constitutes an offering of securities only in those
										jurisdictions and to those persons where and to whom they
										may be lawfully offered for sale and therein only by persons
										permitted to sell or issue such securities. This
										presentation is not, and under no circumstances is it to be
										construed as, a prospectus or advertisement or a public
										offering of securities. The securities have not been (nor
										will they be) registered under the US Securities Act of
										1933, as amended or the securities laws of any state of the
										United States and may not be offered or sold in the United
										States or to or for the account or benefit of U.S. persons
										except pursuant to an exemption from such registration. No
										person has been authorized to provide any information or to
										make any representation that is not contained in this
										presentation. Any such information or representation which
										is given or received must not be relied upon. This
										presentation is confidential and intended only for the use
										of those persons to whom it is transmitted in connection
										with the Company’s offering. By their acceptance of this
										presentation, recipients agree that they will not transmit,
										reproduce or make available to anyone, other than their
										professional advisers, the contents of this website and the
										slide-deck presentation on this website or any information
										contained herein. Cautionary Note Regarding Forward-looking
										Statements Forward-looking statements are neither historical
										facts nor assurances of future performance. Instead, they
										are based only on the Company’s current beliefs,
										expectations and assumptions regarding the future of the
										Company’s business, future plans and strategies,
										projections, anticipated events and trends, the economy and
										other future conditions. Because forward-looking statements
										relate to the future, they are subject to inherent
										uncertainties, risks and changes in circumstances that are
										difficult to predict and many of which are outside of the
										Company’s control. Therefore, you should not rely on any of
										these forward-looking statements. Forward-looking statements
										can be identified by words such as: “anticipate”, “intend”,
										“plan”, “goal”, “seek”, “believe”, “project”, “estimate”,
										“expect”, “strategy”, “future”, “likely”, “may”, “should”,
										“will” and similar references to future periods. • the
										ability for the Company to use its technology effectively to
										disrupt the video gaming industry; • the ability of the
										Company to execute on its business strategy; • the
										forecasted size of the global revenues generated from the
										video gaming industry and the expectation of the Company to
										grow, develop and scale sufficiently to capture significant
										market share in such global revenues; • the ability for the
										Company to gain a competitive advantage in the global video
										gaming industry; • the ability of the Company to develop
										their video games in the manner and within the time frame
										currently expected, and the expectation of the Company for
										the proposed user experience on the Company’s platform; • to
										ability of the Company’s platform and the proposed economics
										of the Company’s platform to generate the profitability
										expected or any profitability at all; • the Company’s belief
										that they will have sufficient working capital in hand (or
										will be able to procure working capital sufficient) to fund
										their business operations and technology research and
										development in accordance with the milestones set forth in
										the Company’s roadmap; and • the Company’s strategy and
										timeline for growth, product development, market position
										and financial results. The Company’s actual results and
										financial condition may differ materially from those
										indicated in the forward-looking statements. Therefore, you
										should not rely on any of these forward-looking statements.
										Important factors that could cause the Company’s actual
										results and financial condition to differ materially from
										those indicated in the forward-looking statements include,
										among others, the following: • economic and financial
										conditions, including volatility in interest and exchange
										rates, commodity and equity prices and the value of
										financial assets; • volatility in the capital or credit
										markets; • the impact of securities and video gaming
										regulation on the ability of the Company to continue to
										operate in the manner currently operated or expected to be
										operated or developed; • the adequacy of our working capital
										and other conditions which may affect the Company’s ability
										to achieve the expected growth, product development, market
										position and financial results; • the level of demand and
										financial performance of the global video gaming market, the
										growth of global video gaming industries; • any changes in
										customer demand; • any developments and changes in laws and
										regulations, including increased regulation of the video
										gaming industry through legislative action and revised rules
										and standards applied by the applicable securities and video
										gaming regulators; and • any disruptions to the Company’s
										technology network including computer systems and software,
										as well as natural events such as severe weather, fires,
										floods and earthquakes or man-made or other disruptions of
										our operating systems, structures or equipment. Any
										forward-looking statement made by the Company on this
										website and in the slide-deck presentation on this website
										is based only on information currently available to the
										Company and speaks only as of the date on which it is made.
										Except as required by applicable securities laws, the
										Company undertakes no obligation to publicly update any
										forward-looking statement, whether written or oral, that may
										be made from time to time, whether as a result of new
										information, future developments or otherwise.
									</h3>
								</div>
							</div>
						</div>
					</Popup>
					<div className='flex flex-col sm:flex-row lg:flex-row mt-[50px] sm:mt-8 sm:space-x-12 lg:mt-0 lg:space-x-5'>
						<a
							href='https://calendly.com/tinyverse-studios/tvs-intro-call'
							target='_blank'
							rel='noopener noreferrer'
						>
							<button className='w-[235px] h-[60px] bg-purple rounded-[16px] hover:bg-[#4C0089]'>
								<h2>Book a meeting</h2>
							</button>
						</a>
						<Popup
							trigger={
								<button className='w-[235px] h-[60px] border-white border-[1px] rounded-[16px] mt-4 sm:mt-0 xl:ml-8 hover:text-purple hover:border-0 hover:bg-white'>
									<h2>Contact us</h2>
								</button>
							}
							position='bottom center'
							closeOnDocumentClick
						>
							<div className='w-[235px] h-[135px] bg-white rounded-[24px] p-5 text-purple'>
								<h4 className=''>Arshia Navabi - CEO</h4>
								<div className='flex flex-col pt-3 space-y-1'>
									<div className='flex items-center space-x-3'>
										<Image
											src={Mail}
											width={24}
											height={24}
											layout='fixed'
											alt='image'
										/>
										<a href='mailto:arshia@tinycolony.io'>
											<h5>arshia@tinycolony.io</h5>
										</a>
									</div>
									<div className='flex items-center space-x-3'>
										<Image
											src={Telegram}
											width={24}
											height={24}
											layout='fixed'
											alt='image'
										/>
										<a href='https://t.me/metavabi'>
											<h5>@metavabi</h5>
										</a>
									</div>
								</div>
							</div>
						</Popup>
					</div>
				</div>
				<div className='flex flex-col lg:flex-row mt-10 sm:mt-8 xl:mt-[30px]'>
					<div className='flex flex-col items-center '>
						<Slider />
						<Onepagers />
					</div>
					<div className='flex flex-col sm:flex-row lg:flex-col ml-0 lg:ml-4 mt-[30px] sm:mt-8 lg:mt-0 items-center sm:space-x-[28px] lg:space-x-0 sm:pb-10 lg:pb-0'>
						<div className='flex flex-col w-[272px] md:w-[336px] lg:w-[360px] xl:w-[436px] h-[220px] sm:h-[290px] lg:h-[274px] xl:h-[314px] rounded-[24px] bg-purple bg-opacity-60'>
							<button
								className="flex w-[272px] md:w-[336px] lg:w-[360px] xl:w-[436px] h-[200px] xl:h-[240px] rounded-[24px] sm:rounded-b-none sm:bg-center bg-[url('/second-flow/gameplay(1).gif')] bg-contain sm:bg-cover bg-no-repeat pt-20 justify-center"
								onClick={() => setGP((o) => !o)}
							></button>
							<Popup open={openGP} closeOnDocumentClick onClose={closeGP}>
								<div
									className='flex flex-col fixed inset-0 w-screen h-screen bg-black bg-opacity-80 justify-center items-center'
									onClick={closeGP}
								>
									<iframe
										className='flex h-fit sm:h-[360px] md:h-[420px] xl:h-[463px] w-[272px] sm:w-[576px] md:w-[704px] xl:w-[760px]'
										src={CONSTANTS.tinycolonyVideo}
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowFullScreen
									></iframe>
								</div>
							</Popup>
							<div className='flex justify-between px-4 xl:px-10 items-baseline space-x-6 xl:space-x-10 -mt-8 sm:mt-[28px] lg:mt-[20px] xl:mt-5'>
								<a
									href='https://tinycolony.io'
									target='_blank'
									rel='noreferrer'
									className='hover:scale-[1.2]'
								>
									<Image
										src={Web}
										width={24}
										height={24}
										layout='fixed'
										alt='logo'
									/>
								</a>
								<a
									href='https://discord.com/invite/VjCHsa3WXm'
									target='_blank'
									rel='noreferrer'
									className='fax'
								>
									<FontAwesomeIcon
										icon={faDiscord}
										className='h-7 w-7 hover:scale-[1.2]'
									/>
								</a>
								<a
									href='https://twitter.com/TinyColonyGame'
									target='_blank'
									rel='noreferrer'
									className='fax'
								>
									<FontAwesomeIcon
										icon={faTwitter}
										className='h-7 w-7 hover:scale-[1.2]'
									/>
								</a>
								<a
									href='https://www.instagram.com/tinycolonygame/'
									target='_blank'
									rel='noreferrer'
									className='fax'
								>
									<FontAwesomeIcon
										icon={faInstagram}
										className='h-7 w-7 hover:scale-[1.2]'
									/>
								</a>
								<a
									href='https://medium.com/@TinyColonyGame'
									target='_blank'
									rel='noreferrer'
									className='fax'
								>
									<FontAwesomeIcon
										icon={faMediumM}
										className='h-7 w-7 hover:scale-[1.2]'
									/>
								</a>
							</div>
						</div>
						<div className='flex flex-col pb-10 sm:pb-0'>
							<button
								className="flex flex-col w-[272px] md:w-[336px] lg:w-[360px] xl:w-[436px] h-[200px] xl:h-[240px] rounded-[24px] mt-6 sm:mt-0 lg:mt-6 justify-center text-center bg-cover bg-center bg-[url('/second-flow/whatnext.jpg')]"
								onClick={() => setMM((o) => !o)}
							>
							</button>
							<Popup open={openMM} closeOnDocumentClick onClose={closeMM}>
								<div
									className='flex flex-col fixed inset-0 w-screen h-screen bg-black bg-opacity-80 justify-center items-center'
									onClick={closeMM}
								>
									<iframe
										className='flex h-fit sm:h-[360px] md:h-[420px] xl:h-[463px] w-[272px] sm:w-[576px] md:w-[704px] xl:w-[760px]'
										src={CONSTANTS.mechanizedMayhemVideo}
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowFullScreen
									></iframe>
								</div>
							</Popup>
							<div className='w-[272px] lg:w-[360px] xl:w-[436px] h-[190px] sm:h-[86px] md:w-[336px] xl:h-[182px] rounded-[24px] bg-purple mt-6 sm:mt-1 lg:mt-6 bg-opacity-60'>
								<div className='flex items-center w-[240px] sm:hidden xl:block xl:w-[388px] h-[67px] sm:h-[62px] xl:h-[60px] m-[16px] sm:m-3 xl:mx-6 xl:mt-6 xl:m-0 rounded-[24px] border-[1px] hover:bg-purple'>
									<a
										href={CONSTANTS.youtubeChannel}
										className='px-6 flex flex-1 rounded-[24px] h-full w-full items-center justify-between'
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className='flex flex-row sm:flex-row sm:space-x-2'>
											<h1>More videos</h1>
										</div>
										<div className="flex w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-cover bg-[url('/second-flow/video_button_UA.svg')] hover:bg-[url('/second-flow/video_button_A.svg')]"></div>
									</a>
								</div>
								<div className='flex items-center w-[240px] sm:w-[248px] md:w-[312px] lg:w-[336px] xl:w-[388px] h-[74px] sm:h-[62px] xl:h-[60px] m-[16px] sm:m-3 xl:mx-6 xl:mb-6 xl:mt-4 xl:m-0 rounded-[24px] border-[1px] hover:bg-purple'>
									<a
										href={CONSTANTS.corporateDocuments}
										className='px-6 flex flex-1 rounded-[24px] h-full w-full items-center justify-between'
										target='_blank'
										rel='noopener noreferrer'
									>
										<div className='flex flex-col sm:flex-row sm:space-x-2'>
											<h1 className='sm:leading-[28px]'>Corporate Documents</h1>
										</div>
										<div className="flex w-10 h-10 -ml-[98px] sm:-ml-[82px] md:-ml-[26px] lg:-ml-[2px] sm:w-8 sm:h-8 md:w-10 md:h-10 bg-cover bg-[url('/second-flow/google_button_UA.svg')] hover:bg-[url('/second-flow/google_button_A.svg')]"></div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* 			<div className='flex h-[106px] sm:h-[52px] w-screen justify-center bg-purple bg-opacity-60 '>
				<div className='flex flex-col py-2 sm:py-0 items-center justify-between sm:flex-row w-[272px] sm:w-[576px] md:w-[704px] lg:w-[960px] xl:w-[1200px]'>
					<h4 className='order-1'>(c) Tinyverse studios 2022</h4>
					<a href="https://drive.google.com/drive/folders/1-C8Hy-R4w3_9CI8_sL4IUu8_75YCOIZ3?usp=sharing" className='sm:order-1'>
						<h4 className='pb-4 text-center w-[250px] sm:w-auto sm:pb-0'>Corporate Documents (request access)</h4>
					</a>
				</div>
			</div> */}
		</header>
	);
};
