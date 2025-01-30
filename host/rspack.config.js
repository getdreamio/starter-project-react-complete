const { withBaseRspack } = require("@dream.mf/bundlers");
const { join } = require('node:path');

const config = withBaseRspack({
    devServer: { port: 3001 },
    federationConfig: { name: "container" }
}, true);

// Add tailwindcss support
config.module.rules.push({
  test: /.css$/,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
      },
    },
  ],
});

module.exports = config;
