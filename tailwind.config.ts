import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#fff4ee',
          100: '#ffe5d0',
          200: '#ffc99e',
          300: '#ffa46b',
          400: '#ff7733',
          500: '#F16222',
          600: '#d94f10',
          700: '#b83c0d',
          800: '#942e0e',
          900: '#78270f',
        },
        secondary: {
          50:  '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        success: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50:  '#fffbeb',
          100: '#fef3c7',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        danger: {
          50:  '#fef2f2',
          100: '#fee2e2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        voyabajo: {
          primary: '#F16222',
          hover:   '#DD5719',
          active:  '#C94912',
          dark:    '#231F20',
          white:   '#FFFFFF',
        },
        /* La Gatta tokens */
        charcoal: {
          DEFAULT: '#22282B',
          50:  '#f5f6f6',
          100: '#e0e3e4',
          200: '#c2c8ca',
          300: '#9aa3a8',
          400: '#758896',
          500: '#22282B',
          600: '#1a1f22',
          700: '#131619',
          800: '#0d0f10',
          900: '#060708',
        },
        slate: {
          DEFAULT: '#758896',
          light: '#a0b0bc',
          dark:  '#536470',
        },
      },
      fontFamily: {
        /* La Gatta: serif display */
        display: ['var(--font-display)', 'Georgia', 'serif'],
        heading: ['var(--font-display)', 'Georgia', 'serif'],
        /* body sans */
        body:    ['var(--font-body)', 'Montserrat', 'sans-serif'],
        sans:    ['var(--font-body)', 'Montserrat', 'sans-serif'],
      },
      fontSize: {
        'display': ['84px', { lineHeight: '90px', fontWeight: '400' }],
        'h2-lg':   ['48px', { lineHeight: '56px', fontWeight: '400' }],
        'h2':      ['30px', { lineHeight: '48px', fontWeight: '400' }],
        'h3':      ['14px', { lineHeight: '25px', fontWeight: '400', letterSpacing: '0.08em' }],
        'body-lg': ['18px', { lineHeight: '24px', fontWeight: '300' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
        /* La Gatta scale (4px base) */
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
      },
      /* 0px radius everywhere — La Gatta sharp aesthetic */
      borderRadius: {
        'none': '0px',
        DEFAULT: '0px',
        'sm': '0px',
        'md': '0px',
        'lg': '0px',
        'xl': '0px',
        '2xl': '0px',
        '3xl': '0px',
        'full': '9999px',
      },
      boxShadow: {
        'none':      'none',
        'subtle':    '0px 2px 4px rgba(0,0,0,0.04)',
        'low':       '0px 4px 12px rgba(0,0,0,0.08)',
        'medium':    '0px 12px 24px rgba(0,0,0,0.12)',
        'high':      '0px 20px 40px rgba(0,0,0,0.16)',
        /* legacy */
        'card':      '0px 4px 12px rgba(0,0,0,0.08)',
        'card-hover':'0px 12px 24px rgba(0,0,0,0.12)',
        'primary':   '0px 4px 14px rgba(241,98,34,0.3)',
      },
      animation: {
        'fade-in':    'fadeIn 0.3s ease-in-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out both',
        'slide-up':   'slideUp 0.3s ease-out',
        'spin-slow':  'spin 1.5s linear infinite',
      },
      keyframes: {
        fadeIn:    { from: { opacity: '0' }, to: { opacity: '1' } },
        fadeInUp:  { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        slideUp:   { from: { transform: 'translateY(8px)', opacity: '0' }, to: { transform: 'translateY(0)', opacity: '1' } },
      },
    },
  },
  plugins: [],
}
export default config
