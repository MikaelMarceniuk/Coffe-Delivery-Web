/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        yellowDark: '#C47F17',
        yellowLight: '#F1E9C9',
        yellow: '#DBAC2C',

        purpleDark: '#4B2995',
        purpleLight: '#EBE5F9',
        purple: '#8047F8',

        baseTitle: '#272221',
        baseSubtitle: '#403937',
        baseText: '#574F4D',
        baseLabel: '#8D8686',
        baseHover: '#D7D5D5',
        baseButton: '#E6E5E5',
        baseInput: '#EDEDED',
        baseCard: '#F3F2F2',

        background: '#FAFAFA',
        white: '#FFF'
      },
      fontFamily: {
        baloo2: ['Baloo2'],
        roboto: ['Roboto']
      }
    },
  },
  plugins: [],
}

