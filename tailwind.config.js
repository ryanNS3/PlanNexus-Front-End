/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      spacing: {
        '1': '0.25rem',
        '2': '0.50rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.50rem',
        '7': '1.75rem',
        '8': '2rem',
        '9': '2.25rem',
        '10': '2.50rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '18': '4.5rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
        '32': '8rem',
        '36': '9rem',
        '40': '10rem',
        '44': '11rem',
        '48': '12rem',
        '52': '13rem',
        '56': '14rem',
        '60': '15rem',
        '66': '16.5rem',
        '72': '18rem',
        '78': '19.5rem',
        '84': '21rem',
        '90': '22.5rem',
        '96': '24rem',
      }
    },

    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },

    // Ajustar o fontsize de acordo com o projeto no figma
    fontSize: {
      'h1': ['80px', {
        lineHeight: '84px',
        letterSpacing: '0',
        fontWeight: '600',
      }],
      'h2': ['72px', {
        lineHeight: '94px',
        letterSpacing: '0',
        fontWeight: '700',
      }],
      'h3': ['56px', {
        lineHeight: '67px',
        letterSpacing: '0',
        fontWeight: '600',
      }],
      'h4': ['80px', {
        lineHeight: '84px',
        letterSpacing: '1%',
        fontWeight: '600',
        case: 'upper',
      }],
      'h5': ['32px', {
        lineHeight: '38px',
        letterSpacing: '0',
        fontWeight: '500',
      }],
      'sub1': ['24px', {
        lineHeight: '31px',
        letterSpacing: '2%',
        fontWeight: '700',
        case: 'upper',
      }],
      'sub2': ['20px', {
        lineHeight: '28px',
        letterSpacing: '2%',
        fontWeight: '500',
      }],
      'fun1': ['20px', {
        lineHeight: '28px',
        letterSpacing: '2%',
        fontWeight: '700',
        case: 'upper',
      }],
      'fun2': ['15px', {
        lineHeight: '21px',
        letterSpacing: '2%',
        fontWeight: '500',
        case: 'upper',
      }],
      'ct1': ['22px', {
        lineHeight: '29px',
        letterSpacing: '1%',
        fontWeight: '400',
      }],
      'ct2': ['15px', {
        lineHeight: '21px',
        letterSpacing: '1%',
        fontWeight: '400',
      }],
      'ct3': ['12px', {
        lineHeight: '17px',
        letterSpacing: '1%',
        fontWeight: '400',
      }],
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'branco': '#fffff',
      'preto': '#000',
      'rosa': {
        50: '#f5d0ff',
        100: '#eba5ff',
        200: '#de7ff9',
        300: '#b13fd1',
        400: '#9f2dbf',
        500: '#8b1faa',
        600: '#741190',
        700: '#62097b',
        800: '#4c0461',
        850: '#320240',
        900: '#1c0123',
        'destaque': '#cb6ce6'
      },
      'cinza': {
        50: '#F2F2F2',
        100: '#E6E6E6',
        200: '#CCCCCC',
        300: '#999999',
        400: '#666666',
        500: '#4D4D4D',
        700: '#333333',
        800: '#1A1A1A',
        950: '#0A0A0A'
      }
    },
  },
  plugins: [],
}