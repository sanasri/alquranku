import React from "react";
import { Card } from "react-bootstrap";

export const CardAyat = (props) => {
  const { ayat } = props;
  return (
    <Card style={{ backgroundColor: "#009097", fontFamily: "_PDMS_Saleem_QuranFont" }} className="mb-3 w-100 text-light">
      <Card.Body>
        <div>{ayat.number}</div>
        <Card.Title style={{ wordSpacing: "3px" }} className="text-end mb-5 fs-2 ">
          {ayat.text}
        </Card.Title>
        <Card.Text className="fs-5">{ayat.translation_id}</Card.Text>
      </Card.Body>
    </Card>
  );
};
