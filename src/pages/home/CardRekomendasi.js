import React from "react";
import { Card, Container } from "react-bootstrap";

const CardRekomendasi = ({ name }) => {
  // const  = props;

  return (
    <Container className=" mt-3 w-100 ">
      <Card className="rounded ">
        <div className="text-center  ">{name}</div>
      </Card>
    </Container>
  );
};

export default CardRekomendasi;
