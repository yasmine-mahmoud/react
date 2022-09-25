import React from "react";
import { Button } from "react-bootstrap";

function Table(props) {
	return (
		<div className="table">
			{props.data && (
				<table style={{ width: "60%" }}>
					<table id="data"></table>
					{props.data.map((obj, index) => {
						return (
							<tr>
								<td>{obj.id}</td>
								<td>{obj.title}</td>
								<Button index={index} id={index} color="red" onClick={props.delete}>
									Delete
								</Button>
							</tr>
						);
					})}
				</table>
			)}
		</div>
	);
}
export default Table;
