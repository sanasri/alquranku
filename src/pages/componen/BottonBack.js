import React from "react";
import { Tab, Col, Row, Button, Stack, Container, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ButtonBack() {
  const navigate = useNavigate();
  return (
    <Container>
      <Button
        className="mt-5"
        onClick={() => {
          navigate(`/DaftarSurat`);
        }}
      >
        kembali
      </Button>
    </Container>
  );
}
