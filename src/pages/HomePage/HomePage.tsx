import { Chat } from 'components/screens/home/Chat';
import { Container } from 'components/ui/Container/Container';
import { FC } from 'react';

export const HomePage: FC = () => {
	return (
		<main className='bg-gradient-to-br from-purple to-dark-yellow to-30% min-h-screen py-20'>
			<Container>
				<Chat />
			</Container>
		</main>
	);
};
