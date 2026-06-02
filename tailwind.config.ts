import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy:    '#0A1B33',
        eblue:   '#2563FF',
        lgray:   '#F5F7FA',
        slate:   '#64748B',
        charcoal:'#1F2937',
        border:  '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
      borderRadius: {
        btn: '10px',
      },
    },
  },
  plugins: [],
}

export default config
