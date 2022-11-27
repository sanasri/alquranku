import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CardAyat } from "./CardAyat";
import ScrollButton from "../componen/ScroolToTop";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Button, Container, Row, Col } from "react-bootstrap";

const DaftarAyat = () => {
  const [listAyat, setListAyat] = useState([]);
  const navigate = useNavigate();
  let params = useParams();

  const getApi = async () => {
    try {
      const { data } = await axios.get(`https://raw.githubusercontent.com/penggguna/QuranJSON/master/surah/${params.id}.json`);
      console.log(data);

      setListAyat(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  const translations = listAyat.name_translations ?? "";

  return (
    <div>
      <Container fluid>
        <Container className=" mt-5 p-5 g-2 ">
          <Row>
            <Col>
              <Button
                className=""
                style={{ backgroundColor: "#009097" }}
                onClick={() => {
                  navigate(`/DaftarSurat`);
                }}
              >
                <div className=" fs-6  ">
                  <BsFillArrowLeftSquareFill className="me-3" />
                </div>
              </Button>
            </Col>
            <Col>
              <div className="text-center w-100 rounded-pill mb-5 ml-5 p-3 text-light" style={{ backgroundColor: "#009097", marginLeft: "-50%" }}>
                <div className="fs-4">QS.{listAyat.name}</div>

                <div>{translations.id}</div>
                <div>{listAyat.number_of_ayah} ayat</div>
              </div>
            </Col>
          </Row>
          {listAyat.verses?.map((ayat) => {
            return <CardAyat key={ayat.number} ayat={ayat} />;
          })}
        </Container>
      </Container>
      <ScrollButton />
    </div>
  );
};

export default DaftarAyat;
