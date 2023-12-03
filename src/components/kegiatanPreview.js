import { Container, Row, Col, Card, Nav, NavItem } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import data from "../data/kegiatanPreview.json";

export default function BeritaPreview() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      <Container fluid className="px-3">
      <Row className="">
        {jsonData.map((item, index) => (
          <Col xs={12} sm={12} md={4} lg={4} xl={4}>
            <a href="#" className="group text-no-decoration">
              <Card
                style={{ width: "100%", borderRadius: "16px" }}
                className="shadow mb-5 overflow-hidden"
              >
                <Card.Img
                  src={item.img}
                  className="rounded-top"
                  style={{ objectFit: "cover" }}
                />
                <Card.Body className="d-flex align-items-center justify-content-between">
                  <Card.Title className="">{item.title}</Card.Title>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                    fill="#747474"
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
        </Row>
        </Container>
    </>
  );
}
