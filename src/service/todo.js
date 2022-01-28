import TodoList from "../js/component/TodoList.jsx";

export const getTodos = () => {
	return fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/evaNaranjo",
		{ method: "GET" }
	);
};

export const putTodos = (todoList) => {
	return fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/evaNaranjo",
		{
			method: "PUT", // or 'POST'
			body: JSON.stringify(todoList), // data can be a `string` or  an {object} which comes from somewhere further above in our application
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(todoList),
		}
	);
};

export const deleteAllTodo = () => {
	return fetch(
		"https://assets.breatheco.de/apis/fake/todos/user/evaNaranjo",
		{ method: "DELETE" }
	);
};
