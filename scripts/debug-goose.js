const hre = require("hardhat");

async function deposit(eggToken, masterChef, masterChefAddress) {
  await eggToken.approve(masterChefAddress, 99999999999);
  await masterChef.deposit(0, 1);
}

async function mint(eggToken) {
  await eggToken.mint(
    "0x1321b35170172A0e6a1242bca28C2A1899c39262",
    10000000000
  );
}

async function main() {
  const eggTokenAddress = "0xABc6c45dBd912d43dB957946E1652443576Bc1ca";
  const EggToken = await ethers.getContractFactory("EggToken");
  const eggToken = await EggToken.attach(eggTokenAddress);

  const masterChefAddress = "0xe9F9D5AE0035c8230c160E29EFA6DB368F1117f1";
  const MasterChef = await ethers.getContractFactory("MasterChef");
  const masterChef = await MasterChef.attach(masterChefAddress);

  let balance = await eggToken.balanceOf(
    "0x1321b35170172A0e6a1242bca28C2A1899c39262"
  );

  console.log({ balance });

  let poolLength = await masterChef.poolLength();
  console.log({ poolLength });

  let poolInfo = await masterChef.poolInfo(0);
  console.log(poolInfo);

  //   await eggToken.approve(masterChefAddress, 99999999999);

  //   await eggToken.mint(
  //     "0x1321b35170172A0e6a1242bca28C2A1899c39262",
  //     10000000000
  //   );

  //   console.log("about to deposit");

  //   await masterChef.deposit(0, 1);

  //   console.log("deposited 1");

  //   await eggToken.transferOwnership(
  //     "0xe9F9D5AE0035c8230c160E29EFA6DB368F1117f1"
  //   );

  //   let pendingEgg = await masterChef.pendingEgg(
  //     0,
  //     "0x1321b35170172A0e6a1242bca28C2A1899c39262"
  //   );

  //   console.log({ pendingEgg });

  //   await masterChef.deposit(0, 0);

  //   await masterChef.add(
  //     1000,
  //     "0xcB1e72786A6eb3b44C2a2429e317c8a2462CFeb1",
  //     0,
  //     true
  //   );

  //   const EggToken = await hre.ethers.getContractFactory("EggToken");
  //   const eggToken = await EggToken.deploy(0);
  //   await eggToken.deployed();
  //   console.log("Egg token deployed to:", eggToken.address);
  //   await eggToken.mint("0x1321b35170172A0e6a1242bca28C2A1899c39262", 1000000000);
  //   let balance = await eggToken.balanceOf(
  //     "0x1321b35170172A0e6a1242bca28C2A1899c39262"
  //   );
  //   console.log({ balance });
  //   //   console.log({ eggToken });
  //   const MasterChef = await hre.ethers.getContractFactory("MasterChef");
  //   const masterChef = await MasterChef.deploy(
  //     eggToken.address,
  //     "0x1321b35170172A0e6a1242bca28C2A1899c39262",
  //     "0x1321b35170172A0e6a1242bca28C2A1899c39262",
  //     1,
  //     1
  //   );
  //   await masterChef.deployed();
  //   console.log("Masterchef deployed to:", masterChef.address);
  //   let poolLength = await masterChef.poolLength();
  //   console.log({ poolLength });
  //   await masterChef.add(1000, eggToken.address, 0, true);
  //   poolLength = await masterChef.poolLength();
  //   console.log({ poolLength });
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
