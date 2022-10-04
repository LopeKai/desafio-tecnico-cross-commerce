module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'light': '#f5f5f5',
        'dark': '#000',
      },
      
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      }
    },
    
  },
  plugins: [],
}