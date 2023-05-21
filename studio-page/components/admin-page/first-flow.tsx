import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Logo from '/public/first-flow/logo.gif';
import { trpc } from 'utils/trpc';
import { useEffect } from 'react';
import { MutateResult, useMutateLogin } from 'hooks/useMutateLogin';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useState } from 'react';

interface FormData {
	firm: string;
	password: string;
}

const MAILTO_LINK =
	'mailto:elmira@tinycolony.io?subject=Request access to Tinyverse Studios';

export const AdminFlow = () => {
	const { register, handleSubmit } = useForm<FormData>();
	const router = useRouter();
	const [submittedPassword, setSubmittedPassword] = useState<string | null>(
		null
	);

	const onMutate = (result: MutateResult) => {
		if (result === undefined || result === null || !result.valid) {
			//TODO: Add hot toast for failure notification

			console.log('result is INVALID', result);

			toast.error('Invalid password');

			return;
		}

		console.log('result is VALID', result);

		toast.success('Success!');
		result && router.push('/main');
	};

	const { mutate } = useMutateLogin({
		onMutate,
	});

	const onSubmit = handleSubmit((data) => {
		mutate(data);
	});

	return (
		<header className="flex justify-center items-center w-screen h-screen overflow-hidden bg-[url('/first-flow/bg.png')] bg-cover">
			<div className='mx-10 flex flex-col items-center '>
				<Image src={Logo} width={600} height={250} alt='Logo' />
				<form onSubmit={onSubmit} className='flex flex-col items-center'>
					<input
						{...register('firm')}
						className='w-[280px] sm:w-[340px] h-[60px] rounded-[10px] px-4 text-black bg-white bg-no-repeat bg-cover focus:outline-none'
						placeholder='Input your code'
					/>
					<input
						{...register('password')}
						className='w-[280px] sm:w-[340px] h-[60px] rounded-[10px] px-4 text-black bg-white bg-no-repeat bg-cover focus:outline-none'
						placeholder='Input your code'
					/>
					<button
						type='submit'
						className='outline outline-0 w-[235px] h-[60px] mt-10 rounded-[16px] bg-purple text-white hover:bg-white hover:text-purple active:outline-white active:outline-4'
					>
						<h2>Let’s go</h2>
					</button>
				</form>
			</div>
		</header>
	);
};
