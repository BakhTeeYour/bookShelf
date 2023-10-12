/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          10: 'rgba(215, 215, 215, 1)',
          20: 'rgba(245, 245, 245, 1)',
          50: 'rgba(35, 35, 41, 0.50)',
          80: '#EFEFEF',
          100: 'rgb(244,247,254)',
          150: 'rgba(243, 244, 248, 1)',
          200: 'rgba(234, 238, 248, 1)',
          250: 'rgba(163, 163, 163, 1)',
          300: '#D3D3D4',
          350: 'rgba(246, 246, 246, 1)',
          400: 'rgba(163, 163, 167, 1)',
          450: 'rgba(230, 232, 240, 1)',
          500: 'rgba(35, 35, 41, 0.75)',
          550: 'rgba(156, 171, 194, 1)',
          700: 'rgba(35, 35, 41, 1)',
          750: 'rgba(160, 160, 160, 1)',
          800: 'rgba(138, 138, 138, 1)',
          900: ' rgba(152, 152, 169, 1)',
        },
        dark: {
          50: 'rgba(35, 35, 41, 0.75)',
          100: 'rgba(35, 35, 41, 1)',
        },
        primary: {
          10: 'rgba(236, 240, 255, 1)',
          50: 'rgba(156, 171, 194, 1)',
          100: 'rgba(54, 136, 234, 1)',
          200: 'rgba(49, 122, 211, 1)',
          500: 'rgba(62, 98, 153, 1)',
        },
        purple: {
          100: 'rgba(244, 236, 255, 1)',
          200: 'rgba(95, 27, 240, 1)',
        },
        light: {
          100: 'rgba(255, 255, 255, 1)',
        },
        danger: {
          50: '#FBDAD8',
          100: 'rgba(255, 34, 34, 1)',
          200: 'rgba(231, 78, 68, 1)',
        },
        success: {
          50: '#CDEDDE',
          100: '#41B37C',
        },
        warning: {
          50: 'rgba(237, 232, 205, 1)',
          100: 'rgba(228, 169, 52, 1)',
          150: 'rgba(255, 244, 217, 1)',
        },
      },
    },
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        '.container': {
          maxWidth: '100%',
          paddingLeft: '36px !important',
          paddingRight: '36px !important',
          '@screen sm': {
            maxWidth: '768px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
            margin: '0 auto',
          },
        },
      });
    },
  ],
}