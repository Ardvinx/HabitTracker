import PrimeUI from 'tailwindcss-primeui'

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bitcount: ['Bitcount Grid Double', 'monospace'],
        // or override the default mono font
        mono: ['Bitcount Grid Double', 'ui-monospace', 'SFMono-Regular'],
      },
      colors: {
        primary: {
          0: '#ffffff',
          50: 'var(--p-neutral-50)',
          100: 'var(--p-neutral-100)',
          200: 'var(--p-neutral-200)',
          300: 'var(--p-neutral-300)',
          400: 'var(--p-neutral-400)',
          500: 'var(--p-neutral-500)',
          600: 'var(--p-neutral-600)',
          700: 'var(--p-neutral-700)',
          800: 'var(--p-neutral-800)',
          900: 'var(--p-neutral-900)',
          950: 'var(--p-neutral-950)',
        },
      },
    },
  },
  plugins: [PrimeUI],
}
