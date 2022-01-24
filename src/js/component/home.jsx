import React, { useState } from "react";

import Counter from "./Counter.jsx";
import TodoList from "./TodoList.jsx";
import InputBlock from "./InputBlock.jsx";

const Home = () => {
	const [todoList, setTodoList] = useState([]);

	const addNewTodo = (newTodo) => {
		newTodo.finished = false;
		setTodoList(sortArray([...todoList, newTodo]));
	};

	const deleteTodo = (index) => {
		let newTodoList = [...todoList];
		newTodoList.splice(index, 1);
		newTodoList = sortArray(newTodoList);
		setTodoList(newTodoList);
	};

	const finishTodo = (index) => {
		let newTodoList = [...todoList];
		newTodoList[index].finished = !newTodoList[index].finished;
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
		if (todo.finished) {
			countFinishTodo += 1;
		}
	});

	console.log(todoList);

	return (
		<div>
			<h1 className="text-center mt-5">Todos</h1>
			<InputBlock addNewTodoIB={addNewTodo} />
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
