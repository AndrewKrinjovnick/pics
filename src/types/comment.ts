import type { ID } from './index';
import type { User } from './user';

export interface Comment {
	body: string;
	id: ID;
	postId: ID;
	user: User;
}
