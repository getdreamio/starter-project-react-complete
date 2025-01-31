import { composePlugins, withNx, withReact } from '@nx/rspack';
import mfConfig from './module-federation';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default composePlugins(withNx(), withReact(), (config, ctx) => {
  config.plugins?.push(new ModuleFederationPlugin(mfConfig));

  config.resolve = {
    ...(config.resolve ?? {}),
    alias: {
      ...(config.resolve?.alias ?? {}),
    }
  };

  config.output = {
    ...config.output,
    publicPath: '/'
  };

  config.devServer = {
    ...config.devServer,
	  port: 3000,
    host: '127.0.0.1'
  };

  // if (!config.module) {
  //   config.module = {};
  // }
  // if (!config.module.rules) {
  //   config.module.rules = [];
  // }
  // config.module.rules.push({
  //   test: /.css$/,
  //   use: [
  //     'style-loader',
  //     'css-loader',
  //     {
  //       loader: 'postcss-loader',
  //       options: {
  //         postcssOptions: {
  //           plugins: {
  //             tailwindcss: {},
  //             autoprefixer: {},
  //           },
  //         },
  //       },
  //     },
  //   ],
  // });

  return config;
});