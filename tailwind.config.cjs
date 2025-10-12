// tailwind.config.cjs
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                pageBg: "var(--color-bg)",
                pageText: "var(--color-text)"
            }
        },
    },
    plugins: [],
};
