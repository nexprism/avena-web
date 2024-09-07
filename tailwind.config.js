/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      fontFamily: {
        primaryLight: ["var(--font-primary-light)", "sans-serif"],
        primaryRegular: ["var(--font-primary-regular)", "sans-serif"],
        primaryMedium: ["var(--font-primary-medium)", "sans-serif"],
        primaryBold: ["var(--font-primary-bold)", "sans-serif"],
        fatFace: ["var(--font-fatface)", "serif"],
        Barlow: ["var(--font-barlow)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
