import { http } from 'services/http.service';
import { type GetUsersResponse } from './comment.service.types';

export const CommentService = {
	async getComments() {
		return await http.get<GetUsersResponse>('/comments');
	},
};
