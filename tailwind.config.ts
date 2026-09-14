import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dt: {
          navy: "#063F6B",
          blue: "#075B8F",
          deepBlue: "#0B4F7D",
          teal: "#0B9E9A",
          green: "#2AAA45",
          lime: "#66C83D",
          mint: "#DFF7EF",
          ice: "#EEF8FB",
          white: "#FFFFFF",
          text: "#083A67",
          muted: "#5E7690",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      borderRadius: {
        button: "9999px",
        card: "22px",
        panel: "28px",
      },
      boxShadow: {
        dt: "0 18px 45px rgba(3, 66, 108, 0.12)",
        "dt-card": "0 10px 30px rgba(6, 63, 107, 0.08)",
        "dt-hover": "0 16px 36px rgba(6, 63, 107, 0.14)",
        "dt-panel": "0 22px 60px rgba(3, 66, 108, 0.22)",
      },
      maxWidth: {
        reference: "1122px",
        desktop: "1380px",
      },
    },
  },
  plugins: [],
};
export default config;
