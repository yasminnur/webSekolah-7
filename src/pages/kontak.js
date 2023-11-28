import { Container, Row, Col, Button } from "react-bootstrap"
export default function Kontak() {
    return (
        <>
            {/* SECTION 1 */}
      <div className="">
        <header className="w-100 min-vh-100 d-flex align-items-center">
          <Container>
            <Row className="header-box d-flex align-items-center">
              <Col lg="6" className="text">
                <img src="./assets/beranda/logo.png" alt="" />
                <h1>Kontak</h1>
                <p>
                Anda Membutuhkan Bantuan Bertanya Atau Sekedar
 Berbincang Kami Siap Membantu
                </p>
              </Col>
              <Col lg="6" className="pt-lg-0 pt-5 text-center">
                <img src="../assets/kontak/utama.png" alt="ilustrasi" />
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
                            <Col>
                            <h3>Kontak 
                                    Kami</h3>
                                <p>Untuk Setiap Pertanyaan, perkiraan proyek atau Katakan saja Halo Get Touch Anda dapat menelepon atau mengobrol
Bersama kami</p>
                            </Col>
                            <Col>
                                <h5>Number</h5>
                                <p>(229) 555-0109</p>
                                <p>(405) 555-0128</p>
                                <h5>Office Address</h5>
                                <p>4140 Parker Rd.Richardson California 62639</p>
                                <Button>Kontak Kami</Button>
                            </Col>
                        </Row>
                    </Container>
                </header>
                </div>
        </>
    )
}