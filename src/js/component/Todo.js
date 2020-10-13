import React from "react";
import PropTypes from "prop-types";

const Todo = ({ todo }) => {
	return <h5> {todo.label} </h5>;
};

export default Todo;

Todo.propTypes = {
	todo: PropTypes.object
};
