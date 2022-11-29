import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { Button, Row } from "react-bootstrap";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Row className="d-flex justify-content-center">
      <Button onClick={scrollToTop} className="mb-3 w-25 " style={{ backgroundColor: "#009097" }}>
        <FaArrowCircleUp style={{ display: visible ? "inline" : "none" }} />
      </Button>
    </Row>
  );
};

export default ScrollButton;
