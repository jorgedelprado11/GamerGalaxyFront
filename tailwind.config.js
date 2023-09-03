/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-1': '0 12px 24px rgba(0, 0, 0, 0.5), 0 6px 12px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};

/* @import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities'; */