/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {},
      maxWidth: {
        sm: "640px", // Small screens (e.g., smartphones)
        md: "768px", // Medium screens (e.g., tablets)
        lg: "1024px", // Large screens (e.g., laptops)
        xl: "1280px", // Extra large screens (e.g., desktops)
      },
      backgroundImage: {
        "header-background": "url('/src/assets/background.jpg')",
      },
    },
  },
  plugins: [],
};
