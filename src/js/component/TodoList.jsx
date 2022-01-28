import React, { useState } from "react";
import propTypes from "prop-types";

const TodoList = (props) => {
	const todoHtml = props.todoList.map((todoObject, index) => {
		let todoClass = "";

		if (todoObject.category == "Important") {
			todoClass = "important";
		} else if (todoObject.category == "Urgent") {
			todoClass = "urgent";
		}

		const onTodoDeleteClick = (idx) => {
			props.deleteTodoCB(idx);
		};

		const onTodoFinishedClick = (idx) => {
			props.finishTodo(idx);
		};

		return (
			<li className={todoClass} key={index}>
				{todoObject.label}
				<div className="form-check">
					<input
						className="form-check-input"
						type="checkbox"
						value=""
						defaultChecked={todoObject.done}
						id="flexCheckDefault"
						onClick={() => {
							onTodoFinishedClick(index);
						}}
					/>
					<label className="form-check-label">finished</label>
				</div>
				<span
					onClick={() => {
						onTodoDeleteClick(index);
					}}>
					X
				</span>
			</li>
		);
	});

	return (
		<div>
			<ul>{todoHtml}</ul>
		</div>
	);
};

TodoList.propTypes = {
	todoList: propTypes.array,
	deleteTodoCB: propTypes.func,
	finishTodo: propTypes.func,
	sortArrayCB: propTypes.func,
};

export default TodoList;
