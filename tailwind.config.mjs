/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundPosition: {
        box: "left theme(padding.2) top theme(padding.2)",
      },
      backgroundImage: {
        pen: 'url(\'data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="2.25em" height="2.25em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cpath fill="rgb(52, 152, 219)" d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z"%2F%3E%3C%2Fsvg%3E\')',
        quote:
          'url(\'data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="2.25em" height="2.25em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cpath fill="rgb(52, 152, 219)" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"%2F%3E%3C%2Fsvg%3E\')',
      },
    },
  },
  plugins: [],
};
