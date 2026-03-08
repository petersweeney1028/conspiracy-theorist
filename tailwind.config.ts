import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-mono)", "IBM Plex Mono", "monospace"],
        serif: ["var(--font-serif)", "Source Serif 4", "Georgia", "serif"],
      },
      colors: {
        bg: {
          DEFAULT: "var(--bg)",
          surface: "var(--bg-surface)",
          card: "var(--bg-card)",
        },
        border: "var(--border)",
        text: {
          DEFAULT: "var(--text)",
          muted: "var(--text-muted)",
        },
        confirmed: "var(--confirmed)",
        unresolved: "var(--unresolved)",
        debunked: "var(--debunked)",
        accent: "var(--accent)",
      },
    },
  },
  plugins: [],
};

export default config;
