import React, { useState } from "react";
import { Button, Collapse, Container, Row } from "react-bootstrap";
import DaftarSurah from "../surah";
import DaftarRekomedasiSurah from "./DaftarRekomendasiSurah";
import ScrollButton from "../componen/ScroolToTop";

const Home = () => {
  let [open, setOpen] = useState(false);

  const dblClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* <Navbars /> */}
      <div>
        <Container fluid>
          <div style={{ backgroundColor: "#E0F1F2" }}>
            <Container className="p-5">
              <div className="text-center ">
                <img src={require("../../img/logo-alquran-dark.png")} className="img w-25 h-25 mt-5 " />
              </div>
            </Container>

            <div>
              <Row className="mt-4 mx-auto  w-50 .bluesoft ">
                <Button style={{ backgroundColor: "#009097" }} className="w-35 mx-auto" onClick={() => setOpen(!open)} aria-controls="collapse-text" aria-expanded={open}>
                  <div className="fs-6"> Rekomendasi</div>
                </Button>
              </Row>

              <Collapse in={open}>
                <div>
                  <DaftarRekomedasiSurah />
                </div>
              </Collapse>
            </div>
          </div>
        </Container>
      </div>

      <DaftarSurah />
      <ScrollButton />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
