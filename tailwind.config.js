module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  daisyui: {
    themes: true,
  },
  variants: {
    extend: {},
  },
  important: true,
  plugins: [require("daisyui")],
};
