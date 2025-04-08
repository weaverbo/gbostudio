/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        InriaSans: ["var(--font-Inria_Sans)"],
      },
      fontSize: {
        lg: "3.6rem",
        md: "2.4rem",
      },
      fontWeight: {
        normal: "300",
        medium: "400",
        bold: "700",
      },  
      colors: {
       main : "#2640A1",
      },
    },
  },
  plugins: [],
}

