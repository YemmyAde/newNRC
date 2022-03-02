
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      san: ["'DM Sans'", "sans-serif"],
      lora: ["Lora", "sans-serif"],
      karla: ["karla", "sans-serif"],
    },
  },
  backgroundImage: {
        'banner': "url('/images/OsibanjoBanner.JPG')",
        'banner2': "url('/images/OsibanjoBanner2.JPG')",
        'banner3': "url('/images/OsibanjoBanner3.JPG')",

      },
  },
  plugins: [],
}