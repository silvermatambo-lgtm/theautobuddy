/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans:['Inter','system-ui','sans-serif'], display:['Arial Black','Inter','sans-serif'] },
      colors:{
        buddy:{50:'#eef7ff',100:'#d9edff',200:'#bce0ff',300:'#8dccff',400:'#52adff',500:'#1689f5',600:'#0870dc',700:'#0759b2',800:'#0a4b91',900:'#0b3e76',950:'#06264d'},
        sun:{400:'#ffd11a',500:'#f7b500',600:'#dd9700'},
        ink:'#061a35'
      },
      boxShadow:{glow:'0 18px 55px rgba(8,112,220,.22)'}
    }
  },
  plugins:[]
}
