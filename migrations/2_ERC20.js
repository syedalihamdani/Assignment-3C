const ERC20 = artifacts.require("ERC20.sol");

module.exports = function (deployer) {
  deployer.deploy(ERC20,(web3.utils.toWei("4","ether")),"0xe928ebc45ef7bafbafb2e76bd6edcbfc632c19f5",60);
};
//    Replacing 'ERC20'
//    -----------------
//    > transaction hash:    0x64f7d437a41d22bd0fcac3a81bc374eb8a8ce2dd27a119792fb15f21abad57d5
//    > Blocks: 2            Seconds: 21
//    > contract address:    0x2Be0F69b447D2FD95E314E2c0De32eDcD9C4f542
//    > block number:        10899936
//    > block timestamp:     1629806764
//    > account:             0x39602393131d0732C6ABF4dcd90390dE0DCe3c03
//    > balance:             4.484388688098947601
//    > gas used:            1583296 (0x1828c0)
//    > gas price:           1.500000018 gwei
//    > value sent:          0 ETH
//    > total cost:          0.002374944028499328 ETH 