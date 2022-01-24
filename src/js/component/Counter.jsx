import React from "react";
import propTypes from "prop-types";

const Counter = (props) => {
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Total</th>
						<th scope="col">Important</th>
						<th scope="col">Urgent</th>
						<th scope="col">Finished</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{props.allTodo}</td>
						<td>{props.impTodo}</td>
						<td>{props.urgTodo}</td>
						<td>{props.finishTodo}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

Counter.propTypes = {
	allTodo: propTypes.number,
	impTodo: propTypes.number,
	urgTodo: propTypes.number,
	finishTodo: propTypes.number,
};

export default Counter;
