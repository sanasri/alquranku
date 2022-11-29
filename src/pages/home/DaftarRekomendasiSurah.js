import React, { useState, useEffect } from "react";
import { Row, Card, Button, Container } from "react-bootstrap";
import CardRekomendasi from "./CardRekomendasi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../index.css";

const DaftarRekomedasiSurah = () => {
  const [listSurat, setListSurat] = useState([]);
  const [rekomendasi, setRekomendasi] = useState(false);
  const navigate = useNavigate();

  const getApi = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}`);
      for (var i = data.length - 1; i >= 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      }
      const x = data.slice(0, 4);
      setListSurat(x);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, [rekomendasi]);

  return (
    <Container className="mt-5 mb-5">
      <div className=" p-3 w-100 rounded " style={{ backgroundColor: "#009097" }}>
        <Button variant="light " onClick={() => setRekomendasi(!rekomendasi)} className="text-dark  mx-auto w-25 d-flex justify-content-center">
          Lainnya
        </Button>

        <Row xs={2} md={2} lg={2} className="mx-auto w-100 mb-3 ">
          {listSurat?.map((noRekomendasi) => {
            return (
              <div key={noRekomendasi.number_of_surah}>
                <div
                  onClick={() => {
                    navigate(`/DaftarAyat/${noRekomendasi.number_of_surah}`);
                  }}
                >
                  <CardRekomendasi name={noRekomendasi.name} />
                </div>
              </div>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};

export default DaftarRekomedasiSurah;
