/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-white": "#FFFFFF",
        "regal-blue": "#7544FC",
        "regal-black": "#484848",
        "regal-green": "#92C6A7",
        "regal-orange": "#FF6F4B",
      },
    },
  },
};
