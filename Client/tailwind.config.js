export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(59, 130, 246, 0.45)',
        'glow-sm': '0 0 40px -8px rgba(99, 102, 241, 0.35)',
        card: '0 1px 0 0 rgba(15, 23, 42, 0.04), 0 24px 48px -24px rgba(15, 23, 42, 0.12)',
        'card-dark': '0 1px 0 0 rgba(255, 255, 255, 0.06), 0 24px 48px -24px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

