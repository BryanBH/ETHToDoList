import "./App.css";
import ShowTasks from "./ShowTasks";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { taskContract } from "./config";

function App() {
	const [newTask, setNewTask] = useState("");

	async function handleSubmit(event) {
		// event.preventDefault();
		await taskContract.createTask(newTask);
		setNewTask("");
	}
	return (
		<div className="App">
			<header className="App-header">
				<h1>ETH Todo list</h1>
				<p>Blockchain final project</p>

				<Form onSubmit={handleSubmit}>
					<Form.Group controlId="taskInput">
						<Form.Control
							type="text"
							placeholder="Add New Task"
							onChange={(event) => setNewTask(event.target.value)}
						/>
						<Button type="submit">ADD TASK</Button>
					</Form.Group>
				</Form>

				<ShowTasks />
			</header>
		</div>
	);
}

export default App;
