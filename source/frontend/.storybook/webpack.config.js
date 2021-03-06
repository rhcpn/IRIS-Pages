const path = require('path');
const rootPath = path.resolve(__dirname, '../src');

module.exports = ({config}) => {
    config.module.rules.push(
        {
            test: /\.svg$/,
            use: ['vue-svgicon']
        },
        {
            test: /\.scss$/,
            use: [
                'vue-style-loader',
                'css-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        prependData: `
                        @import '@/assets/main.scss';
                    `
                    }
                }
            ],
        });

    config.resolve.alias['@'] = rootPath;
    return config;
}
