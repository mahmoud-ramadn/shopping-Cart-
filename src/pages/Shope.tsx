import storItems from "../data/data.json";
import { Row, Col } from "react-bootstrap";
import StoreItem from "../components/StorItem/StoreItem";
const Shope = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} xl={1} className="g-3">
        {storItems.map((e) => (
          <Col key={e.id}>
            <StoreItem {...e} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Shope;
