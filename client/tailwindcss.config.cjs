/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./**/*.{js,ts,jsx,tsx}", // or "./src/**/*.{js,ts,jsx,tsx}" if using a src folder
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
