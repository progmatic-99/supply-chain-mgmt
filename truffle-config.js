const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();
const path = require("path");

module.exports = {
  compilers: {
    solc: {
      version: "v0.8.12+commit.f00d7308",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    polygonscan: process.env.POLYGONSCAN_API_KEY
  },
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // match any network
      websockets: true
    }
    ,
    mumbai: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC,
        `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_KEY}`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 6000000,
      gasPrice: 10000000000,
    },
    // host: "178.25.19.88", // Random IP for example purposes (do not use)
    // port: 80,
    // optional config values:
    // maxFeePerGas         - use maxFeePerGas and maxPriorityFeePerGas if creating type 2 transactions (https://eips.ethereum.org/EIPS/eip-1559)
    // maxPriorityFeePerGas -
    // from - default address to use for any transaction Truffle makes during migrations
    // production: - set to true if you would like to force a dry run to be performed every time you migrate using this network (default: false)
    //             - during migrations Truffle performs a dry-run if you are deploying to a 'known network'
    // deploymentPollingInterval: - duration between checks for completion of deployment transactions
    // networkCheckTimeout: - amount of time for Truffle to wait for a response from the node when testing the provider (in milliseconds)
    //                      - increase this number if you have a slow internet connection to avoid connection errors (default: 5000)
    // disableConfirmationListener: - set to true to disable web3's confirmation listener
  }
  

};
