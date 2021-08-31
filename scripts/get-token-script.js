const hre = require("hardhat");

async function main() {
  console.log("start");
  const NFT = await hre.ethers.getContractFactory("MyNFT");

  const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const contract = NFT.attach(CONTRACT_ADDRESS);

  console.log("About to get owner..");
  const owner = await contract.ownerOf(1);

  console.log("Owner:", owner);

  const uri = await contract.tokenURI(1);

  console.log("URI: ", uri);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
