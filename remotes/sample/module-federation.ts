import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

type ModuleFederationConfig = ConstructorParameters<typeof ModuleFederationPlugin>[0];

const config: ModuleFederationConfig = {
    name: 'remote_sample',
    filename: 'remoteEntry.js',
    experiments: {
        federationRuntime: 'hoisted',
        externalRuntime: true
    },
    exposes: {
        "./SamplePage": "./src/_app"
    },
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
    }
};
export default config;