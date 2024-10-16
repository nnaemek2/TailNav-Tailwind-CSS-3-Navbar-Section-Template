const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "node_modules/preline/dist/*.js",
    ],
    darkMode: ['class'],
    theme: {

        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1rem',
                md: '1rem',
                lg: '1rem',
                xl: '2rem',
                '2xl': '10rem',
            },
        },

        fontFamily: {
            'body': ['Nunito', 'sans-serif'],
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('preline/plugin'),
    ],
}