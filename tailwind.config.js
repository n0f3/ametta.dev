module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // colors: {
      //   'accent-1': '#333',
      //   'dracula-background': '#22212C',
      //   'dracula-comment': '#7970A9',
      //   'dracula-foreground': '#F8F8F2',
      //   'dracula-selection': '#454158',
      //   'dracula-green': '#8AFF80',
      //   'dracula-pink': '#FF80BF',
      //   'dracula-purple': '#FF80BF',
      //   'dracula-cyan': '#80FFEA',
      //   'dracula-orange': '#FFCA80',
      //   'dracula-red': '#FF9580',
      //   'dracula-yellow': '#FFFF80',
      // },
    },
  },
  variants: {},
  plugins: [],
};
