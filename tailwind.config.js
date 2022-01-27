module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/img/astronomy.jpg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
