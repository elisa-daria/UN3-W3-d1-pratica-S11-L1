import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Link from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);
  const dispatch = useDispatch();
  const handleAddFavourites = (company) =>
    dispatch({ type: "ADD_TO_ FAVOURITES", payload: company });
  return (
    <Container>
      <Row className="justify-content-center">
        <h1>FAVOURITES</h1>
        <Col md={8}>
          <ListGroup>
            {favourites.map((company) => (
              <ListGroup.Item key={company}>
                <Link
                  to={`/${company}`}
                  onClick={() => handleAddFavourites(company)}
                ></Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};
export default Favourites;
