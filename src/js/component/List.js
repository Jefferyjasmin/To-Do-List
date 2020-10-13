import React, { useState, useEffect } from "react";
import Todo from "./Todo";

const List = () => {
	const [todos, setTodos] = useState([]);

	const [singleTodo, setSingleTodo] = useState({});

	const handleChange = e => {
		setSingleTodo({ label: e.target.value, done: false });
    };
    
    const deleteTodos  = ind =>{

        var newTodos = todos.filter((task,index)=>{
            return index != ind;
        })
    console.log(newTodos);
    }
    setTodos(newTodos);
    fetch("https://assets.breatheco.de/apis/fake/todos/user/Jeffery", {
			method: "PUT",
			body: JSON.stringify(newTodos),
			headers: {
				"Content-Type": "application/json"
			}
        })
        		.then(res => res.json())
			.then(response => console.log("Success:", response))
			.catch(error => console.error("Error:", error));
		 
	};

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jeffery")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				setTodos(responseAsJson);
				// console.log(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}, []);

	const handleClick = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/Jeffery", {
			method: "PUT",
			body: JSON.stringify(todos.concat(singleTodo)),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => res.json())
			.then(response => console.log("Success:", response))
			.catch(error => console.error("Error:", error));
		setTodos([...todos, singleTodo]);
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
			<button onClick={handleClick}>Submit</button>
			<button onClick={handleDelete}>Delete</button>
			{todos.map((task, index) => (
				<Todo todo={task} key={index} />
			))}
		</>
	);
};

export default List;
