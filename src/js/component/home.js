import React from "react";
import List from "./List";

//create your first component
export function Home() {
	return (
		<div className="App">
			<h1> todos </h1>
			<div className="App-content">
				<List />
			</div>
		</div>
	);
}
