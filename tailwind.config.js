/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      dark: '#0a0e27',
      light: '#fafbfc',
      slate: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a',
      },
      primary: '#0369a1',
      secondary: '#0c4a6e',
      tertiary: '#06b6d4',
      accent: '#ec4899',
      success: '#059669',
      danger: '#dc2626',
      white: '#ffffff',
    },

    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xl: '26px',
      },
      boxShadow: {
        soft: '0 2px 8px rgba(15, 23, 42, 0.08)',
        medium: '0 4px 16px rgba(15, 23, 42, 0.12)',
        lg: '0 10px 32px rgba(15, 23, 42, 0.15)',
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
      xs: { max: '479px' },
    },
  },
  plugins: [],
}
