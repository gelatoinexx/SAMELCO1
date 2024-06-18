/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primary: {
          50: "#f6e8e7",
          100: "#e3b7b5",
          200: "#d69491",
          300: "#c3645e",
          400: "#b7453f",
          500: "#a5170f",
          600: "#96150e",
          700: "#75100b",
          800: "#5b0d08",
          900: "#450a06",
        },

        accent: {
          50: "#fff7e6",
          100: "#ffe6b0",
          200: "#ffda8a",
          300: "#ffc954",
          400: "#ffbe33",
          500: "#ffae00",
          600: "#e89e00",
          700: "#b57c00",
          800: "#8c6000",
          900: "#6b4900",
        },

        grey: {
          50: "#e8e8e8",
          100: "#b6b6b6",
          200: "#939393",
          300: "#626262",
          400: "#434343",
          500: "#141414",
          600: "#121212",
          700: "#0e0e0e",
          800: "#0b0b0b",
          900: "#080808",
        },
      },
      fontFamily: {
        sans: ['"Epilogue", sans-serif'],
      },

      animation: {
        "rise-up": "rise-up 0.7s ease-out forwards",
        
      },
      keyframes: {
        "rise-up": {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
       
      },

      borderRadius: {
        "4xl": "6rem",
      },

      borderWidth: {
        default: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
      },
    },
  },
  plugins: [],
};
