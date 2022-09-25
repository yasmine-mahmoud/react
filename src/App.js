import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import BasicCard from "./card";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import Table from "./table";

function App() {
	const [data, setData] = useState();

	const getmovies = (e) => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts`)
			.then((response) => setData(response.data.slice(0, 9)))

			.catch((error) => console.log(error));
	};
	useEffect(() => {
		getmovies();
	}, []);

	const deletemovies = (id) => {
		console.log(id.target.id);
		let newState = [...data];
		newState.splice(id.target.id, 1);
		console.log(newState);
		setData(newState);
	};

	return (
		data && (
			<div className="App">
				<Row>
					{data.map((obj, index) => {
						return (
							<Col xs="8" md="3" key={index}>
								<BasicCard index={index} id={obj.id} title={obj.title} delete={deletemovies} />
							</Col>
						);
					})}
				</Row>
				<Row className="d-flex justify-content-center">
					<Col className="mt-5">
						<Table data={data} delete={deletemovies} />
					</Col>
				</Row>
			</div>
		)
	);
}

export default App;
