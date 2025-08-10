/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './js/**/*.js'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      letterSpacing: {
        widest: '.2em',
      },
      colors: {
        mobNavItemColor: 'rgba(177, 148, 139)',
        mobNavBarColor: 'rgba(71, 108, 124)',
        navBarItemColor: 'rgba(2, 20, 50)',
        heroTextColor: 'rgb(80, 100, 100)',
      },
    },
  },
  plugins: [],
}

