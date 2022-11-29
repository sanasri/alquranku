import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../index.css";

const DaftarSurah = () => {
  const navigate = useNavigate();
  const [listSurat, setListSurat] = useState([]);

  const getApi = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_KEY}`);

      setListSurat(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <div className="container-fluid mt-5 p-5  text-shadow-md">
        <div className="fs-4 mb-3">Daftar Surah</div>
        <Row xs={2} md={3} lg={4} className="g-4 text-light">
          {listSurat?.map((surat) => {
            return (
              <div key={surat.number_of_surah} className="Container ">
                <div
                  style={{ backgroundColor: " #009097" }}
                  className="card rounded h-100"
                  onClick={() => {
                    navigate(`/DaftarAyat/${surat.number_of_surah}`);
                  }}
                >
                  <div className="p-3">
                    <div className="fs-6">
                      {surat.number_of_surah}.{surat.name}
                    </div>
                    <div style={{ fontFamily: "_PDMS_Saleem_QuranFont" }} className="text-end fs-3">
                      {surat.name_translations["ar"]}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default DaftarSurah;
