module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        "fredoka": "Fredoka One",
        "mansalva": "Mansalva",
        "evolveSans": "MADE Evolve Sans"
      },
      animation: {
        bounce200: 'bounce 1s infinite 200ms',
        bounce400: 'bounce 1s infinite 400ms',
      },
    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
};
