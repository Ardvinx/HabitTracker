export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bitcount: ['Bitcount Grid Double', 'monospace'],
        // or override the default mono font
        mono: ['Bitcount Grid Double', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [],
}
