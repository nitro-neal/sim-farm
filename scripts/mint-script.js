const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const URI = "ipfs://QmUcqQCLriQiMBwZGfkf6ZGWve6kDeWqG13BkVJxavtdbr";
  const WALLET_ADDRESS = "0x044344e2360d035ec59e9f5e8dBF63DDf78601c8";
  const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const contract = NFT.attach(CONTRACT_ADDRESS);

  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
