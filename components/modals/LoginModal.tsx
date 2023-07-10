'use client';

import { useCallback, useState } from 'react';
import useLoginModal from '@/hooks/useLoginModal';
import useRegister from '@/hooks/useRegisterModal';
import Input from '../ui/Input';
import Modal from '../Modal';

const LoginModal = () => {
	const loginModal = useLoginModal();
	const registerModal = useRegister();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = useCallback(() => {
		try {
			setIsLoading(true);
			// TODO: ADD LOGIN
			loginModal.onClose();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [loginModal]);

	const onToggle = useCallback(() => {
		if (isLoading) return;
		loginModal.onClose();
		registerModal.onOpen();
	}, [isLoading, registerModal, loginModal]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Input
				type="email"
				placeholder="Email"
				value={email}
				onChange={e => setEmail(e.target.value)}
				disabled={isLoading}
			/>
			<Input
				type="password"
				placeholder="Password"
				value={password}
				onChange={e => setPassword(e.target.value)}
				disabled={isLoading}
			/>
		</div>
	);

	const footerContent = (
		<div className="text-neutral-400 text-center mt-4">
			<p>
				First time using Twitter?
				<span
					className="text-white cursor-pointer hover:underline"
					onClick={onToggle}
				>
					{' '}
					Create an account
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={loginModal.isOpen}
			onClose={loginModal.onClose}
			title="Login"
			actionLabel="Sign in"
			onSubmit={onSubmit}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default LoginModal;
