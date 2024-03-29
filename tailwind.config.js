/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
  ],
  theme: {
    fontFamily: {
      'sans': ['Play', 'Helvetica', 'Arial', 'sans-serif' ],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald',],
      'body': ['"Open Sans"',],
    },
    extend: {
      screens: {
        sm: '520px',
        md: '820px',
        lg: '1140px',
        xl: '1440px',
      },
      container: {
        center: true,
      },
      colors: {
        'yellow-450': '#f8dc08',
        'yellow-550': '#baa50a',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
