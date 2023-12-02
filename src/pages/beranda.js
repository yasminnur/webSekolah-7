import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import "../dist/css/beranda.css";
import BeritaPreview from "../components/beritaPreview";
import KegiatanPreview from "../components/kegiatanPreview";
import Sponsor from "../components/sponsor";

export default function Beranda() {
  return (
    <>
      {/* SECTION 1 */}
      <section className="section1">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container className="mt-4 mt-md-0">
            <Row className="header-box d-flex align-items-center text-center text-md-start">
              <Col md="6" className="text">
                <img src="./assets/beranda/logo.png" alt="" className="logo img-fluid p-3 p-md-0 p-lg-0"/>
                <div className="tulisan">
                <h1 className="fs-1 fw-bold ">Tuntut Ilmu Untuk Masa Depan Yang Cerah</h1>
                <p className="fs-5">
                  jelajahi semua pengetahuan dan ilmu bermanfaat yang berguna
                  untuk kehidupan anda kedepannya agar lebih bermanfaat dalam
                  hidup anda dan orang lain
                </p>
                <button className="fs-5 btn btn-lg rounded-5 me-2 px-4">
                  Mulai Belajar
                  </button>
                  </div>
              </Col>
              <Col md="6" className="pt-lg-0 pt-5 text-center">
                <img
                  src="../assets/beranda/utama.png"
                  alt="ilustrasi"
                  className="img-fluid mx-auto"
                />
              </Col>
            </Row>
          </Container>
        </header>
      </section>

      {/* SECTION 2 */}
      <section className="section2">
        <Container>
          <Row className="konten p-4 d-flex flex-wrap align-items-center">
            <Col className="judul col-12 col-md-3 mb-3">
              <h1 className="text-lg-start mb-5 fs-1 text-center">Keunggulan Sekolah Kami</h1>
            </Col>
            <Col className="unggul1 col-12 col-lg-3 mb-3 d-flex flex-column align-items-end">
              <img
                src="./assets/beranda/book.png"
                alt=""
                className="mb-2 ms-lg-auto"
              />
              <p className="text-lg-end fs-5">Menggunakan Kurikulum Terbaru</p>
            </Col>
            <Col className="unggul2 col-12 col-lg-3 mb-3 d-flex flex-column align-items-end">
              <img
                src="./assets/beranda/clock.png"
                alt=""
                className="mb-2 ms-lg-auto"
              />
              <p className="text-lg-end fs-5">
                Efektivitas Waktu Saat Belajar Disekolah
              </p>
            </Col>
            <Col className="unggul3 col-12 col-lg-3 mb-3 d-flex flex-column align-items-end">
              <img
                src="./assets/beranda/pen.png"
                alt=""
                className="mb-2 ms-lg-auto "
              />
              <p className="text-lg-end fs-5">Penyaluran Bakat dan Minat Siswa</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* SECTION 3 */}
      <div className="section3">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container className="mt-4 mt-md-0">
            <Row className="header-box d-flex align-items-center text-center text-md-start">
              <Col md="6" className="pt-lg-0 pt-lg-4 pt-0 text-center ">
                <img
                  src="../assets/beranda/kedua.png"
                  alt="ilustrasi"
                  className="img-fluid mx-auto"
                />
              </Col>
              <Col md="6" className="text pt-lg-0 pt-5">
                <img src="./assets/beranda/logo.png" alt="" className="logo img-fluid p-3 p-md-0 p-lg-0" />
                <div className="tulisan">
                <h1 className="fs-1 fw-bold">Sekolah Alam Insan Mulia Berkarya</h1>
                <p className="fs-5">
                  Sekolah Kami merupakan sekolah informal yang dikelola untuk
                  membantu anak mengembangkan bakat dan kemampuannya. Dengan
                  memberikan kurikulum terbaik agar anak bisa memilih minatnya
                  dan fokus mengembangkan minat tersebut. Sekolah ini didirikan
                  sejak tahun 1989 dan terus berkembang
                </p>
                <button className="fs-5 btn btn-lg rounded-5 me-2 px-4">
                  Mulai Belajar
                  </button>
                  </div>
              </Col>
            </Row>
          </Container>
        </header>
      </div>

      {/* SECTION 4  */}
      <div className="kegiatan">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <h1 className="fs-1 text-center text-md-start">Kumpulan Kegiatan Sekolah</h1>
            <Row>
              <KegiatanPreview />
            </Row>
          </Container>
        </header>
      </div>

      {/* SECTION 5  */}
      <div className="section5">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center text-center text-md-start">
              <Col md="6" className="text p-2">
                <img src="./assets/beranda/logo.png" alt="" className="logo img-fluid p-3 p-md-0 p-lg-0" />
                <div className="tulisan">
                <h1 className="fs-1 fw-bold">Salurkan Minat Bakat Anak</h1>
                <p className="fs-5">
                  kami membuka pendaftaran baru tahun ajaran 2022. segera
                  daftarkan anak anda
                </p>
                <button className="fs-5 btn btn-lg rounded-5 me-2 px-4">
                  Mulai Belajar
                  </button>
                  </div>
              </Col>
              <Col md="6" className="text-center">
                <img
                  src="../assets/beranda/ketiga.png"
                  alt="ilustrasi"
                  className="img-fluid mx-auto p-md-3 mt-5 mt-md-0"
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
            <Row className="mb-3 px-0 px-md-4">
              <Nav className="justify-content-center justify-content-md-start" variant="underline" defaultActiveKey="/home">
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
              <h1 className="fs-1 fw-bold">Partner Kerja Sama</h1>
              <p className="fs-5">
                Kami Bekerja sama dengan berbagai lembaga Diseluruh Indonesia
                untuk menyalurkan bakat siswa kami
              </p>
            </Row>
            <Sponsor />
          </Container>
        </header>
      </div>
    </>
  );
}
