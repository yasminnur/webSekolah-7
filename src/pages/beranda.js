import { Container, Row, Col } from "react-bootstrap";
import "../dist/css/beranda.css";

export default function Beranda() {
  return (
    <>
      {/* SECTION 1 */}
      <div className="homepage1">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col lg="6" className="text">
                <img src="./assets/beranda/logo.png" alt="" />
                <h1>Tuntut Ilmu Untuk Masa Depan Yang Cerah</h1>
                <p>
                  jelajahi semua pengetahuan dan ilmu bermanfaat yang berguna
                  untuk kehidupan anda kedepannya agar lebih bermanfaat dalam
                  hidup anda dan orang lain
                </p>
                <button className="btn btn-danger btn-lg rounded-5 me-2 px-4">
                  Mulai Belajar
                </button>
              </Col>
              <Col lg="6" className="pt-lg-0 pt-5 text-center">
                <img src="../assets/beranda/utama.png" alt="ilustrasi" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>

      {/* SECTION 2 */}
      <div className="homepage2">
        <Container>
          <Row>
            <Col>
              <h1>Keunggulan Sekolah Kami</h1>
            </Col>
            <Col>
              <h3>Menggunakan Kurikulum Terbaru</h3>
            </Col>
            <Col>
              <h3>Efektifitas Waktu Saat Belajar Disekolah</h3>
            </Col>
            <Col>
              <h3>Penyaluran Bakat dan Minat Siswa</h3>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
