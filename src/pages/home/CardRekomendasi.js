import React from "react";
import { Card, Container } from "react-bootstrap";

const CardRekomendasi = ({ name }) => {
  // const  = props;

  return (
    <Card style={{ fontSize: "100%" }} className=" text-center mt-3  h-100    ">
      <Card.Text className="w-100">{name}</Card.Text>
    </Card>
  );
};

export default CardRekomendasi;
