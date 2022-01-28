import React, { useState } from "react";
import { putTodos } from "../../service/todo.js";

const InputBlock = (props) => {
	const [inputText, setInputText] = useState("");
	const [selectText, setSelectText] = useState("Normal");

	const onInputChange = (event) => {
		setInputText(event.target.value);
	};

	const onSelectChange = (event) => {
		setSelectText(event.target.value);
	};

	const onButtonClick = (event) => {
		var newTodo = {
			label: inputText,
			category: selectText,
		};
		console.log(newTodo);
		props.addNewTodoIB(newTodo);
	};

	const onButtonClickDeleteAll = (event) => {
		const emptyList = [
			{
				label: "sample todo",
				done: false,
			},
		];

		putTodos(emptyList)
			.then((response) => console.log("Success add:", response))
			.catch((error) => console.log(error));

		props.onDelete([]);
	};

	return (
		<div className="input-group">
			<input
				type="text"
				placeholder="Add Todo"
				className="col-md-6 .offset-md-3 inputText"
				onChange={onInputChange}
			/>
			<select
				onChange={onSelectChange}
				id="category"
				className="form-select ">
				<option>Select category</option>
				<option value="Urgent">Urgent</option>
				<option value="Important">Important</option>
				<option value="Normal">Normal</option>
			</select>
			<button
				type="button"
				className="btn btn-primary btnSave"
				onClick={onButtonClick}>
				Save
			</button>
			<button
				type="button"
				className="btn btn-danger btnDeleteAll"
				onClick={onButtonClickDeleteAll}>
				Delete All
			</button>
		</div>
	);
};

export default InputBlock;
