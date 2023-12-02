import { Container, Row, Col, Card, Nav, NavItem } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import data from "../data/sponsor.json";

export default function KegiatanPreview() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
     <Row className="gambar justify-content-center align-items-center mx-auto my-auto">
  {jsonData.map((item, index) => (
    <Col key={index} xs={6} sm={6} md={3} lg={1} xl={1} className="group mx-lg-auto my-3">
      <a href="#" className="text-no-decoration">
        <img
          src={item.img}
          alt=""
          className=""
          style={{ objectFit: "cover", maxWidth: "100px" }}
        />
      </a>
    </Col>
  ))}
</Row>


       {/* <Row className="gambar justify-content-center mx-auto">
      {jsonData.map((item, index) => (
        <Col key={index} xs={6} sm={6} md={1} xl={1} className="group">
          <a href="#" className="text-no-decoration">
            <img
              src={item.img}
              alt=""
              className="bg-primary"
              style={{ objectFit: "cover", maxWidth: "100px" }}
            />
          </a>
        </Col>
      ))}
    </Row> */}
    </>
  );
}
