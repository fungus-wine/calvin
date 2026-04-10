/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.md',
    './build-log/**/*.html',
  ],
  theme: {
    extend: {
      typography: ({ theme }) => ({
        invert: {
          css: {
            '--tw-prose-pre-bg': '#1e293b',
            '--tw-prose-pre-code': '#94a3b8',
            'pre': {
              borderRadius: theme('borderRadius.lg'),
              padding: '1rem 1.25rem',
              lineHeight: '1.6',
            },
            'code': {
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '6px',
              padding: '0.15em 0.4em',
              fontWeight: '400',
            },
            'code::before': { content: 'none' },
            'code::after': { content: 'none' },
            'img': {
              borderRadius: theme('borderRadius.xl'),
              border: `1px solid ${theme('colors.gray.700')}`,
              width: '100%',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
