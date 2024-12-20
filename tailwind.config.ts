import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px',   // For single column
        md: '768px',   // For two columns
        lg: '1024px',  // Default three columns
        xl: '1200px',
      },
      maxWidth: {
        container: '1800px',
        grid: '1200px', // Total grid width
      },
      spacing: {
        gutter: '30px', // Space between grid columns
      },
    },
  },
  plugins: [],
} satisfies Config
