import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

type ModuleFederationConfig = ConstructorParameters<typeof ModuleFederationPlugin>[0];

const config: ModuleFederationConfig = {
    name: 'host',
    filename: 'remoteEntry.js',
    experiments: {
        federationRuntime: 'hoisted',
        provideExternalRuntime: true
    },
    remotes: {},
    shared: {
        "react": {
            singleton: true
        },
        "react-dom": {
            singleton: true
        },
        "react-router": {
            singleton: true
        },
        "react-router-dom": {
            singleton: true
        }
    },
};
export default config;