import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontSize: {
      xs: '12px',
      sm: '16px',
      base: '18px',
      md: '24px',
      lg: '28px',
      xl: '32px'
    },
    fontFamily: {
      NotoRegular: [
        'NOTHS Sans No3 Regular',
        'Helvetica',
        'Arial',
        'sans-serif'
      ],
      NotoBold: ['NOTHS Sans No3 Bold', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        red: '#D52F2D',
        heading: '#1E1E29',
        lightPurple: '#5F55D4',
        grey: '#616169',
        darkPurple: '#280664',
        lightBlue: '#D4D1F5',
        yellow: '#FBD033',
        basePurple: '#7066E0',
        lightGrey: '#E9E9EA',
        baseBlack: '#1e1e29',
        baseGrey: '#BBBBBE'
      }
    }
  },
  plugins: []
}
export default config
