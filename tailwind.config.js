/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        rale: "Raleway, sans-serif",
      },
      animation:{
       slideIn:'slideIn 0.5s ease-in-out',
       fadeIn:'fadeIn 0.5s ease-in-out forwards'
      },
      keyframes:{
        slideIn : {
          '0%':{transform:'translateX(-5%)'},
        '100%':{transform:'translateX(0%)'}
       },
       fadeIn : {
        '0%': {opacity:0} ,
      '100%':{opacity:1}
     }
      }
      
    },
  },
  plugins: [],
}

