/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1300px',
    },
    fontFamily: {
      'sans' : ['"DM Sans"', 'system-ui'],
      'serif' : ['Adamina', 'system-ui'],
      'mono' : ['"Chery Swash"', 'system-ui'],
    },
    colors: {
      'dark-1': '#151517',
      'dark-2': '#717172',
      'blue': '#1070FF',
      'white': '#FFFFFF',
      'grey': '#FAFAFA',
    },
    extend: {
      fontSize: {
        nav: ['20px', {
          lineHeight: '26px',
          fontWeight: '500'
        }],
        title: ['70px', {
          lineHeight: '110.05%',
          fontWeight: '700'
        }],
        paragraph: ['16px', {
          lineHeight: '22px',
          fontWeight: '400'
        }],
        stat: ['34px', {
          lineHeight: '46px',
          fontWeight: '900'
        }],
        feature: ['60px', {
          lineHeight: '81px',
          fontWeight: '500'
        }],
        name: ['22px', {
          lineHeight: '28px',
          fontWeight: '500'
        }],
        seemore: ['22px', {
          lineHeight: '28px',
          fontWeight: '500'
        }],
        title2: ['50px', {
          lineHeight: '81px',
          fontWeight: '400'
        }],
        footer1: ['24px', {
          lineHeight: '31px',
          fontWeight: '400'
        }],
        footer2: ['20px', {
          lineHeight: '26.04px',
          fontWeight: '400'
        }],
        footnote: ['14px', {
          fontWeight: '700'
        }],
  
      },
    }
  }
}