/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./midterm/*.html"],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
      },
      colors: {
        // Add your custom color here, giving it a descriptive name
        'custom-gray': '#C1BEBE',
        'custom-black': '615F5F',
      },
      height:{
        'h-100': '36rem',
      },
      width:{
        'w-100': '28rem',
      },
    },
  },
  plugins: [],
};
