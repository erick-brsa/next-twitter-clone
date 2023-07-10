import { ChangeEvent, FC } from 'react';

interface Props {
	placeholder?: string;
	value?: string;
	type?: string;
	disabled?: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = ({ placeholder, value, type, disabled, onChange }) => {
	return (
		<input
			disabled={disabled}
			type={type}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			className="w-full p-4 text-lg border-2 bg-black rounded-md outline-none text-white focus:border-sky-500 border-neutral-800 transition disabled:bg-neutral-900 disabled:opacity-70 disabled:cursor-not-allowed"
		/>
	);
};

export default Input;
