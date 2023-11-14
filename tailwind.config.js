/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./templates/*.{html,htm}", "./templates/**/*.{html,htm}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/static/isometric-moving-truck.jpg')",
      },
    },
  },
  plugins: [],
}

