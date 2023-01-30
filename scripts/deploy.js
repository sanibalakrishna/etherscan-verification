// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const {ethers} = require("hardhat");

async function main() {
  const verifyContract = await ethers.getContractFactory("Verify");
  const deployedVerifyContract = await verifyContract.deploy();
  deployedVerifyContract.deployed();
  console.log("Verify Contract Address ",deployedVerifyContract.address);

  await sleep(40000);
  await hre.run("verify:verify",{address:deployedVerifyContract.address,constructorArguments:[]})
 
}

function sleep(ms){
  return new Promise((resolve)=>setTimeout(resolve,ms));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().then(()=>process.exit(0)).catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
