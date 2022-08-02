import React, { useState, useEffect } from "react";
import { taskContract, account0 } from "./config";
import { Form, Button } from "react-bootstrap";

export default function ShowTasks() {
	const [todoList, setTodoList] = useState([]);
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(false);
	const [newTask, setNewTask] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		await taskContract.createTask(newTask);
		setNewTask("");
		setLoading(false);
	};

	const getTasks = async () => {
		const count = await taskContract.getCountTasks();
		setCount(count.c[0]);
		const tasks = [];
		for (let index = 1; index <= count; index++) {
			const element = await taskContract.tasks(index);
			tasks.push(element);
		}
		setTodoList(tasks);
		setLoading(true);
	};

	useEffect(() => {
		getTasks();
	}, [loading]);

	console.log(todoList);
	console.log(count);
	return (
		<>
			<Form onSubmit={handleSubmit}>
				<Form.Group controlId="taskInput">
					<Form.Control
						type="text"
						placeholder="Add New Task"
						value={newTask}
						onChange={(event) => setNewTask(event.target.value)}
					/>
					<Button type="submit">ADD TASK</Button>
				</Form.Group>
			</Form>
			<ul>
				{todoList && todoList.length
					? todoList.map((t) => {
							return (
								<div>
									<li key={t[0].c[0]}>{t[1]}</li>
									{/* <button onClick={deleteTask(index)}> DELETE TASK</button> */}
								</div>
							);
					  })
					: null}
			</ul>

			<div>
				<Button
					onClick={async function deleteTask() {
						await taskContract.deleteTask(3);
						setLoading(false);
					}}>
					DELETE
				</Button>
			</div>
		</>
	);
}
