var Presale = artifacts.require("./Presale.sol");
var config = require('./config.json');

module.exports = function(deployer) {
  deployer.deploy(Presale, config.ManagerForPresale);
};
