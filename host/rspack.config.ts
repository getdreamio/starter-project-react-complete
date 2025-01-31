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
	  port: 3001,
    host: '127.0.0.1'
  };

  return config;
});