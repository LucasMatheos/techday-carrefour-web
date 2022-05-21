module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        carrefour: ["Ubuntu", "arial", "helvetica"],
      },
      colors: {
        cfblue: {
          500: "#1e5bc6",
          900: "#02296D",
        },
        cfred: {
          500: "#e81e26",
        },
      },
    },
  },
  plugins: [],
};
