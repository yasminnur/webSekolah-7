import { Container, Row, Col, Button } from "react-bootstrap";
import "../dist/css/kontak.css";
export default function Kontak() {
  return (
    <>
      {/* SECTION 1 */}
      <section className="section1 px-4">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center text-center text-md-start">
              <Col md="6" className="text">
                <img
                  src="./assets/beranda/logo.png"
                  alt=""
                  className="logo img-fluid p-3 p-md-0 p-lg-0"
                />
                <div className="tulisan">
                  <h1 className="fs-1 fw-bold">Kontak</h1>
                  <p className="fs-5">
                    Anda Membutuhkan Bantuan Bertanya Atau Sekedar Berbincang
                    Kami Siap Membantu
                  </p>
                </div>
              </Col>
              <Col md="6" className="pt-lg-0 pt-5 text-center">
                <img
                  src="../assets/kontak/utama.png"
                  alt="ilustrasi"
                  className="img-fluid mx-auto"
                />
              </Col>
            </Row>
          </Container>
        </header>
      </section>

      {/* SECTION 2 */}
      <section className="kontak2 px-4">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container fluid className="text-center text-md-start">
            <Row className="d-flex justify-content-between">
              <Col className="mb-3 mb-lg-0">
                <h1 className="">
                  Kontak <br /> Kami
                </h1>
                <p className="fs-5 mt-md-5">
                  Untuk Setiap Pertanyaan, perkiraan proyek atau Katakan saja
                  Halo Get Touch Anda dapat menelepon atau mengobrol Bersama
                  kami
                </p>
              </Col>
              <Col className="infor">
                <h4 className="mb-2 mb-lg-0">Number</h4>
                <p>(229) 555-0109</p>
                <p>(405) 555-0128</p>
                <h4>Office Address</h4>
                <p>4140 Parker Rd.Richardson California 62639</p>
                <Button className="mt-2 mt-md-5">Kontak Kami</Button>
              </Col>
            </Row>
          </Container>
        </header>
      </section>
    </>
  );
}
