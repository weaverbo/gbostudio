/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        InriaSans: ['var(--font-Inria_Sans)'],
      },
      fontSize: {
        xs: '14px',
        sm: '16px',
        base: '18px',
        md: '20px',
        lg: '21px',
        xl: '24px',
        '2xl': '36px',
        '3xl': '40px',
        '4xl': '56px',
        '5xl': '120px',
        '6xl': '128px',
      },
      fontWeight: {
        thin: '100',
        normal: '300',
        medium: '400',
        bold: '700',
      },
      colors: {
        main: '#2640A1',
        submain: '#FFCD00',
        background: '#EBEBEB',
      },
    },
  },
  plugins: [],
};
