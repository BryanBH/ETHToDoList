import Web3 from "web3";
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

web3.eth.defaultAccount = web3.eth.accounts[0];
const account0 = "0x5aD905451bA539c3571FC57832f173c4e0707508";

const TaskAddress = "0x36d62cdd3aB42D08004dCAe289DE2808206Fd773";

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
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_countTaskIndex",
				type: "uint256",
			},
		],
		name: "deleteTask",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];

const taskContract = web3.eth.contract(taskABI).at(TaskAddress);

export { taskContract, account0 };
