import type { Comment } from 'types/comment';

export interface GetUsersResponse {
	comments: Comment[];
	limit: number;
	skip: number;
	total: number;
}
