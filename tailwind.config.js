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
        xs: "1.4rem",    
        sm: '1rem',     
        base: '1.125rem',   
        md: '1.25rem',    
        lg: '1.3125rem',    
        '2xl': '2.25rem',  
        '3xl': '2.5rem',    
        '4xl': '3rem',    
        '5xl': '3.5rem',     
        '6xl': '7.5rem',   
        '7xl': '8rem',   
      },
      fontWeight: {
        normal: "300",
        medium: "400",
        bold: "700",
      },  
      colors: {
       main : "#2640A1",
       submain : "FFCD00",
       background : "EBEBEB",
      },
    },
  },
  plugins: [],
}

