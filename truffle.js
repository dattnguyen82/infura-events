let HDWalletProvider = require("truffle-hdwallet-provider");
let environment = require('./environment');

module.exports = {
	networks: {
		development: {
			host: '127.0.0.1',
			port: 9545,
			network_id: '*',
			gas: 6721975
		},
		ropsten: {
			network_id: 3,
			provider: () => {
				return new HDWalletProvider(environment.mnemonic, environment.provider_url)
			},
			gas: 3721975
		}
	}
};
