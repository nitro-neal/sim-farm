const hre = require("hardhat");

async function main() {
  const EggToken = await hre.ethers.getContractFactory("EggToken");
  const eggToken = await EggToken.deploy(0);

  await eggToken.deployed();

  console.log("Egg token deployed to:", eggToken.address);

  await eggToken.mint("0x1321b35170172A0e6a1242bca28C2A1899c39262", 1000000000);

  let balance = await eggToken.balanceOf(
    "0x1321b35170172A0e6a1242bca28C2A1899c39262"
  );

  console.log({ balance });
  //   console.log({ eggToken });

  const MasterChef = await hre.ethers.getContractFactory("MasterChef");
  const masterChef = await MasterChef.deploy(
    eggToken.address,
    "0x1321b35170172A0e6a1242bca28C2A1899c39262",
    "0x1321b35170172A0e6a1242bca28C2A1899c39262",
    1,
    1
  );

  await masterChef.deployed();

  console.log("Masterchef deployed to:", masterChef.address);

  let poolLength = await masterChef.poolLength();
  console.log({ poolLength });

  await masterChef.add(1000, eggToken.address, 0, true);

  poolLength = await masterChef.poolLength();
  console.log({ poolLength });

  //   await network.provider.send("evm_increaseTime", [3600]);
  //   await network.provider.send("evm_mine"); // this one will have 02:00 PM as its timestamp

  //   await masterChef.deposit(0, 1);

  //   let pendingEgg = await pendingEgg(
  //     0,
  //     "0x044344e2360d035ec59e9f5e8dBF63DDf78601c8"
  //   );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
