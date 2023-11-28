import { Container, Row, Col, Card, Nav, NavItem } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import data from "../data/berita.json";

export default function BeritaPreview() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      <Row className="mx-auto">
        {jsonData.map((item, index) => (
          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <a href="#" className="group text-no-decoration">
              <Card
                style={{ width: "100%", height: "496px", borderRadius: "16px" }}
                className="shadow mb-5 overflow-hidden"
              >
                <Card.Img
                  variant="top"
                  src={item.img}
                  className="rounded-top"
                  style={{ objectFit: "cover", maxHeight: "320px" }}
                />
                <Card.Body className="">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </>
  );
}
