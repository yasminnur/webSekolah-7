import { Container, Row, Col, Card, Nav } from "react-bootstrap";

export default function Berita() {
    return (
        <>
            
            {/* SECTION 1 */}
      <div className="section1">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col lg="6" className="text">
                <img src="./assets/beranda/logo.png" alt="" />
                <h1>Berita</h1>
                <p>
                Halaman Yang Akan Memberikan Pemberitahuan
dan Pengetahuan Untuk Anda
                </p>
              </Col>
              <Col lg="6" className="pt-lg-0 pt-5 text-center">
                <img src="../assets/berita/utama.png" alt="ilustrasi" />
              </Col>
            </Row>
          </Container>
        </header>
            </div>
            
            {/* SECTION 2 */}
            <div className="section2">
                <header className="w-100 min-vh-100 d-flex align-items-center">
                    <Container>
                        <Row>
                            <h2>Informasi Terbaru</h2>
                        </Row>
                        <Row>
                            <img src="./assets/berita/bis.png" alt="" />
                        </Row>
                        <Row>
                            <h2>Kegiatan Belajar Mengajar Offline Dimulai</h2>
                <p>Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya. begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih banyak menghabiskan waktu 
                  <a href="/beritaDetail">Read More</a>
                            </p>
                        </Row>
                    </Container>
                </header>
            </div>
            
            {/* SECTION 3 */}
      <div className="section3">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row>
              <Nav variant="underline" defaultActiveKey="/home">
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
              <Col>
                <Card style={{ width: "18rem" }} className="shadow">
                  <Card.Img variant="top" src="./assets/beranda/mengajar.png" />
                  <Card.Body>
                    <Card.Text>
                    12 Desember 2020
                    </Card.Text>
                    <Card.Title>
                      Kegiatan Belajar Mengajar Offline Dimulai
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }} className="shadow">
                  <Card.Img variant="top" src="./assets/beranda/mengajar.png" />
                  <Card.Body>
                    <Card.Text>
                    12 Desember 2020
                    </Card.Text>
                    <Card.Title>
                    Penambilan Raport Semester Ganjil 2021 - 2022
                    </Card.Title>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "18rem" }} className="shadow">
                  <Card.Img variant="top" src="./assets/beranda/mengajar.png" />
                  <Card.Body>
                    <Card.Text>
                    12 Desember 2020
                    </Card.Text>
                    <Card.Title>
                    Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun
                    </Card.Title>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                            </Col>
                            <Col>
                <Card style={{ width: "18rem" }} className="shadow">
                  <Card.Img variant="top" src="./assets/beranda/mengajar.png" />
                  <Card.Body>
                    <Card.Text>
                    12 Desember 2020
                    </Card.Text>
                    <Card.Title>
                    Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun
                    </Card.Title>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                            </Col>
                            <Col>
                <Card style={{ width: "18rem" }} className="shadow">
                  <Card.Img variant="top" src="./assets/beranda/mengajar.png" />
                  <Card.Body>
                    <Card.Text>
                    12 Desember 2020
                    </Card.Text>
                    <Card.Title>
                    Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun
                    </Card.Title>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                            </Col>
                            <Col>
                <Card style={{ width: "18rem" }} className="shadow">
                  <Card.Img variant="top" src="./assets/beranda/mengajar.png" />
                  <Card.Body>
                    <Card.Text>
                    12 Desember 2020
                    </Card.Text>
                    <Card.Title>
                    Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun
                    </Card.Title>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                            </Col>
                            <Col>
                <Card style={{ width: "18rem" }} className="shadow">
                  <Card.Img variant="top" src="./assets/beranda/mengajar.png" />
                  <Card.Body>
                    <Card.Text>
                    12 Desember 2020
                    </Card.Text>
                    <Card.Title>
                    Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun
                    </Card.Title>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
                            </Col>
                            <Col>
                <Card style={{ width: "18rem" }} className="shadow">
                  <Card.Img variant="top" src="./assets/beranda/mengajar.png" />
                  <Card.Body>
                    <Card.Text>
                    12 Desember 2020
                    </Card.Text>
                    <Card.Title>
                    Jam Belajar Yang Efektif Pada Anak 8 - 12 Tahun
                    </Card.Title>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </header>
            </div>

        </>
    )
}
