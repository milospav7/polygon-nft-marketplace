import "@nomiclabs/hardhat-waffle";
import { readFileSync } from "fs";

const privateKey = readFileSync(".secret").toString();

export const networks = {
  // Local test network
  hardhat: {
    chainId: 1337,
    // accounts will be generated from hardhad automatically
  },
  // Remote network (by infura ethereum)
  mainnet: {
    url: "https://mainnet.infura.io/v3/e7aef8e569b14d52b5229976f1e89a5f",
    accounts: [privateKey], // private key is needed only for remote network in order to connect/interact
  },
};
export const solidity = "0.8.4";
