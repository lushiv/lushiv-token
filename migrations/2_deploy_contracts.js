const LushivToken = artifacts.require("LushivToken");
var SaleLushivToken = artifacts.require("./SaleLushivToken.sol");

module.exports = function (deployer) {
  deployer.deploy(LushivToken,1000000).then(function() {
    // Token price is 0.001 Ether
    var tokenPrice = 1000000000000000;
    return deployer.deploy(SaleLushivToken, LushivToken.address, tokenPrice);
  });
};