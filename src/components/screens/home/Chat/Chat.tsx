import { CommentItem } from 'components/ui/CommentItem';
import { Loader } from 'components/ui/Loader/Loader';
import { FC, useEffect, useState } from 'react';
import { CommentService } from 'services/comment-service/comment.service';
import { Comment } from 'types/comment';
import { type ID } from 'types/index';
import { CommentForm } from '../CommentForm';

export const Chat: FC = () => {
	const [comments, setComments] = useState<Comment[]>([]);
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const nextCommentId = comments.length ? comments[comments.length - 1].id++ : 0;
	const nextPostId = comments.length ? comments[comments.length - 1].id++ : 0;

	const addComment = (comment: Comment) => {
		setComments(prevComments => {
			return [...prevComments, comment];
		});
	};

	const deleteComment = (commentId: ID) => {
		setComments(prevComments => {
			return prevComments.filter(comment => comment.id !== commentId);
		});
	};

	useEffect(() => {
		setLoading(true);
		CommentService.getComments()
			.then(({ comments }) => {
				setComments(comments);
			})
			.catch(err => {
				if (err instanceof Error) {
					setError(err.message);
				}
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	useEffect(() => {
		window.scrollTo(0, document.body.scrollHeight);
	}, [comments]);

	if (error) {
		return (
			<>
				<h1>{error}</h1>
				<p className='mt-4'>Restart the page</p>
			</>
		);
	}

	return (
		<div className='flex flex-col space-y-12'>
			{loading ? (
				<Loader />
			) : (
				<>
					{comments.map(comment => (
						<CommentItem onDelete={deleteComment} key={comment.id} {...comment} />
					))}
					<CommentForm
						className='sticky bottom-20 bg-dark-yellow'
						nextCommentId={nextCommentId}
						nextPostId={nextPostId}
						onSubmit={addComment}
					/>
				</>
			)}
		</div>
	);
};
