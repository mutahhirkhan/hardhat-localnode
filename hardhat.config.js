require("@nomicfoundation/hardhat-toolbox");
const {config} = require('dotenv');
const { resolve } = require("path");


/** @type import('hardhat/config').HardhatUserConfig */
config({ path: resolve(__dirname, "./.env") });


// Ensure that we have all the environment variables we need.
let privateKey;
if (!process.env.PRIVATE_KEY) {
  throw new Error("Please set your PRIVATE_KEY in a .env file");
} else {
  privateKey = process.env.PRIVATE_KEY;
}

let infuraApiKey;
if (!process.env.INFURA_API_KEY) {
  throw new Error("Please set your INFURA_API_KEY in a .env file");
} else {
  infuraApiKey = process.env.INFURA_API_KEY;
}

module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: "https://mainnet.infura.io/v3/" + infuraApiKey,
        blockNumber: 16576287,
      },
      chainId: 31337, // default is 31337
      initialBaseFeePerGas: 0,
    },
  },
  solidity: "0.8.17",
};
