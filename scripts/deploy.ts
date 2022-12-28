import { ethers } from "hardhat";

async function main() {


  const Whitelist = await ethers.getContractFactory("Whitelist")
  const whitelist = await Whitelist.deploy(10)

  await whitelist.deployed();

  console.log(`Whitelist deployed to ${whitelist.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
.then(()=> process.exit(0))
.catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
