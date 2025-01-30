import { composePlugins, withNx, withReact } from '@nx/rspack';
import mfConfig from './module-federation';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

module.exports = composePlugins(withNx(), withReact(), (config, ctx) => {
  config.plugins?.push(new ModuleFederationPlugin(mfConfig));

  config.output = {
    ...config.output,
    publicPath: 'auto'
  }

  config.devServer = {
    ...config.devServer,
	port: 3011,
    host: '127.0.0.1'
  }

  return config;
});