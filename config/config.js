const path = require('path');

const PUBLIC_PATH = 'ABSOLUTE_URL_HERE';
const themeColor = '#428bca';
const bgColor = '#ffffff';

module.exports = {
  title: 'Website Title',
  PUBLIC_PATH,
  preCache: {
    cacheId: 'website-cache-id',
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    filename: 'service-worker.js',
    minify: true,
    navigateFallback: `${PUBLIC_PATH}index.html`,
    staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
  },
  manifest: {
    name: 'PWA Title',
    short_name: 'Short Title', // 12 Charachters max.
    description: 'Give us a description',
    background_color: bgColor,
    theme_color: themeColor,
    'theme-color': themeColor,
    start_url: PUBLIC_PATH,
    icons: [
      {
        src: path.resolve('src/core/assets/images/PWA_Icon.jpg'),
        sizes: [96, 128, 192, 256, 384, 512],
        destination: path.join('assets', 'icons'),
      },
    ],
  },
};
