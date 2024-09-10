module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Droid Serif', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hl1': '30px',
        'hl2': '24px',
        'hl3': '36px',
        'hl4': '12px',
        'hl5': '42px',
        'hl6': '18px',
      },
      animation: {
        'expand': 'expand 1.2s cubic-bezier(0.01, -0.03, 0.19, 0.88) forwards',
        'slide-in': 'slide-in 800ms 410ms cubic-bezier(0.01, -0.03, 0.19, 0.88) forwards',
        'fade-in': 'fade-in 1.25s ease-in',
        'scroll': 'scroll 40s 700ms linear infinite',
      },
      keyframes: {
        expand: {
          '0%': { width: '2rem' },
          '100%': { width: '14rem' },
        },
        'slide-in': {
          '0%': { right: '10px', left: '0px', opacity: 0 },
          '100%': { right: '0px', opacity: 1, left: '15px' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        scroll: {
          '0%': { left: '105%' },
          '100%': { left: '-210%' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    ["@babel/plugin-transform-react-jsx", {
      "throwIfNamespace": false
    }]
  ],
}

