import { hexStripZeros } from "ethers/lib/utils";
import { ethers } from "hardhat";

async function main():Promise<void> {
  
  const Transactions=await ethers.getContractFactory("Transactions")
  const transactions=await Transactions.deploy()

  await transactions.deployed()



  console.log(`Transaction deployed to: ${transactions.address}`);
}


async function runMain():Promise<void>{
try {
    await main()
    process.exit(0)

} catch (error) {
console.log(error);
process.exit(1)
  
}
}