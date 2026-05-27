/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#08111f",
        slateblue: "#17304f",
        mist: "#dff4ff",
        ember: "#ff7a18",
        coral: "#ff4d6d",
        lime: "#caff70",
        cyan: "#62f3ff"
      },
      fontFamily: {
        sans: ["Sora", "Avenir Next", "Segoe UI", "sans-serif"],
        display: ["Space Grotesk", "Sora", "sans-serif"],
        mono: ["JetBrains Mono", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        glow: "0 20px 80px rgba(98, 243, 255, 0.18)",
        card: "0 24px 90px rgba(7, 14, 26, 0.28)"
      },
      animation: {
        "float-slow": "float 9s ease-in-out infinite",
        "float-delay": "float 12s ease-in-out infinite 1.5s",
        "pulse-grid": "pulseGrid 12s linear infinite",
        "marquee": "marquee 24s linear infinite",
        "tilt": "tilt 7s ease-in-out infinite",
        "shine": "shine 3.5s linear infinite",
        "drift": "drift 16s ease-in-out infinite",
        "beam": "beam 6s linear infinite",
        "beam-delay": "beam 7.5s linear infinite 1.2s"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" }
        },
        pulseGrid: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(-20px, -12px, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        tilt: {
          "0%, 100%": { transform: "rotate(-2deg) scale(1)" },
          "50%": { transform: "rotate(2deg) scale(1.02)" }
        },
        shine: {
          "0%": { transform: "translateX(-140%) skewX(-18deg)" },
          "100%": { transform: "translateX(220%) skewX(-18deg)" }
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "50%": { transform: "translate3d(22px, -18px, 0) scale(1.06)" }
        },
        beam: {
          "0%": { transform: "translateX(-35%)", opacity: "0" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { transform: "translateX(35%)", opacity: "0" }
        }
      },
      backgroundImage: {
        "hero-grid": "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};
