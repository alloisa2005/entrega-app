/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {    
    extend: {    
      colors: {
        primario: "#232E7E",
        gris: '#343A40',
        naranja: '#F58220',         
        rojo: '#EC3A33',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        caveat: ['var(--font-caveat)', 'cursive'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
