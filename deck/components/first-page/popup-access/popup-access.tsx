'use client';
import { useState } from "react";
import axios from 'axios';
import toast from "react-hot-toast";


interface PopupAccessProps {
    onClose: () => void;
}

export const PopupAccess: React.FC<PopupAccessProps> = ({ onClose }) => {
    const [firm, setFirm] = useState('');
    const [email, setEmail] = useState('');
    const handleFirmChange = (event) => {
        setFirm(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const token = '6082185552:AAHJMc5-ZnPs1qtkuPg9QLus-WdsfBlHd-w';
    const chatId = '257380210';
    const message = "Request from company - " + firm + ","+ " Company email - " + email;


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
            chat_id: chatId,
            text: message
        });
        toast.success('Request sent');
    }

    return (
        <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-fade bg-opacity-80 flex justify-center items-center" onClick={onClose}>
            <div className="relative flex z-20 bg-white w-[520px] h-[285px] p-5 rounded-[20px] justify-center items-start" onClick={(e) => e.stopPropagation()}>
                <div className='flex flex-col w-[328px] text-center'>
                    <h3 className="text-green mb-2">Request access</h3>
                    <p className="text-grey mb-5">Please leave your company name and email for us to get in touch</p>
                    <form onSubmit={handleSubmit} className="flex flex-col items-center">
                        <input
                            value={firm}
                            onChange={handleFirmChange}
                            className='w-[260px] h-[40px] border-[1px] border-opacity-20 border-grey rounded-[8px] px-3 text-black bg-white focus:outline-none'
                            placeholder='Company name'
                        />
                        <input
                            value={email}
                            onChange={handleEmailChange}
                            className='w-[260px] h-[40px] border-[1px] border-opacity-20 border-grey rounded-[8px] px-3 text-black bg-white focus:outline-none mt-1'
                            placeholder='Email'
                        />
                        <button
                            type='submit'
                            className='btn-primary w-[260px] h-12 mt-3'
                        >
                            <h4>Send</h4>
                        </button>
                    </form>
                </div>
                <button
                    onClick={onClose}
                    className='absolute right-4 top-3 text-green text-opacity-100'
                >
                    &#10006;
                </button>
            </div>
        </div>
    )
}