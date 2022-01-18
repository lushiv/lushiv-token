const LushivToken = artifacts.require("LushivToken");

module.exports = function (deployer) {
  deployer.deploy(LushivToken);
};
