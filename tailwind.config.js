/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Include all JavaScript/JSX/TSX files in the src folder
    './public/index.html',         // Include the main HTML file if necessary
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cloudy-blue-gradient': 'linear-gradient(to top, #a0aab3, #e0e5e8)'

      },
    },
  },
  plugins: [],
}

