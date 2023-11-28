import { Container, Col, Row } from "react-bootstrap";
import "../dist/css/footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <Container className="py-5">
          <Row>
            <Col>
              <img src="./assets/footer/logo.png" alt="" />
              <p>
                Jelajahi semua pengetahuan dan ilmu yang berguna bersama kami,
                untuk kehidupan yang lebih bermanfaat
              </p>
            </Col>
            <Col className="col-2">
              <h4>Informasi</h4>
              <p>Artikel</p>
              <p>Galeri</p>
            </Col>
            <Col className="col-2">
              <h4>Tentang</h4>
              <p>Tentang Kami</p>
              <p>Hubungi Kami</p>
            </Col>
            <Col className="col-2">
              <h4>Kantor Kami</h4>
              <p>Indonesia Unamed road RT 01 RW 02 Surabaya</p>
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
