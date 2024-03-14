const autoprefixer = require("autoprefixer");

module.exports = {
    content: [
        './Pages/**/*.cshtml',
        './Views/**/*.cshtml'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        autoprefixer
    ],
}