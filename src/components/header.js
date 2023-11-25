import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { data } from '../data/nav.js'
import {NavLink} from "react-bootstrap";

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
            {data.map((item) => (
              <div key={item.id} href="#" className="group">
              <NavLink to={item.path}>{item.name}</NavLink>
              {/* <Nav.Link href="#">Tentang Kita</Nav.Link>
              <Nav.Link href="#">Berita</Nav.Link>
              <Nav.Link href="/galeri">Galeri</Nav.Link>
              <Nav.Link href="#">Kontak</Nav.Link> */}
              </div>
        ))}
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
