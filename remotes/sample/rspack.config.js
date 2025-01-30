const { withBaseRspack } = require("@dream.mf/bundlers");

const config = withBaseRspack({
	devServer: { port: 3010 },
	federationConfig: {
		name: "remote_sample",
		exposes: {
			"./SamplePage": "./src/_app"
		},
	},
}, true);

module.exports = config;
