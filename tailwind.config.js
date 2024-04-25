/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      albert: ["Albert Sans", "sans-serif"],
    },
    extend: {
      colors: {
        darkness: "#131019",
        primary: "#fa1e4e",
        section: "#1c1726",
        signature: "#665d78",

        post: "#202020",
        body: "#fff",
        module: "#d9e9ff",
        box: "#242424",
        piece: "#666666",
        font: "#949494",
        detail: "#5f5f5e",
        boxborder: "#66777E1A",
        geo: "#ffe787",
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
