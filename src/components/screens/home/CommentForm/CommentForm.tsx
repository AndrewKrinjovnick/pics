import classNames from 'classnames';
import { Button } from 'components/ui/Button';
import { TextArea } from 'components/ui/TextArea';
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react';
import { Comment } from 'types/comment';
import { ID } from 'types/index';

interface CommentFormProps {
	className?: string;
	nextCommentId: ID;
	nextPostId: ID;
	onSubmit: (message: Comment) => void;
}

export const CommentForm: FC<CommentFormProps> = ({
	className = '',
	nextCommentId,
	nextPostId,
	onSubmit,
}) => {
	const [message, setMessage] = useState<string>(localStorage.getItem('message') ?? '');

	const changeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setMessage(event.target.value);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (message.trim()) {
			onSubmit({
				body: message,
				id: nextCommentId,
				postId: nextPostId,
				user: {
					username: 'username',
					id: nextCommentId,
				},
			});
		}

		setMessage('');
	};

	useEffect(() => {
		localStorage.setItem('message', message);
	}, [message]);

	return (
		<form className={classNames('relative', { [className]: className })} onSubmit={handleSubmit}>
			<TextArea
				placeholder='Lorem'
				className='w-full block'
				onChange={changeMessage}
				value={message}
			/>
			<Button className='absolute right-4 bottom-0 translate-x-1/2 translate-y-1/2'>Send</Button>
		</form>
	);
};
