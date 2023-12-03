import { Container, Col, Row } from "react-bootstrap";
import "../dist/css/footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
      <Container fluid className="py-5 px-4">
        <Row className="d-md-flex justify-content-between">
          {/* Bagian Logo */}
          <Col md={12} lg={6} className="inagata">
            <img src="./assets/footer/logo.png" alt="" />
            <p className="mt-2 pe-lg-5">
              Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami,
              untuk kehidupan yang lebih bermanfaat
            </p>
          </Col>
          
          {/* Bagian Informasi, Tentang, dan Kantor Kami */}
          <Col md={12} lg={6} className="d-flex mt-4 informasi gap-3 justify-content-between">
            <div className="">
              <h4 className="fw-bold">Informasi</h4>
              <p>Artikel</p>
              <p>Galeri</p>
            </div>
            <div>
              <h4 className="fw-bold">Tentang</h4>
              <p>Tentang Kami</p>
              <p>Hubungi Kami</p>
            </div>
            <div>
              <h4 className="fw-bold">Kantor Kami</h4>
                <p>Indonesia</p>
                <p style={{ whiteSpace: "pre-line" }}>Unamed road RT 01 RW 02</p>
                <p>Surabaya</p>
            </div>
          </Col>
        </Row>
      </Container>
      <Row className="copyright text-center pt-3 mx-auto border-top">
        <p>Copyright © 2021. All rights reserved.</p>
      </Row>
    </div>
    </>
  );
}
