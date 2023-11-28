import { Container, Row, Col, Card, Nav } from "react-bootstrap";
export default function Galeri() {
  return (
      <>
          {/* SECTION 1 */}
      <div className="homepage1">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col lg="6" className="text">
                <img src="./assets/beranda/logo.png" alt="" />
                <h1>Galeri</h1>
                <p>
                Halaman Yang Akan Memberikan 
Dokumentasi Kegiatan Sekolah
                </p>
              </Col>
              <Col lg="6" className="pt-lg-0 pt-5 text-center">
                <img src="../assets/galeri/utama.png" alt="ilustrasi" />
              </Col>
            </Row>
          </Container>
        </header>
      </div>

      {/* SECTION 2 */}
      <div className="">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row>
              <h1>Kumpulan Kegiatan Sekolah</h1>
            </Row>
            <Row>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./assets/galeri/galeri1.png" />
      <Card.Body>
        <Card.Title>Belajar Mengajar</Card.Title>
        <Card.Text>
        Kegiatan belajar mengajar diadakan setiap hari Senin hingga Jum’at
        </Card.Text>
      </Card.Body>
    </Card>
            </Row>
</Container>
        </header>
        </div>
      </>
  )
}
