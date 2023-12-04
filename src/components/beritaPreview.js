import { Container, Row, Col, Card, Nav, NavItem } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import data from "../data/beritaPreview.json";

export default function GaleriPreview() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      <Container fluid className="">
  <Row className="">
    {jsonData.map((item, index) => (
      <Col key={index} xs={12} sm={12} md={4} lg={4} xl={3} className="mb-4">
        <Card style={{ width: "100%" }}>
          <Card.Img src={item.img} className="object-cover" />
          <Card.Body className="ps-0">
            <Card.Text>{item.date}</Card.Text>
            <Card.Title>{item.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
      </Container>
    </>
  );
}
