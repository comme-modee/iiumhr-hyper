import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="footer">
			<div className="container-fluid">
				<Row>
					<Col md={6}>{currentYear} © iiumhr</Col>
				</Row>
			</div>
		</footer>
	);
}
