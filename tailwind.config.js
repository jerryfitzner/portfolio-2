/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'html': '#EA6327',
        'javascript': '#F0D91D',
        'react': '#5FD3F4',
        'node': '#88C003',
        'rails': '#C60200',
        'ruby': '#C60200',
        'css': '#28A4D9',
        'tailwind': '#4BACB0',
      },
    },
    // colors: {
    //   'brown': {
    //     900: '#372C2E',
    //     800: '#563727',
    //     700: '#7A431D',
    //     600: '#362C2D',
    //   },
    //   'gold': '#DE9E48',
    // },
  },
  plugins: [],
}

