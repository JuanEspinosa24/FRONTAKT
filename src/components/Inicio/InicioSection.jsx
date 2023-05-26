import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

export const InicioSection = () => {
  return (
    <Container id="inicio"
    fluid style={{
      //Aca abajo imagen HD
      backgroundImage: "url('../../src/imgs/Fonditoakt.jpg')",
      backgroundSize: "cover",
      // height:"900px"
    }}
    className="pb-5 p-5 position-relative overflow-x-hidden d-flex flex-column aling-items-center justify-content-center overflow-y-hidden "
  >
      <Row className="" style={{ marginLeft: "1rem", padding: "155px" }}>
        <Col md={6} className="d-flex flex-column p-5 justify-content-center">
          <h1 className="fs-1 text-uppercase fw-bold p-1 text-light text-center" >
            Bienvenidos{""}
          </h1>
          <p className="fs-2 text-light text-center">SERVICIOS DE MANTENIMIENTO CON AKT</p>

          <div className="d-flex justify-content-center">
    {/* <Button variant="danger" className="col-md-4 rounded-pill mt-5 fw-semibold shadow text-white py-2 px-5"> */}
      <a className="text-decoration-none col-md- rounded-pill mt-4 fw-semibold shadow text-white py-2 px-3 text-center"  style={{background:"green"}}href="https://api.whatsapp.com/send?phone=573178637526&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20AKT" target="_blank" ><img src="../../src/imgs/wppakt.png" height={50} /> </a>
      
    {/* </Button> */}
  </div>
        </Col>
      </Row>
     
    </Container>

    
  );
};
