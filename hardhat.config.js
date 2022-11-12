/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 require('dotenv').config();
 require("@nomiclabs/hardhat-waffle");
 require("@nomiclabs/hardhat-etherscan");
 const { 
  ALCHEMY_MAINNET_API_KEY,
  ETHERSCAN_API_KEY,
  CONTRACT_OWNER_PRIVATE_KEY,
  ALCHEMY_GOERLI_API_KEY
} = process.env;
 
module.exports = {
  solidity: {
    version: '0.8.11',
    settings: {
      optimizer: {
        enabled: true,
        runs: 5000,
      },
    },
  },
  defaultNetwork: "localhost",
  networks: {
    localhost: {},
    goerli: {
      url: `https://eth-goerli.g.alchemy.com/v2/${ALCHEMY_GOERLI_API_KEY}`,
      accounts: [CONTRACT_OWNER_PRIVATE_KEY]
    },
    mainnet: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_MAINNET_API_KEY}`,
      accounts: [CONTRACT_OWNER_PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  },
  mocha: {
    timeout: 20000
  }
};