import React, { useState } from "react";
import { Button, Collapse, Container } from "react-bootstrap";
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
              <Button style={{ marginLeft: "38% ", backgroundColor: "#009097" }} className="w-25" onClick={() => setOpen(!open)} aria-controls="collapse-text" aria-expanded={open}>
                Rekomendasi
              </Button>

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
