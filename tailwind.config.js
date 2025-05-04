/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'irrigation-blue': '#164e7a',
        'irrigation-darkBlue': '#0d3654',
        'irrigation-green': '#4aa24d',
        'irrigation-darkGreen': '#2b602d', // Darkened for better contrast
        'irrigation-gray': '#f5f5f5',
        'irrigation-a11y': {
          'green': '#2b602d',     // Accessible green for text on light backgrounds
          'blue': '#0d3654',      // Accessible blue for text on light backgrounds
          'light': '#f8f9fa',     // Light color for text on dark backgrounds
          'light-green': '#c8e6c9', // Light green with good contrast on dark backgrounds
          'light-blue': '#cfe8ff',  // Light blue with good contrast on dark backgrounds
          'gray-dark': '#555555',   // Dark gray with good contrast on light backgrounds
          'gray-light': '#e0e0e0',  // Light gray with good contrast on dark backgrounds
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}
