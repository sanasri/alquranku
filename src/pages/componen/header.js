import { Form, Button } from "react-bootstrap";
import "../../index.css";

const Header = () => {
  return (
    <div>
      <div style={{ maxWidth: "1000px" }} className="container   p-5">
        <div className="headerHome">
          <img style={{ maxWidth: "150px", marginBottom: "50px", background: " rgba(255, 255, 255, 0.500)", borderRadius: "50%" }} src={require("../../img/logo-alquran.png")} />
        </div>
        <h5 style={{ marginBottom: "20px", color: "white", textShadow: "2px 1px #000" }} bg="dark" variant="dark">
          Cari Nama Surat
        </h5>
        <Form className="d-flex">
          <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button variant="outline-success bg-light ">Search</Button>
        </Form>
      </div>
    </div>
  );
};

export default Header;
