import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const addToFavorites = (company) => ({
  type: "ADD_TO_ FAVOURITES",
  payload: company,
});

const Job = ({ data }) => (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: "1px solid #00000033", borderRadius: 4 }}
  >
    <Col xs={2}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={7}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
    <Col xs={3}>
      <Button variant="dark" onClick={() => addToFavorites(data.company_name)}>
        Add to favourites
      </Button>
    </Col>
  </Row>
);

export default Job;
