/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
      mono: "var(--font-jetbrainsMono)",
      serif: "var(--font-instrumentSerif)",
      display: "var(--font-instrumentSerif)",
    },
    extend: {
      colors: {
        primary: "#0a0a0c",
        surface: {
          DEFAULT: "#111114",
          raised: "#16161a",
          hover: "#1c1c22",
        },
        ink: {
          DEFAULT: "#f5f5f0",
          muted: "rgba(245,245,240,0.62)",
          dim: "rgba(245,245,240,0.42)",
          faint: "rgba(245,245,240,0.18)",
        },
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187",
          soft: "rgba(0,255,153,0.12)",
        },
        secondary: {
          DEFAULT: "#ffb27a",
          hover: "#ffa161",
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.5", transform: "scale(0.85)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 40s linear infinite",
        "rise-in": "rise-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fade-in 1.2s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
        "pulse-dot": "pulse-dot 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
