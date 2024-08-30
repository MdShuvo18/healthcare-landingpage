/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-cyan" : "#007E85",
        "secondary-gray" : "#555555",
        "yellow-green" : "#6EAB36",
        "section-text-color": "rgba(0, 126, 133, 1)",
        "all-btn-color": "rgba(0, 126, 133, 1)",
      },
      fontFamily: {
        lato : ["Lato", "sans-serif"]
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}

