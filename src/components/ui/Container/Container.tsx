import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren> = ({ children }) => {
	return <div className='mx-auto max-w-3xl px-4'>{children}</div>;
};
