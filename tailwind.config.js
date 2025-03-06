/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        fontFamily: {
            sans: 'Roboto Mono, monospace',
        },

        extend: {
            height: {
                screen: '100dvh',
            },
        },
    },
    plugins: [require('tailwind-scrollbar-hide')],
};
