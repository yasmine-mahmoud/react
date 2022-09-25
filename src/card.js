import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function BasicCard(props) {
	return (
		<Card className="mt-3" style={{ width: "18rem" }}>
			<Card.Body className="test mr=8">
				<Card.Title>{props.id}</Card.Title>
				<Card.Text>{props.title.length <= 12 ? props.title : props.title.slice(0, 11)}</Card.Text>
			</Card.Body>
			<Button id={props.index} variant="danger" onClick={props.delete}>
				Delete
			</Button>
		</Card>
	);
}

export default BasicCard;
