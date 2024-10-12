import { HardhatUserConfig } from "hardhat/config";
import { vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";




const SEPOLIA_PRIVATE_KEY = vars.get("SEPOLIA_PRIVATE_KEY")


const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    // for testnet
    //url: 'https://rpc.sepolia-api.lisk.com
    "base-sepolia": {
      url: "https://sepolia.base.org",
      accounts: [SEPOLIA_PRIVATE_KEY],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    // Use "123" as a placeholder, because Blockscout doesn't need a real API key, and Hardhat will complain if this property isn't set.
    apiKey: {
      "base-sepolia": "UGXE2P7JTA2NIEIRB23EK7UIBPESQRTVCN",
    },
    customChains: [
      {
        network: "base-sepolia",
        chainId: 84532,
        urls: {
          apiURL: "https://api-sepolia.basescan.org/api",
          browserURL: "https://sepolia.basescan.org",
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
};




export default config;
