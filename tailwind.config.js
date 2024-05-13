/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      albert: ["Albert Sans", "sans-serif"],
    },
    extend: {
      colors: {
        border: "#222222",
        body: "#111111",
        module: "#161616",
        box: "#444444",
        font: "#a5a5a5",
        detail: "#6b6b6b",
        heading: "#fff",
      },
      fontSize: {
        sm: ["14px", { lineHeight: "21px" }],
        base: ["16px", { lineHeight: "24px" }],
        lg: ["18px", { lineHeight: "27px" }],
        "4xl": ["36px", { lineHeight: "43px" }],
      },
    },
  },
  plugins: [],
};
