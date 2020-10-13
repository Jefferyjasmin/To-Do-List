import React, { useState } from "react";
import Todo from "./Todo";

const List = () => {
	const [todos, setTodos] = useState([
		{ todo: "first todo" },
		{ todo: "second todo" }
	]);

	const [singleTodo, setSingleTodo] = useState({});
	const handleChange = e => {
		setSingleTodo({ [e.target.value]: e.target.value });

		const handClick = () => {
			setTodos([...todos, singleTodo]);
		};
	};
	return (
		<>
			<form onSubmit={e => e.preventDefault()} />
			<input
				onChange={handleChange}
				type="text"
				name="todo"
				placeholder="Lets Get this work"
			/>
			<button onClick={handClick}>Submit</button>
			{todos.map((value, index) => (
				<Todo todo={value.todo} />
			))}
		</>
	);
};

export default List;
