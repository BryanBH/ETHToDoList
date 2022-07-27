var Tasks = artifacts.require("../contracts/Tasks.sol");

module.exports = function (deployer, network, accounts) {
	deployer.deploy(Tasks);
};
