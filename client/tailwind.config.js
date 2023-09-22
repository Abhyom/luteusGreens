/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				mainGreen: "#002928",
			},
			fontFamily: {
				popp: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
