import ErrorBoundary from 'components/layouts/ErrorBoundary/ErrorBoundary.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ErrorBoundary>
			<App />
		</ErrorBoundary>
	</React.StrictMode>
);
