import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import "../dist/css/header.css";
export default function Header() {
  const [activePage, setActivePage] = useState('/');

  useEffect(() => {
    const path = window.location.pathname;
    setActivePage(path);
  }, []);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="head py-4 px-3 w-100">
        <Container>
          <Navbar.Brand href="#home" className="">
            <img src="./assets/beranda/schools.png" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto menu gap-2">
              <Nav.Link href="/" className={activePage === '/' ? 'active' : ''}>Beranda</Nav.Link>
              <Nav.Link href="/about" className={activePage === '/about' ? 'active' : ''}>Tentang Kita</Nav.Link>
              <Nav.Link href="/news" className={activePage === '/news' || activePage === '/beritaDetail'? 'active' : ''}>Berita</Nav.Link>
              <Nav.Link href="/galeri" className={activePage === '/galeri' ? 'active' : ''}>Galeri</Nav.Link>
              <Nav.Link href="/kontak" className={activePage === '/kontak' ? 'active' : ''}>Kontak</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <Button className="px-3 py-1 ppdb">PPOB</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
