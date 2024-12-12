/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nightColor: "#0F141E",
        weather: "#F3F4F6",
        night: "#111827BF",
        purple: "#777CCE"
    
      },
      height: {
        'day-1200': '1200px', // Custom height value
        'night-1200': '1200px',
        'city' : '828px',
        'input' : '80px'
     
      },
      width: {
        'city' : '414px',
        'day-800' : '800px',
        'night-800' : '800px',
        'input' : '567px'
      },
      top: {
        'app' : '230px'
      },
      spacing: {
        'image-bottom' : '361px',
         'temp' : '153px',
         'cityTop' : '81px',
         'cityLeft' : '44px',
         'moodBottom' : '120px',
         'moodLeft' : '40px',
         'inputLeft' : '40px'
      },
      
      backgroundImage: {
         'custom-gradient': 'linear-gradient(180deg, #111827 0%, #6B7280 100%)',
      },

      fontSize: {
        'temp': '144px',
        'city' : '48px',
        'moods' : '24px'
    
      },
      textColor: {
        'mood' : '#FF8E27',
        'temp' : 'bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
        'transparent' : 'color: transparent'

      },

    },
  },
  plugins: [],
};

