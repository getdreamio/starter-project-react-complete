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
  }

  return config;
});