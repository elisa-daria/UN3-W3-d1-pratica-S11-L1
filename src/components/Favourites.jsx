import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);

  return (
    <Container>
      <Row className="justify-content-center">
        <h1 className="text-center mx-4">FAVOURITES</h1>
        <Col md={8}>
          <ListGroup>
            {favourites.map((company, i) => (
              <ListGroup.Item key={i}>
                <Link to={"/" + company}>{company}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col className="d-flex justify-content-end mt-5">
          <Button variant="link">
            <Link to={"/"}>Back Home</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Favourites;
