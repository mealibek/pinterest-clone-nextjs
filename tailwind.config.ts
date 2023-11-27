import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          color: '#BB0F23',
        }
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    fontFamily: {
      "extra-light": "Inter-ExtraLight",
      "light": "Inter-Light",
      'thin': "Inter-Thin",
      'base': 'Inter-Regular',
      'medium': 'Inter-Medium',
      'bold': 'Inter-Bold',
      'semi-bold': 'Inter-SemiBold',
      'extra-bold': 'Inter-ExtraBold',
      'black': 'Inter-Black'
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}


export default config