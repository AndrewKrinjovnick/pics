import classNames from 'classnames';
import { FC, TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string;
}

export const TextArea: FC<TextAreaProps> = ({ className = '', ...props }) => {
	return (
		<textarea
			className={classNames('h-32 p-4 resize-none border-2 border-dark-red', {
				[className]: className,
			})}
			{...props}
		/>
	);
};
