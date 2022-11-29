import React from "react";
import { Card } from "react-bootstrap";

export const CardAyat = (props) => {
  const { ayat } = props;
  return (
    <Card style={{ backgroundColor: "#009097" }} className="mb-3 w-100 text-light">
      <Card.Body>
        <div>{ayat.number}</div>
        <Card.Title style={{ wordSpacing: "3px", fontFamily: "Scheherazade New", lineHeight: "60px" }} className="text-end mb-5 fs-1 ">
          {ayat.text}
        </Card.Title>
        <Card.Text style={{ wordSpacing: "3px" }} className="fs-6">
          {ayat.translation_id}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
