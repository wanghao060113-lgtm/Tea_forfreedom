import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#2E7D32", // 竹青色
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#F8F5F0", // 宣纸白
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#D4AF37", // 暖金色
          foreground: "hsl(var(--accent-foreground))",
        },
        earth: {
          DEFAULT: "#A0522D", // 赭石色
          foreground: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#003A6B", // 黛蓝色
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ['"Noto Sans SC"', '"Source Han Sans SC"', '"Alibaba PuHuiTi"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"LXGW WenKai"', '"Source Han Serif SC"', '"Noto Serif SC"', 'serif'],
        display: ['"LXGW WenKai"', '"Source Han Serif SC"', 'serif'], // 标题字体（霞鹜文楷风格）
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

