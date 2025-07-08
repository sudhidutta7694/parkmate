import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  important: true,
  content: ['./src/components/**/*.{js,ts,jsx,tsx}'],

  theme: {
    colors: {
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      accent: colors.black,

      primary: {
        DEFAULT: 'hsl(52, 100%, 50%)',
        25: 'hsl(52, 100%, 98%)',
        50: 'hsl(52, 100%, 92%)',
        100: 'hsl(52, 100%, 84%)',
        200: 'hsl(52, 100%, 75%)',
        300: 'hsl(52, 100%, 66%)',
        400: 'hsl(52, 100%, 58%)',
        500: 'hsl(52, 100%, 50%)',
        600: 'hsl(52, 100%, 45%)',
        700: 'hsl(52, 100%, 30%)',
        800: 'hsl(52, 100%, 20%)',
        900: 'hsl(52, 100%, 06%)',
      },

      gray: {
        DEFAULT: 'hsl(52, 2%, 32%)',
        25: 'hsl(52, 2%, 94%)',
        50: 'hsl(52, 2%, 90%)',
        100: 'hsl(52, 2%, 80%)',
        200: 'hsl(52, 2%, 70%)',
        300: 'hsl(52, 2%, 60%)',
        400: 'hsl(52, 2%, 50%)',
        500: 'hsl(52, 2%, 32%)',
        600: 'hsl(52, 2%, 24%)',
        700: 'hsl(52, 2%, 16%)',
        800: 'hsl(52, 2%, 08%)',
        900: 'hsl(52, 2%, 04%)',
      },

      green: {
        DEFAULT: 'hsl(116, 100%, 27%)',
        25: 'hsl(116, 100%, 98%)',
        50: 'hsl(116, 100%, 90%)',
        100: 'hsl(116, 100%, 78%)',
        200: 'hsl(116, 100%, 66%)',
        300: 'hsl(116, 100%, 54%)',
        400: 'hsl(116, 100%, 40%)',
        500: 'hsl(116, 100%, 27%)',
        600: 'hsl(116, 100%, 21%)',
        700: 'hsl(116, 100%, 14%)',
        800: 'hsl(116, 100%, 08%)',
        900: 'hsl(116, 100%, 04%)',
      },

      red: {
        DEFAULT: 'hsl(10, 94%, 45%)',
        25: 'hsl(10, 94%, 98%)',
        50: 'hsl(10, 94%, 92%)',
        100: 'hsl(10, 94%, 84%)',
        200: 'hsl(10, 94%, 74%)',
        300: 'hsl(10, 94%, 64%)',
        400: 'hsl(10, 94%, 54%)',
        500: 'hsl(10, 94%, 45%)',
        600: 'hsl(10, 94%, 35%)',
        700: 'hsl(10, 94%, 22%)',
        800: 'hsl(10, 94%, 10%)',
        900: 'hsl(10, 94%, 04%)',
      },
    },

    extend: {
      ringColor: {
        DEFAULT: 'hsl(52, 100%, 50%)',
      },
      outlineColor: {
        DEFAULT: 'hsl(52, 100%, 50%)',
      },
      borderRadius: {
        DEFAULT: '0',
      },
      spacing: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        192: '48rem',
      },

      animation: {
        'spin-reverse': 'reverse-spin 1s linear infinite',
        'spin-slow': 'spin 3s linear infinite',
        'spin-12': 'spin 12s linear infinite',
        'spin-24': 'spin 24s linear infinite',
        'spin-30': 'spin 30s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'wiggle-fade': 'wiggle-fade 1s ease-in-out infinite',
        slide: 'slide 1s ease-in-out infinite',
        'slide-left': 'slide-left 1s ease-in-out infinite',
        'slide-right': 'slide-right 1s linear infinite',
        blink: 'blink 2s linear infinite',
        breathe: 'breathe 6s ease-in-out infinite',
        'move-right-12': 'move-right 12s ease-in-out infinite',
        'move-right-24': 'move-right 24s ease-in-out infinite',
        'move-right-36': 'move-right 36s ease-in-out infinite',
        'move-right-48': 'move-right 48s ease-in-out infinite',
        'move-right-60': 'move-right 60s ease-in-out infinite',
        'park-car': 'park-car 5s ease-in-out infinite',
      },

      keyframes: {
        'reverse-spin': {
          from: { transform: 'rotate(360deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'wiggle-fade': {
          '0%, 100%': { transform: 'rotate(-3deg)', opacity: '0.4' },
          '50%': { transform: 'rotate(3deg)', opacity: '0.9' },
        },
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        slide: {
          '0%': { opacity: '1' },
          '100%': { transform: 'translateX(25%)' },
        },
        'slide-left': {
          '40%,60%': { opacity: '1' },
          '46%': { transform: 'translateX(-25%)', opacity: '0' },
          '54%': { transform: 'translateX(25%)', opacity: '0' },
        },
        'slide-right': {
          '40%,60%': { opacity: '1' },
          '46%': { transform: 'translateX(25%)', opacity: '0' },
          '54%': { transform: 'translateX(-25%)', opacity: '0' },
        },
        'move-right': {
          '0%': { left: '20%', opacity: '0' },
          '10%, 90%': { opacity: '1' },
          '100%': { left: '80%', opacity: '0' },
        },
        'park-car': {
          '0%': {
            transform: ' translateX(-150%) translateY(150%) rotate(90deg)',
          },
          '30%': {
            transform: ' translateY(-10%) rotate(0deg)',
          },
          '40%, 60%': {
            transform: ' translateX(0%) rotate(0deg)',
          },
          '100%': {
            transform: ' translateX(100%) translateY(150%)  rotate(-90deg)',
          },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.1' },
          '60%': { transform: 'scale(1.5)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
