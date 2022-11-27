import React, { useState, useEffect } from "react";
import { Row, Card, Button } from "react-bootstrap";
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
    <Card className="mt-4 mx-auto mb-5 p-3 w-100 .bluesoft " style={{ backgroundColor: "#009097" }}>
      <Button variant="outline-light " onClick={() => setRekomendasi(!rekomendasi)} className="text-dark w-25 mx-auto w-25 fs-6">
        Bacaan Hari Ini
      </Button>

      <Row xs={2} md={2} lg={2} className="mx-auto w-75 mb-3 g-4">
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
    </Card>
  );
};

export default DaftarRekomedasiSurah;
