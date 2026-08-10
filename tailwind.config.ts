import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Claude Design palette (efero.no artifact)
        navy:     '#00281f',
        eblue:    '#004c3a',
        lgray:    '#f5f7f5',
        slate:    '#3d5c52',
        charcoal: '#141413',
        border:   '#d3ded8',
        mist:     '#d3ded8',
        forest:   '#004c3a',
        ink:      '#00281f',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Instrument Sans', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['var(--font-mono)', 'IBM Plex Mono', 'ui-monospace', 'monospace'],
        serif: ['var(--font-serif)', 'Instrument Serif', 'Georgia', 'serif'],
      },
      maxWidth: {
        site: '1240px',
      },
      borderRadius: {
        btn: '10px',
      },
    },
  },
  plugins: [],
}

export default config
