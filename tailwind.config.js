/** @type {import(tailwindcss).Config} */
module.exports = {
  content: ["**/*{html, js}"],
  theme: {
    extend: {
      screens: {
        xl: { min: "1024px" },
        lg: { min: "768px", max: "1023px" },
        md: { min: "426px", max: "767px" },
        sm: { min: "300px", max: "425px" },
      },
    },
  },
  plugins: [],
};
