import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import DataGaleri from "../components/galeri"
import "../dist/css/galeri.css"
export default function Galeri() {
  return (
    <>
      {/* SECTION 1 */}
      <div className="section1">
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
                  <h1 className="fs-1 fw-bold">Galeri</h1>
                  <p className="fs-5">
                    Halaman Yang Akan Memberikan Dokumentasi Kegiatan Sekolah
                  </p>
                </div>
              </Col>
              <Col md="6" className="pt-lg-0 pt-5 text-center">
                <img
                  src="../assets/galeri/utama.png"
                  alt="ilustrasi"
                  className="img-fluid mx-auto"
                />
              </Col>
            </Row>
          </Container>
        </header>
      </div>

      {/* SECTION 2 */}
      <div className="galeri2">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row>
              <h1 className="fs-1 fw-bold text-center mb-4">Kumpulan Kegiatan Sekolah</h1>
            </Row>
            <Row>
                <DataGaleri />
            </Row>
          </Container>
        </header>
      </div>
    </>
  );
}
