module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                green: {
                    100: '#CCFFCC',
                    500: '#00E59D',
                },
                red: {
                    500: '#FF0000',
                },
                blue: {
                    500: '#0071BC',
                    900: '#1B1464',
                },
            },
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
        },
        fontFamily: {
            body: [
                'Gotham Rounded',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Helvetica',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
            ],
            book: [
                'Gotham Rounded Book',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Helvetica',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
            ],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
