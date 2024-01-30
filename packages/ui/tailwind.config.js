/** @type {import('tailwindcss').Config} */

import {nextui} from "@nextui-org/react";

const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"

    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        customText1: '#3f3cbb', //purple
        customText2: '#00FF00', // Green
        customText3: '#0000FF', // Blue
        customText4: '#FFFF00', // Yellow
        customText5: '#FF00FF', // Magenta

        customBg1: '#FFA07A', // Light Salmon
        customBg2: '#90EE90', // Light Green
        customBg3: '#ADD8E6', // Light Blue
        customBg4: '#F0E68C', // Khaki
        customBg5: '#D8BFD8', // Thistle

      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      margin: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
      },
      padding: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

