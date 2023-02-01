/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        extend: {
            backgroundImage: {
                'main-bg': "url('/img/section-1/section-1bg.jpeg')",
                'shop-new': "url('/img/section-1/shop-new.jpeg')",
                'shop-bestsellers': "url('/img/section-1/shop-bestsellers.jpeg')",
            },
            colors: {
                myRed: '#f03d3d',
                myGray: '#F6F7F1',
            },
        },
    },
    plugins: [],
}
