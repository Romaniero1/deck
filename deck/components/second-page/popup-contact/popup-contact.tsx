'use client';

import Image from 'next/image';
import Popup from 'reactjs-popup';
import Telegram from '/public/second-flow/telegram.svg';
import Mail from '/public/second-flow/mail.svg';

export const PopupContact = () => {
    return (
        <Popup
            trigger={
                <button className='btn-secondary w-full md:w-[184px] h-[48px] mt-2 sm:mt-0 sm:ml-5'>
                    <h4>Contact us</h4>
                </button>
            }
            position='bottom center'
            closeOnDocumentClick
        >
            <div className='w-[235px] h-[135px] bg-white text-black rounded-[24px] p-5 text-purple'>
                <h4 className=''>Ash Shirazi - COO</h4>
                <div className='flex flex-col pt-3 space-y-3'>
                    <div className='flex items-center space-x-3'>
                        <Image
                            src={Mail}
                            width={24}
                            height={24}
                            layout='fixed'
                            alt='image'
                        />
                        <a href='mailto:ash@vittaverse.com'>
                            <h5>ash@vittaverse.com</h5>
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
                        <a href='https://t.me/AshShz'>
                            <h5>@AshShz</h5>
                        </a>
                    </div>
                </div>
            </div>
        </Popup>
    )
}