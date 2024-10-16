import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className="footer">
			<div className="container-fluid">
				{/* <Row>
					<Col md={6}>{currentYear} © HD - HD.com</Col>
				</Row> */}
			</div>
		</footer>
	);
}
