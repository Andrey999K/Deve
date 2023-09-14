/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        blackSecond: "#1F1F21",
        graySecond: "#8E8E93",
        bgGray: "#F6F5F4",
        grayThird: "#80808040",
        blackout: "#00000080",
        warning: "#FF7043",
        error: "#FF4343",
        success: "#31A551",
        blackDark: "#0F0F0F",
        bgGrayDark: "#1B1B1B",
        red: "#CA4646",
        blue: "#516FBB",
        brown: "#504343"
      }
      // fontFamily: {
      //   ManropeRegular: ["ManropeRegular", "sans-serif"],
      //   ManropeMedium: ["ManropeMedium", "sans-serif"],
      //   ManropeSemiBold: ["ManropeSemiBold", "sans-serif"],
      //   ManropeBold: ["ManropeBold", "sans-serif"]
      // }
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1180px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px"
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
  layers: {
    base: {
      "input:focus": {
        outline: "#1F1F21 solid 2px"
      }
    }
  }
}
