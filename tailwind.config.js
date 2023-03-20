const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue': '#3364F6',
        'cyan': '#22F7DD',
        'yellow': '#FBCA1D',
        'red': '#F2542D',
        'dark': {
          DEFAULT: '#1E1E1E',
          500: '#1E1E1E',
        }
      }
    },
  },
  plugins: [],
});