import "./App.css";
import ShowTasks from "./ShowTasks";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { taskContract } from "./config";

function App() {
	
	return (
		<div className="App">
			<header className="App-header">
				<h1>ETH Todo list</h1>
				<p>Blockchain final project</p>
				<ShowTasks />
			</header>
		</div>
	);
}

export default App;
