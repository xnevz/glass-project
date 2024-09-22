/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{html,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    corePlugins: {
    },
    plugins: [],
    safelist: [
        {
            pattern: /(text|fill|bg|shadow|border|stroke)-([a-z]+)-([1-9]00)/,
            variants: ['hover', 'focus', '&_*'],
        }
    ]
}

