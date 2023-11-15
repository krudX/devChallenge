/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      main: "var(--ff-main)",
    },
    fontSize: {
      heading: "2rem",
      body: "1rem",
      label: "0.875rem",
      small: "0.625rem",
      price: "0.75rem",
    },
    colors: {
      bg: "#111315",
      "dark-gray": "#1b1d1f",
      "light-gray": "#6f757c",
      "accent-mint": "#bee3cc",
      text: "#fef7ee",
      "accent-yellow": "#f6c768",
      "accent-orange": "#ed735d",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
