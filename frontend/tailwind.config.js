module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: { 950: '#020617' },
        emerald: { 500: '#10b981' },
        amber: { 500: '#f59e0b' },
        red: { 500: '#ef4444' },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}