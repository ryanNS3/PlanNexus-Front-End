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
      animation:{
        modalAnimation: "rightToLeft 4s ease-in-out"
      },
    
      keyframes:{
        rightToLeft:{
          "100%": {transform: 'translateX(32px)'}
        }
      },
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
      'h1': ['5rem', {
        lineHeight: '84px',
        letterSpacing: '0',
        fontWeight: '800',
      }],
      'h2': ['4.5rem', {
        lineHeight: '94px',
        letterSpacing: '0',
        fontWeight: '600',
      }],
      'h3': ['3.5rem', {
        lineHeight: '67px',
        letterSpacing: '1%',
        fontWeight: '600',

      }],
      'h4': ['2.5rem', {
        lineHeight: '48px',
        letterSpacing: '-1%',
        fontWeight: '600',
        case: 'upper',
      }],
      'h5': ['2rem', {
        lineHeight: '38px',
        letterSpacing: '2%',
        fontWeight: '600',
      }],
      'sub1': ['1.5rem', {
        lineHeight: '31px',
        letterSpacing: '2%',
        fontWeight: '700',
        case: 'upper',
      }],
      'sub2': ['1.25rem', {
        lineHeight: '28px',
        letterSpacing: '2%',
        fontWeight: '500',
      }],
      'fun1': ['1.25rem', {
        lineHeight: '28px',
        letterSpacing: '2%',
        fontWeight: '700',
        case: 'upper',
      }],
      'fun2': ['0.938rem', {
        lineHeight: '21px',
        letterSpacing: '2%',
        fontWeight: '600',
        case: 'upper',
      }],
      'ct1': ['1.375rem', {
        lineHeight: '29px',
        letterSpacing: '1%',
        fontWeight: '400',
      }],
      'ct2': ['0.938rem', {
        lineHeight: '21px',
        letterSpacing: '1%',
        fontWeight: '400',
      }],
      'ct3': ['0.75rem', {
        lineHeight: '17px',
        letterSpacing: '1%',
        fontWeight: '400',
      }],
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'branco': '#FFFFFF',
      'preto': '#000',
      'vermelho': {
        300: '#D93131',

      },
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
        50: '#F9F9F9',
        100: '#E6E6E6',
        200: '#CCCCCC',
        300: '#999999',
        400: '#666666',
        500: '#4D4D4D',
        700: '#333333',
        800: '#1A1A1A',
        950: '#0A0A0A'
      },
      'roxo': {
        50: '#F5ECFF',
        100: '#EBD8FF',
        200: '#D6B4F8',
        400: '#A979DA',
        500: '#905EC2',
        600: '#7251B3',
        700: '#5E38A7',
        750: '#4C2499',
        800: '#2E0879',
        850: '#190245',
        900: '#120132',
        1000: '#080018',
      },
      backgroundImage: {
        'gradiente-enfase': 'linear-gradient(to right, #BD3FD1, #9332AE)',
      },
    },
  },
  plugins: [],
}
