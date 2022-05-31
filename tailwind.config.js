module.exports = {
  important: true,
  content: [
    // "./public/index.html",
    "./src/PersonelPage.js",
    "./src/App.js",
    "./src/SideBar.js",
    "./src/Navbar.js",
  ],
  theme: {

    extend: {
      colors: {
        'custom-green': '#22C7C6',
      },
      screens: {
        sm: {'min' : '360px', 'max' : '767px'},
      },
    },

    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
    },
  },
  plugins: [
    'tailwindcss',
    'autoprefixer',
  ]
}
