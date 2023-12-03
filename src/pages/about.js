import { Container, Row, Col, Card, Nav, Modal, Button } from "react-bootstrap";
import "../dist/css/about.css";
import Guru from "../components/guru";
import Sponsor from "../components/sponsor";
import React, { useState } from "react";

export default function About() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* SECTION 1 */}
      <div className="section1 ">
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
                  <h1 className="fs-1">Tentang Kami</h1>
                  <p className="fs-5">
                    Penjelasan Tentang Seokolah Kami Yang Dapat Menambah
                    Referesi Anda
                  </p>
                </div>
              </Col>
              <Col md="6" className="pt-lg-0 pt-5 text-center">
                <img
                  src="../assets/about/utama.png"
                  alt="ilustrasi"
                  className="img-fluid mx-auto"
                />
              </Col>
            </Row>
          </Container>
        </header>
      </div>

      {/* SECTION 2 */}
      <div className="about2">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="text-center justify-content-center ">
              <Col>
                <img
                  src="./assets/beranda/logo.png"
                  alt=""
                  className="img-fluid"
                />
                <h1 className="fs-1">Sekolah Alam Insan Mulia Berkarya</h1>
                <p className="fs-5">
                  Sekolah Kami merupakan sekolah informal yang dikelola untuk
                  membantu anak mengembangkan bakat dan kemampuannya. Dengan
                  memberikan kurikulum terbaik agar anak bisa memilih minatnya
                  dan fokus mengembangkan minat tersebut. Sekolah ini didirikan
                  sejak tahun 1989 dan terus berkembang
                </p>
              </Col>
            </Row>
          </Container>
        </header>
      </div>

      {/* SECTION 3 */}
      <div className="about3">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="text-center justify-content-center text-md-start justify-content-md-start">
              <Col className="d-flex align-items-center mb-5 mb-md-0 ">
                <h1 className="my-auto fs-1 fw-bold">
                  Keunggulan Sekolah Kami
                </h1>
              </Col>
              <Col className="unggul col-8 ms-1">
                <Row className="unggul1 align-items-center justify-content-md-start justify-content-center">
                  <Col xs="auto">
                    <img src="./assets/beranda/book.png" alt="ilustrasi" />
                  </Col>
                  <Col className="mt-3 mt-md-0">
                    <h4 className="fs-4">Menggunakan Kurikulum Terbaru</h4>
                    <p className="fs-5">
                      Menerapkan kurikulum terbaru saat proses belajar
                    </p>
                  </Col>
                </Row>
                <Row className="unggul2 align-items-center justify-content-md-start justify-content-center">
                  <Col xs="auto">
                    <img src="./assets/beranda/clock.png" alt="ilustrasi" />
                  </Col>
                  <Col className="mt-3 mt-md-0">
                    <h4 className="fs-4">Efektivitas Waktu Saat Belajar di Sekolah
                    </h4>
                    <p className="fs-5">Waktu belajar yang dirancang agar para siswa tidak jenuh
                    </p>
                  </Col>
                </Row>
                <Row className="unggul3 align-items-center justify-content-md-start justify-content-center">
                  <Col xs="auto">
                    <img src="./assets/beranda/pen.png" alt="ilustrasi" />
                  </Col>
                  <Col className="mt-3 mt-md-0">
                    <h4 className="fs-4">Penyaluran Bakat dan Minat Siswa</h4>
                    <p className="fs-5">
                      Berbagai macam kegiatan akademik maupun non-akademik
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </header>
      </div>

      {/* SECTION 4 */}
      <div className="about4">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container className="block">
            <Row className="tulisan text-center">
              <h1 className="fs-1">Video Profil</h1>
              <p className="fs-5">
                Berikut adalah video profil dari sekolah kami
              </p>
            </Row>
            <Row className="vidio justify-content-center position-relative">
              <Col xs={12} className="text-center">
                <div className="" onClick={handleShow}>
                  <img
                    src="./assets/about/video.png"
                    alt=""
                    className="gambar object-fit-cover"
                  />
                  <img
                    src="./assets/about/play.png"
                    alt=""
                    className="play position-absolute top-50 start-50 translate-middle"
                  />
                </div>
                <Modal show={show} onHide={handleClose} centered>
                  <Modal.Body>
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                      title="YouTube Video"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            </Row>
          </Container>
        </header>
      </div>

      {/* SECTION 5 */}
      <div className="about5">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container className="">
            <Row>
              <Col className="text-center ">
                <h1 className="fs-1">Guru dan Staff Sekolah</h1>
              </Col>
            </Row>
            <Guru />
          </Container>
        </header>
      </div>

      {/* SECTION 6 */}
      <div className="about6">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="text-center">
              <h1>Partner Kerja Sama</h1>
              <p>
                Kami Bekerja sama dengan berbagai lembaga Diseluruh Indonesia
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
