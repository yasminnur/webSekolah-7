import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import DataGaleri from "../components/galeri"
import "../dist/css/galeri.css"
export default function Galeri() {
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
      </section>

      {/* SECTION 2 */}
      <section className="galeri2 px-4 mt-5 mt-md-0">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row>
              <h1 className="fs-1 fw-bold text-center mb-4">Kumpulan Kegiatan Sekolah</h1>
            </Row>
            <Row>
                <DataGaleri />
            </Row>
            <Row>
              <div className="mt-2 h-8 justify-content-start justify-content-md-between align-items-md-center d-md-flex flex-md-row mt-10">
                <p className="">Menampilkan 9 Dari 21 Data</p>
                <div className="justify-content-start align-items-center gap-5 d-flex">
                  <p className="">Halaman</p>
                  <div className="justify-content-center align-items-center d-flex">
                    <div className="w-6 h-6" />
                    <div className="justify-content-start align-items-start d-flex">
                      <img src="./assets/berita/left.png" alt="" />
                      <div className="px-2 d-flex-col justify-content-start align-items-start  d-inline-flex">
                        <p className="satu">1</p>
                      </div>
                      <div className="px-2 d-flex-col justify-content-start align-items-start d-inline-flex">
                        <p className="">2</p>
                      </div>
                      <div className="px-2 d-flex-col justify-content-start align-items-start  d-inline-flex">
                        <p className="">3</p>
                      </div>
                      <img src="./assets/berita/right.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </header>
      </section>
    </>
  );
}
