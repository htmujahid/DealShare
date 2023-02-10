/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B9E6E8",
          dark: "#19B2B8",
        },
        secondary: {
          DEFAULT: "#F2F2F2",
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
};
