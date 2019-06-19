/* eslint-disable */

const tailwindcss = require('tailwindcss');

const autoprefixer = require('autoprefixer');

// postcss.config.js
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project 
    content: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
        // etc.
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
    plugins: [
        tailwindcss('./tailwind.config.js'),
        autoprefixer(),
        //...process.env.NODE_ENV === 'production' ? [purgecss] : [] 
        ...process.env.NODE_ENV === 'production' ? [] : [] //purge removes assets for vue-datetime picker..
    ]
}