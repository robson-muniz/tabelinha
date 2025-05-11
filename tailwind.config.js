module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blossom: "#FF7EB9",
        lavender: "#B39DDB",
        peach: "#FFAB91",
        sage: "#C5E1A5",
        moonlight: "#F8F3FC",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 32px rgba(179, 157, 219, 0.15)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};