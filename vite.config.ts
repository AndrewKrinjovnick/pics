import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			assets: '/src/assets',
			components: '/src/components',
			config: '/src/config',
			pages: '/src/pages',
			services: '/src/services',
			stylesheets: '/src/stylesheets',
			types: '/src/types',
		},
	},
});
