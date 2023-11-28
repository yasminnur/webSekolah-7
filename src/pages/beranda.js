import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import "../dist/css/beranda.css";
import BeritaPreview from "../components/beritaPreview";
import KegiatanPreview from "../components/kegiatanPreview";
import Sponsor from "../components/sponsor";

export default function Beranda() {
  return (
    <>
      {/* SECTION 1 */}
      <div className="section1 ">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col md="6" className="text">
                <img src="./assets/beranda/logo.png" alt="" />
                <h1>Tuntut Ilmu Untuk Masa Depan Yang Cerah</h1>
                <p>
                  jelajahi semua pengetahuan dan ilmu bermanfaat yang berguna
                  untuk kehidupan anda kedepannya agar lebih bermanfaat dalam
                  hidup anda dan orang lain
                </p>
                <button className="btn btn-lg rounded-5 me-2 px-4">
                  Mulai Belajar
                </button>
              </Col>
              <Col md="6" className="pt-lg-0 pt-5 text-center ">
                <img
                  src="../assets/beranda/utama.png"
                  alt="ilustrasi"
                  className="img-fluid mx-auto"
                />
              </Col>
            </Row>
          </Container>
        </header>
      </div>

      {/* SECTION 2 */}
      <div className="section2">
        <Container>
          <Row className="konten p-4 d-flex flex-wrap">
            <Col className="judul col-12 col-md-3 mb-3">
              <h1 className="text-lg-start mb-5">Keunggulan Sekolah Kami</h1>
            </Col>
            <Col className="unggul1 col-12 col-lg-3 mb-3 d-flex flex-column align-items-end">
              <img
                src="./assets/beranda/book.png"
                alt=""
                className="mb-2 ms-lg-auto"
              />
              <p className="text-lg-end">Menggunakan Kurikulum Terbaru</p>
            </Col>
            <Col className="unggul2 col-12 col-lg-3 mb-3 d-flex flex-column align-items-end">
              <img
                src="./assets/beranda/clock.png"
                alt=""
                className="mb-2 ms-lg-auto"
              />
              <p className="text-lg-end">
                Efektivitas Waktu Saat Belajar Disekolah
              </p>
            </Col>
            <Col className="unggul3 col-12 col-lg-3 mb-3 d-flex flex-column align-items-end">
              <img
                src="./assets/beranda/pen.png"
                alt=""
                className="mb-2 ms-lg-auto"
              />
              <p className="text-lg-end">Penyaluran Bakat dan Minat Siswa</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* SECTION 3 */}
      <div className="section3">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col md="6" className="pt-lg-0 pt-5 text-center ">
                <img
                  src="../assets/beranda/kedua.png"
                  alt="ilustrasi"
                  className="img-fluid mx-auto"
                />
              </Col>
              <Col md="6" className="text">
                <img src="./assets/beranda/logo.png" alt="" />
                <h1>Sekolah Alam Insan Mulia Berkarya</h1>
                <p>
                  Sekolah Kami merupakan sekolah informal yang dikelola untuk
                  membantu anak mengembangkan bakat dan kemampuannya. Dengan
                  memberikan kurikulum terbaik agar anak bisa memilih minatnya
                  dan fokus mengembangkan minat tersebut. Sekolah ini didirikan
                  sejak tahun 1989 dan terus berkembang
                </p>
                <button className="btn btn-lg rounded-5 me-2 px-4">
                  Mulai Belajar
                </button>
              </Col>
            </Row>
          </Container>
        </header>
      </div>

      {/* SECTION 4  */}
      <div className="kegiatan">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <h1>Kumpulan Kegiatan Sekolah</h1>
            <Row>
              <KegiatanPreview />
            </Row>
          </Container>
        </header>
      </div>

      {/* SECTION 5  */}
      <div className="section5 ">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col md="6" className="text">
                <img src="./assets/beranda/logo.png" alt="" />
                <h1>Salurkan Minat Bakat Anak</h1>
                <p>
                  kami membuka pendaftaran baru tahun ajaran 2022. segera
                  daftarkan anak anda
                </p>
                <button className="btn btn-lg rounded-5 me-2 px-4">
                  Mulai Belajar
                </button>
              </Col>
              <Col md="6" className="pt-lg-0 pt-5 text-center">
                <img
                  src="../assets/beranda/ketiga.png"
                  alt="ilustrasi"
                  className="img-fluid mx-auto"
                />
              </Col>
            </Row>
          </Container>
        </header>
      </div>

      {/* SECTION 6 */}
      <div className="berita">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container className="">
            <Row className="mb-3">
              <Nav className="" variant="underline" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link href="#">Semua</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" eventKey="link-1">
                    Berita
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#" eventKey="link-2">
                    Pengumuman
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
            <Row>
              <BeritaPreview />
            </Row>
          </Container>
        </header>
      </div>

      {/* SECTION 7 */}
      <div className="sponsor">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="text d-flex justify-content-center text-center">
              <h1>Partner Kerja Sama</h1>
              <p>
                Kami Bekerja sama dengan berbagai lembaga Diseluruh <br /> Indonesia
                untuk menyalurkan bakat siswa kami{" "}
              </p>
            </Row>
            <Sponsor />
          </Container>
        </header>
      </div>
    </>
  );
}
