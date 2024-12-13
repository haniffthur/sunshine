/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",                   // Memproses semua file HTML di root dan subdirektori
    "./*.html",                      // Memproses file HTML di root directory
    "./src/**/*.{js,ts,jsx,tsx}",    // Memproses file JS, TS, JSX, TSX di dalam folder src
    "./scripts/**/*.js",             // Tambahkan jalur untuk semua file JS di dalam folder 'scripts'
    "./language.js",                 // Jika Anda memiliki file JavaScript tertentu, tambahkan path-nya di sini
  ],
  theme: {
    extend: {
      primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a","950":"#172554"},
      fontFamily: {
        sans: ['Poppins'],  // Font default yang diatur ke Poppins
        jkt : ['Plus Jakarta Sans'], 
        cotorie : ['Coterie - Elegant Serif']
      },
      animation: {
        'bounce-up-down': 'updown 2s infinite',
        'bounce-down-up': 'downup 2s infinite',
      },
      keyframes: {
        updown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        downup: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        },
      },
  },
},
  plugins: [],
}

