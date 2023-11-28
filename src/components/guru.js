import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import data from "../data/guru.json";

export default function Guru() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      <Row className="d-flex flex-wrap">
        {jsonData.map((item, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3} xl={3} className="bio">
            <a href="#" className="group">
              <Card className=""
                style={{ width: "100%", height: "408px", marginBottom: "32px"}}
              >
                <Card.Img
                  style={{ objectFit: "cover", height: "320px", borderRadius:"24px" }}
                  // variant="top"
                  src={item.img}
                  className="foto"
                />
                <Card.Body style={{paddingTop: "24px"}}>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.position}</Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      {/* <Container>
            <Row>
              <h1>Guru Staff Sekolah</h1>
            </Row>
                <Row className="d-flex flex-wrap">
                {jsonData.map((item, index) => (
          <a key={index} href="#" className="group">
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        {item.position}
        </Card.Text>
      </Card.Body>
                        </Card>
                        </a>
        ))}
            </Row>
          </Container> */}
    </>
  );
}
