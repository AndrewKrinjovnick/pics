import classNames from 'classnames';
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	className = '',
	...props
}) => {
	return (
		<button
			className={classNames('px-6 py-2 bg-dark-red text-white shadow-button', {
				[className]: className,
			})}
			{...props}
		>
			{children}
		</button>
	);
};
