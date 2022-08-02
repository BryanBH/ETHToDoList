import Web3 from "web3";
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

web3.eth.defaultAccount = web3.eth.accounts[0];
const account0 = "0x0D525FD2E45A0739464369201569c25291c6faDE";

const TaskAddress = "0x5DB0Fca27Ca11e77FAdECAedB89ef6DF4fe794EA";

const taskABI = [
	{
		inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		name: "tasks",
		outputs: [
			{ internalType: "uint256", name: "id", type: "uint256" },
			{ internalType: "string", name: "content", type: "string" },
			{ internalType: "bool", name: "complete", type: "bool" },
		],
		stateMutability: "view",
		type: "function",
		constant: true,
	},
	{
		inputs: [],
		name: "getCountTasks",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
		constant: true,
	},
	{
		inputs: [{ internalType: "string", name: "_content", type: "string" }],
		name: "createTask",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

const taskContract = web3.eth.contract(taskABI).at(TaskAddress);

export { taskContract, account0 };
