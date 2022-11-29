import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CardAyat } from "./CardAyat";
import ScrollButton from "../componen/ScroolToTop";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { Button, Container, Row, Col } from "react-bootstrap";

const DaftarAyat = () => {
  const [listAyat, setListAyat] = useState([]);
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
      <Container style={{ marginTop: "5rem" }} className="   g-2 ">
        <Row className="mt-5">
          <div className="text-center w-75 rounded-pill mb-3  p-3 text-light mx-auto" style={{ backgroundColor: "#009097" }}>
            <div className="fs-6">QS.{listAyat.name}</div>

            <div>{translations.id}</div>
            <div>{listAyat.number_of_ayah} ayat</div>
          </div>
        </Row>
        {listAyat.verses?.map((ayat) => {
          return <CardAyat key={ayat.number} ayat={ayat} />;
        })}
      </Container>

      <ScrollButton />
    </div>
  );
};

export default DaftarAyat;
