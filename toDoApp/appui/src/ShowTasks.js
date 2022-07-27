import React, { useState, useEffect } from "react";
import { taskContract, account0 } from "./config";

export default function ShowTasks() {
	const [todoList, setTodoList] = useState([]);
	const [loading, setLoading] = useState(false);

	// const testing = taskContract.setTasks("Testing Task");
	// console.log(testing)

	const getTasks = async () => {
		const count = await taskContract.getCountTasks();
		// console.log(count);
		const tasks = [];
		for (let index = 1; index <= count; index++){
		const element = await taskContract.tasks(index);
		// console.log(element)
			tasks.push(element);
		}
		setTodoList(tasks);
		setLoading(true)
	};
	useEffect(() => {
		getTasks();
	}, [loading]);

	console.log(todoList);
	return (
		<ul>
			{todoList && todoList.length
				? todoList.map((t, index) => <li key={index}>{t[1]}</li>)
				: null}
		</ul>
	);
}
