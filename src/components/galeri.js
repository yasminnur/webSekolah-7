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
      <div className="d-flex flex-wrap gap-4 gap-md-5 gap-lg-4">
        {jsonData.map((item, index) => (
          <a href="#" className="group">
            <Col xs={12} sm={12} md={4} lg={4} xl={2}>
              <Card
                style={{ width: "18rem" }}
                className=""
              >
                <Card.Img src={item.img} className="object-cover" />
                <Card.Body className="ps-0">
                  <Card.Title className="">{item.title}</Card.Title>
                  <Card.Text className="">{item.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </a>
        ))}
        </div>
    </>
  );
}
