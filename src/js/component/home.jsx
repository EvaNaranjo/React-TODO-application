import React, { useState, useEffect } from "react";

import Counter from "./Counter.jsx";
import TodoList from "./TodoList.jsx";
import InputBlock from "./InputBlock.jsx";
import { getTodos } from "../../service/todo.js";
import { putTodos } from "../../service/todo.js";

const Home = () => {
	const [todoList, setTodoList] = useState([]);

	const getAllTodos = () => {
		getTodos()
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setTodoList(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const putAllTodos = (todoList) => {
		putTodos(todoList)
			.then((response) => console.log("Success add:", response))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		getAllTodos();
	}, []);

	console.log({ todoList });

	const addNewTodo = (newTodo) => {
		newTodo.done = false;
		const newList = sortArray([...todoList, newTodo]);
		setTodoList(newList);
		putAllTodos(newList);
	};

	const deleteTodo = (index) => {
		let newTodoList = [...todoList];
		newTodoList.splice(index, 1);
		newTodoList = sortArray(newTodoList);
		setTodoList(newTodoList);
		putAllTodos(todoList);
	};

	const finishTodo = (index) => {
		let newTodoList = [...todoList];
		newTodoList[index].done = !newTodoList[index].done;
		setTodoList(newTodoList);
	};

	const sortArray = (todoList) => {
		const sortList = todoList.sort(function (a, b) {
			let catValue = {
				Urgent: 0,
				Important: 1,
				Normal: 2,
			};

			if (catValue[a.category] > catValue[b.category]) {
				return 1;
			}
			if (catValue[a.category] < catValue[b.category]) {
				return -1;
			}
			// a must be equal to b
			return 0;
		});

		return sortList;
	};

	var countImportantTodo = 0;
	todoList.forEach(function (todo) {
		if (todo.category == "Important") {
			countImportantTodo += 1;
		}
	});

	var countUrgentTodo = 0;
	todoList.forEach(function (todo) {
		if (todo.category == "Urgent") {
			countUrgentTodo += 1;
		}
	});

	var countFinishTodo = 0;
	todoList.forEach(function (todo) {
		if (todo.done) {
			countFinishTodo += 1;
		}
	});

	console.log(todoList);

	return (
		<div>
			<h1 className="text-center mt-5">Todos</h1>
			<InputBlock addNewTodoIB={addNewTodo} onDelete={setTodoList} />
			<TodoList
				finishTodo={finishTodo}
				deleteTodoCB={deleteTodo}
				todoList={todoList}
				sortArrayCB={sortArray}
			/>
			<Counter
				allTodo={todoList.length}
				impTodo={countImportantTodo}
				urgTodo={countUrgentTodo}
				finishTodo={countFinishTodo}
			/>
		</div>
	);
};

export default Home;
