import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar fixed="top" variant="dark" style={{ backgroundColor: "rgb(0,144,151)", color: "#fff" }} expand="lg">
      <Container className="d-flex align-items-center">
        <Navbar.Brand href="/">
          <img alt="Logo" width="30" height="30" src={require("../../img/logo-alquran.png")} className="me-3" />
          Al-Quran
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <NavLink id="RouterNavLink" className="text-light text-decoration-none" to="/DaftarSurat">
              Surat
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
