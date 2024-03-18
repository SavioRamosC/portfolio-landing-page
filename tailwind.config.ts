import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // primary: '#32373B',
        // secondary: '#F4B860',
        // tertiary: '#4A5859',
        primary: '#bb0000',
        secondary: '#212121',
        tertiary: '#ffffff',
        quaternary: '#cdcdcc',
      },
    },
  },
  plugins: [],
};
export default config;
