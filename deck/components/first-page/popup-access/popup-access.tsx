interface PopupAccessProps {
    onClose: () => void;
  } 

export const PopupAccess: React.FC<PopupAccessProps> = ({ onClose }) => {
    return (
                <div className="fixed top-0 left-0 z-10 w-screen h-screen bg-fade bg-opacity-80 flex justify-center items-center" onClick={onClose}>
                    <div className="relative flex z-20 bg-white w-[520px] h-[285px] p-5 rounded-[20px] justify-center items-start" onClick={(e) => e.stopPropagation()}>
                        <div className='flex flex-col w-[328px] text-center'>
                            <h2 className="text-green font-bold mb-2">Request access</h2>
                            <p className="text-grey mb-5">Please leave your company name and email for us to get in touch</p>
                            <form /* onSubmit={onSubmit} */ className="flex flex-col items-center">
                                <input
                                    //value={firm}
                                    //onChange={handlePasswordChange}
                                    className='w-[260px] h-[40px] border-[1px] border-opacity-20 border-grey rounded-[8px] px-3 text-black bg-white focus:outline-none'
                                    placeholder='Company name'
                                />
                                <input
                                    //value={email}
                                    //onChange={handlePasswordChange}
                                    className='w-[260px] h-[40px] border-[1px] border-opacity-20 border-grey rounded-[8px] px-3 text-black bg-white focus:outline-none mt-1'
                                    placeholder='Email'
                                />
                                <button
                                    onClick={onClose}
                                    type='submit'
                                    className='outline outline-0 w-[260px] h-12 mt-3 rounded-[8px] bg-green text-white hover:bg-darkGreen'
                                >
                                    <h2 className='text-bold'>Send</h2>
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