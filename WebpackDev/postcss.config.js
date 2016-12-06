module.exports = {
    plugins: {
        'postcss-partial-import': {},
        'postcss-cssnext': {
            browsers: ['last 5 versions', '> 5%'],
        }

    },
};

const postcss = require('postcss'),
    rucksack = require('rucksack-css');
postcss([ rucksack() ])
    .process(scss, { from: 'frontend/main.scss', to: 'app.css' })
    .then(function (result) {
        fs.writeFileSync('app.bundle.css', result.css);
        if ( result.map ) fs.writeFileSync('app.bundle.map', result.map);
    });

