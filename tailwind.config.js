/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B9E6E8",
          50: "#c0e9ea",
          100: "#c7ebed",
          200: "#a7cfd1",
          300: "#94b8ba",
          400: "#82a1a2",
          500: "#6f8a8b",
          600: "#5d7374",
          700: "#4a5c5d",
          800: "#374546",
          900: "#252e2e",
          dark: "#19B2B8",
        },
        secondary: {
          DEFAULT: "#F2F2F2",
          50: "#f3f3f3",
          100: "#f5f5f5",
          200: "#dadada",
          300: "#c2c2c2",
          400: "#a9a9a9",
          500: "#919191",
          600: "#797979",
          700: "#616161",
          800: "#494949",
          900: "#303030",
        },
        black: {
          DEFAULT: "#151515",
        },
        white: {
          DEFAULT: "#FCFFFD",
        },
        neutral: {
          light: "#F9F9F9",
          DEFAULT: "#E4EAEE",
        },
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
