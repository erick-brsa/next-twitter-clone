'use client';

import { useCallback, useState } from 'react';
import useRegisterModal from '@/hooks/useRegisterModal';
import Input from '../ui/Input';
import Modal from '../Modal';
import useLoginModal from '@/hooks/useLoginModal';

const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const onToggle = useCallback(() => {
		if (isLoading) return;
		registerModal.onClose();
		loginModal.onOpen();
	}, [isLoading, registerModal, loginModal]);

	const onSubmit = useCallback(() => {
		try {
			setIsLoading(true);
			// TODO: ADD REGISTER AND LOGIN
			registerModal.onClose();
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}, [registerModal]);

	const bodyContent = (
		<div className="flex flex-col gap-4">
			<Input
				type="email"
				disabled={isLoading}
				placeholder="Email"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<Input
				type="text"
				placeholder="Name"
				disabled={isLoading}
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<Input
				type="text"
				placeholder="Userame"
				disabled={isLoading}
				value={username}
				onChange={e => setUsername(e.target.value)}
			/>
			<Input
				type="password"
				placeholder="Password"
				disabled={isLoading}
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
		</div>
	);

	const footerContent = (
		<div className="text-neutral-400 text-center mt-4">
			<p>
				Already have an account?
				<span
					className="text-white cursor-pointer hover:underline"
					onClick={onToggle}
				>
					{' '}
					Sign In
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			onClose={registerModal.onClose}
			title="Create an account"
			actionLabel="Register"
			onSubmit={onSubmit}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
