const fs = require('fs');
const path = require('path');
const abi = require(path.join(process.cwd(), '/artifacts/contracts/vFootballs.sol/vFootballs.json')).abi;
const siteConfig = require(path.join(process.cwd(), 'siteConfig.json'));

module.exports = function (contractAddress) {
  siteConfig.smartContract.abi = abi;
  siteConfig.smartContract.address = contractAddress;
  fs.writeFileSync(path.join(process.cwd(), 'siteConfig.json'), JSON.stringify(siteConfig, null, 2), function (err) {
    if (err) {
      console.log({ err });
      return;
    }
    console.log("ABI updated successfully.")
  })
};