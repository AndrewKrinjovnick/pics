import closeIcon from 'assets/close-icon.svg';
import { FC } from 'react';
import type { Comment } from 'types/comment';
import type { ID } from 'types/index';

interface CommentItemProps extends Comment {
	onDelete: (id: ID) => void;
}

export const CommentItem: FC<CommentItemProps> = ({ body, id, user: { username }, onDelete }) => {
	const handleDelete = () => {
		onDelete(id);
	};

	return (
		<div className='w-full relative px-6 py-8 min-h-[100px] bg-light-yellow'>
			<div className='absolute top-0 left-0 -translate-y-1/2'>
				<div className='absolute top-1/2 -left-2 -translate-x-1/2 -translate-y-1/2 rounded-full h-16 w-16 bg-orange flex justify-center items-center text-xl text-white font-bold'>
					DT
				</div>
				<div className='py-2 w-44 bg-orange pl-8 pr-2'>
					<span className='whitespace-nowrap text-ellipsis overflow-hidden font-bold'>
						{username}
					</span>
				</div>
			</div>
			<div
				className='absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-6 h-6 flex justify-center items-center rounded-full bg-orange hover:cursor-pointer'
				onClick={handleDelete}
			>
				<img alt='close' src={closeIcon} className='w-2 h-2' />
			</div>
			<span className='text-gray'>{body}</span>
		</div>
	);
};
