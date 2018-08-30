# Owned smart contract
This is a very simple, smart contract which allows users to bid on contract ownership.  It heavily leverage the [Truffle Framework](https://truffleframework.com/) for development.

## Getting started

To use this project, it must be compiled and deployed.  The smart contract can be deployed locally, on testnet, or mainnet.

### Prerequesites

* [Truffle Framework](https://truffleframework.com/)
* [Infura](https://www.infura.io/)
* [Ganache](https://truffleframework.com/ganache) - optional
* [Metamask](https://metamask.io/) - optional
* [Parity UI](https://github.com/parity-js/shell) - optional


The only real prerequesite is the [Truffle Framework](https://truffleframework.com/) and an account on [Infura](https://www.infura.io/).  The others are not necessary but can make development/testing easier.


### Build

```
truffle compile
```

This will generate the contract json files in the /build directory.  The json files are important because they contain the contract ABI and bytecode used to deploy the smart contract.


### Test

Before running the tests, start [Ganache](https://truffleframework.com/ganache) on your local machine.

```
truffle test
```

### Deploy


This project is setup to deploy to either a local blockchain instance (Ganache) or the Infura.io provided blockchain.  Please update truffle.js with the proper credentials.


