import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const options = [
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
];

export const OffcanvasComponent = ({ name, ...props }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false)
  const toggleShow = () => setShow((s)=>!s)

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
