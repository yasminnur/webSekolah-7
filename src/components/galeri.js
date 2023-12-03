import { Container, Row, Col, Card, Nav, NavItem } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import data from "../data/galeri.json";

export default function BeritaPreview() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      <Container fluid>
        <Row>
          {jsonData.map((item, index) => (
            <Col
              key={index}
              xs={12}
              sm={12}
              md={4}
              lg={4}
              xl={3}
              className="mb-4"
            >
              <Card style={{ width: "100%" }}>
                <Card.Img src={item.img} className="object-cover" />
                <Card.Body className="ps-0">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
