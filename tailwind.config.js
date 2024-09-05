/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "white": "hsl(0, 0%, 100%)",
        "Light-pink": "hsl(275, 100%, 97%)",
        "grayish-purple": "hsl(292, 16%, 49%)",
        "dark-purple": "hsl(292, 42%, 14%)",
        "dark-pink": 'hsl(280.9,83%,53.9%)',
      },
      fontFamily: {
        'Work-sans': ['"Work Sans"', 'sans-serif'],
      },
      width:{
        '300px': '300',   
        '500px': '500',
      },
      maxHeight:{
        'max-h-400': '400px',
      },
      margin:{
        'inline-30': "30px",
      }
    },
  },
  plugins: [],
};
