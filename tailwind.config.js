/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        "bg-primary": "#f9f9f9",
      },
      width:{
        "60":"60px",
        "57":"57px"
      }
    },
  },
  
}