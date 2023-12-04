import { Container, Row, Col, Card, Nav } from "react-bootstrap";
import "../dist/css/berita.css";
import Berita from "../components/berita";
import { useState } from "react";

export default function News() {
  const [activeTab, setActiveTab] = useState("Semua"); // Set "Semua" sebagai aktif secara default

  const handleNavClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      {/* SECTION 1 */}
      <section className="section1">
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
                  <h1 className="fs-1 fw-bold">Berita</h1>
                  <p className="fs-5">
                    Halaman Yang Akan Memberikan Pemberitahuan dan Pengetahuan
                    Untuk Anda
                  </p>
                </div>
              </Col>
              <Col md="6" className="pt-lg-0 pt-5 text-center">
                <img
                  src="../assets/berita/utama.png"
                  alt="ilustrasi"
                  className="img-fluid mx-auto"
                />
              </Col>
            </Row>
          </Container>
        </header>
      </section>

      {/* SECTION 2 */}
      <section className="berita2 mt-5 px-4">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row>
              <h1 className="fs-1 fw-bold text-center text-md-start">
                Informasi Terbaru
              </h1>
              <div>
                <img
                  src="./assets/berita/bis.png"
                  alt=""
                  className="img-fluid w-100 h-100"
                />
              </div>
            </Row>
            <Row className="mt-4">
              <h2 className="fs-3 text-center text-md-start">
                Kegiatan Belajar Mengajar Offline Dimulai
              </h2>
              <p className="text-justify ">
                Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin
                kembali belajar di sekolah. Saya ingin bertemu dengan
                teman-teman sekelas saya. begitupun sebagian besar orang tua,
                mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah
                secara langsung. Orang tua selama ini banyak yang mengaku lelah
                karena anak-anaknya selama pandemi lebih banyak menghabiskan
                waktu
                <a
                  href="/beritaDetail"
                  className="read-more ms-1 align-items-center"
                >
                  Read More....
                </a>
              </p>
            </Row>
          </Container>
        </header>
      </section>

      {/* SECTION 3 */}
      <section className="berita3 px-4 mt-5">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="mb-3 px-3">
              <Nav
                className="d-block d-md-flex"
                variant="underline"
                defaultActiveKey="/home"
              >
                <Nav.Item>
                  <Nav.Link
                    href="#"
                    active={activeTab === "Semua"}
                    onClick={() => handleNavClick("Semua")}
                  >
                    Semua
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#"
                    eventKey="link-1"
                    active={activeTab === "Berita"}
                    onClick={() => handleNavClick("Berita")}
                  >
                    Berita
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#"
                    eventKey="link-2"
                    active={activeTab === "Pengumuman"}
                    onClick={() => handleNavClick("Pengumuman")}
                  >
                    Pengumuman
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
            <Row>
              <Berita />
            </Row>
            <Row>
              <div className="mt-2 h-8 justify-content-start justify-content-md-between align-items-md-center d-md-flex flex-md-row mt-10">
                <p className="">Menampilkan 10 Dari 21 Data</p>
                <div className="justify-content-start align-items-center gap-5 d-flex">
                  <p className="">Halaman</p>
                  <div className="justify-content-center align-items-center d-flex">
                    <div className="w-6 h-6" />
                    <div className="justify-content-start align-items-start d-flex">
                      <img src="./assets/berita/left.png" alt="" />
                      <div className="px-2 d-flex-col justify-content-start align-items-start  d-inline-flex">
                        <p className="">1</p>
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
