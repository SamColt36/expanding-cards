/** @type {import(tailwindcss).Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '5rem',
      },
      screens: {
        xl: { min: "1024px" },
        // => @media and (min-width: 1024px) and (max-width: 1279px)

        lg: { min: "768px", max: "1023px" },
        // => @media and (min-width: 768px) and (max-width: 1023px)

        md: { min: "426px", max: "767px" },
        // => @media and (min-width: 426px) and (max-width: 767px)

        sm: { min: "300px", max: "425px" },
        // => @media and (min-width: 300px) and (max-width: 425px)
      },
    },
  },
  plugins: [],
}
