import { Container, Row, Col, Card, Nav, Button } from "react-bootstrap";
import "../dist/css/beranda.css";
import GaleriPreview from "../components/galeriPreview";
import KegiatanPreview from "../components/kegiatanPreview";
import Sponsor from "../components/sponsor";

export default function Beranda() {
  return (
    <>
      {/* SECTION 1 */}
      <section className="section1 px-4">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container className="">
            <Row className="header-box d-flex align-items-center text-center text-md-start">
              <Col md="6" className="text">
                <img src="./assets/beranda/logo.png" alt="" className="logo img-fluid p-3 p-md-0 p-lg-0"/>
                <div className="tulisan">
                <h1 className="fw-bold ">Tuntut Ilmu Untuk Masa Depan Yang Cerah</h1>
                <p className="">
                  jelajahi semua pengetahuan dan ilmu bermanfaat yang berguna
                  untuk kehidupan anda kedepannya agar lebih bermanfaat dalam
                  hidup anda dan orang lain
                </p>
                <Button className="btn btn-lg rounded-5 me-2 px-4">
                  Mulai Belajar
                  </Button>
                  </div>
              </Col>
              <Col md="6" className="jempol pt-5 text-center">
                <img
                  src="../assets/beranda/utama.png"
                  alt="ilustrasi"
                  className="img-fluid jempol"
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
      <section className="section3 px-4">
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
                <h1 className="fw-bold">Sekolah Alam Insan Mulia Berkarya</h1>
                <p className="">
                  Sekolah Kami merupakan sekolah informal yang dikelola untuk
                  membantu anak mengembangkan bakat dan kemampuannya. Dengan
                  memberikan kurikulum terbaik agar anak bisa memilih minatnya
                  dan fokus mengembangkan minat tersebut. Sekolah ini didirikan
                  sejak tahun 1989 dan terus berkembang
                </p>
                <Button className="btn btn-lg rounded-5 me-2 px-4">
                  Mulai Belajar
                  </Button>
                  </div>
              </Col>
            </Row>
          </Container>
        </header>
      </section>

      {/* SECTION 4  */}
      <section className="kegiatan px-4">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row>
              <div className="mb-3 d-md-flex align-items-center justify-content-between">
                <div className="align-items-center">
                  <h1 className="fs-2 fw-bold text-center text-md-start">Kumpulan Kegiatan Sekolah</h1>
                  </div>
                <div className="align-items-center text-center mt-3 mt-md-0">
                  <p className="lihat-semua">Lihat Semua</p>
                </div>
              </div>
            </Row>
            <Row>
              <KegiatanPreview />
            </Row>
          </Container>
        </header>
      </section>

      {/* SECTION 5  */}
      <section className="section5 px-4">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center text-center text-md-start">
              <Col md="6" className="text p-2">
                <img src="./assets/beranda/logo.png" alt="" className="logo img-fluid p-3 p-md-0 p-lg-0" />
                <div className="tulisan">
                <h1 className="fw-bold">Salurkan Minat Bakat Anak</h1>
                <p className="">
                  kami membuka pendaftaran baru tahun ajaran 2022. segera
                  daftarkan anak anda
                </p>
                <Button className="btn btn-lg rounded-5 me-2 px-4">
                  Mulai Belajar
                  </Button>
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
      </section>

      {/* SECTION 6 */}
      <section className="beranda6 px-4">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container className="">
            <Row className="mb-3 px-0 px-md-4">
              <div className="d-flex justify-content-between align-items-center">
                {/* <div> */}
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
                  {/* </div> */}
                <div className="align-items-center">
                <Nav.Item>
                  <Nav.Link href="#" eventKey="link-2" className="lihat-semua">
                    Lihat Semua
                  </Nav.Link>
                </Nav.Item>
                </div>
                </div>
            </Row>
            <Row>
              <GaleriPreview />
            </Row>
          </Container>
        </header>
      </section>

      {/* SECTION 7 */}
      <section className="sponsor ">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container className="mx-4">
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
      </section>
    </>
  );
}
