import { Container, Nav, Navbar, Button } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src="./assets/beranda/schools.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="/">Beranda</Nav.Link>
              <Nav.Link href="/about">Tentang Kita</Nav.Link>
              <Nav.Link href="/berita">Berita</Nav.Link>
              <Nav.Link href="/galeri">Galeri</Nav.Link>
              <Nav.Link href="/kontak">Kontak</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <Button>PPOB</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
