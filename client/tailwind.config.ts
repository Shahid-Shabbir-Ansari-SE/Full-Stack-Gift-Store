import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#D52F2D',
        heading: '#1E1E29',
        lightPurple: '#5F55D4',
        grey: '#616169',
        darkPurple: '#280664',
        lightBlue: '#D4D1F5',
        yellow: '#FBD033',
        basePurple: '#7066E6',
      },
      fontFamily:{
        'NotoRegular':['Noto Regular'],
        'NotoBold':['Noto Bold'],
      }
    },
  },
  plugins: [],
};
export default config;
