import { Container, Row, Col, Card, Nav, NavItem } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import data from "../data/galeriPreview.json";

export default function GaleriPreview() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
   <Container fluid className="px-3">
  <div className="jarak d-flex flex-wrap flex-md-nowrap justify-content-center gap-3">
    {jsonData.map((item, index) => (
      <a href="#" className="group" key={index}>
        <Col>
          <Card style={{ width: '100%', height: '100%' }}>
            <Card.Img src={item.img} className="object-cover" />
            <Card.Body className="ps-0">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.desc}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </a>
    ))}
  </div>
</Container>


      {/* <Container fluid className="px-3">
      <div className="jarak d-flex justify-content-center gap-3">
        {jsonData.map((item, index) => (
          <a href="#" className="group">
             <Col key={index} xs={12} sm={12} md={4} lg={4} xl={2}>
            <Card style={{ width: "18rem"}}>
              <Card.Img src={item.img} className="object-cover" />
              <Card.Body className="ps-0">
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          </a>
        ))}
      </div>
      </Container> */}
      {/* <Container fluid className="px-3">
        aaa
      <Row className="d-flex justify-content-center">
        {jsonData.map((item, index) => (
          <Col key={index} xs={12} sm={12} md={4} lg={4} xl={2} className="mb-4">
            <Card style={{ width: "100%"}}>
              <Card.Img src={item.img} className="object-cover" />
              <Card.Body className="ps-0">
                <Card.Text>{item.date}</Card.Text>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container> */}
    </>
  );
}
