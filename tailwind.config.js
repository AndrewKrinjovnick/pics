/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				button: '4px 4px 4px rgba(0, 0, 0, 0.5)',
			},
			colors: {
				'dark-red': '#5a2424',
				'dark-yellow': '#ebd136',
				'light-yellow': '#feee7f',
				gray: '#7f7b68',
				orange: '#cd9711',
				purple: '#908cad',
			},
		},
	},
	plugins: [],
};
