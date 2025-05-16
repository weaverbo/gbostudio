/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/TextAnimationSection/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{css}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '14px',
        sm: '16px',
        base: '18px',
        md: '20px',
        lg: '21px',
        xl: '24px',
        '2xl': '36px',
        '3xl': '42px',
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
        background: '#EBEBEB',
      },
    },
  },
  plugins: [],
};
