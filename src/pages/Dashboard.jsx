import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Navbar } from "react-bootstrap";
import { OffcanvasComponent } from "../components/Dashboard/OffcanvasComponent";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

const users = [
  {
    nombre: "Esteban",
    img: "../../public/imgs/R1.jpg",
  },
  {
    nombre: "Camilo",
    img: "../../public/imgs/logo2.png",
  },
  {
    nombre: "Lucas",
    img: "../../public/imgs/logo.png",
  },
  {
    nombre: "Mili",
    img: "../../public/imgs/logo.png",
  },
  {
    nombre: "Pedro",
    img: "../../public/imgs/logo.png",
  },
  {
    nombre: "Pedro",
    img: "../../public/imgs/logo.png",
  },
  {
    nombre: "Pedro",
    img: "../../public/imgs/logo.png",
  },
  {
    nombre: "Pedro",
    img: "../../public/imgs/logo.png",
  },
  {
    nombre: "Pedro",
    img: "../../public/imgs/logo.png",
  },
  {
    nombre: "Pedro",
    img: "../../public/imgs/logo.png",
  },
  {
    nombre: "Pedro",
    img: "../../public/imgs/logo.png",
  },
  {
    nombre: "Pedro",
    img: "../../public/imgs/logo.png",
  },
  {
    nombre: "Pedro",
    img: "../../public/imgs/logo.png",
  },
  {
    nombre: "Pedro",
    img: "../../public/imgs/logo.png",
  },
];

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container fluid style={{ background: "white", height: "100vh" }}>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row>
          <Col sm={3}>
            <div className="mt-3 border-end p-3 overflow-auto" style={{height:"95vh"}}>
            {/* Input */}
            <InputGroup className="mb-3">
              <Button variant="outline-secondary" id="button-addon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              </Button>
              <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <ListGroup>
              {/* <ListGroup.Item action href="#link1">
              Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Link 2
            </ListGroup.Item> */}
              {users.map((i, index) => (
                <ListGroup.Item
                  action
                  href={`#link${index}`}
                  key={index}
                  onClick={() => setActiveTab(index)}
                >
                  Link {index}
                  <h5>{i.nombre}</h5>
                </ListGroup.Item>
              ))}
            </ListGroup>
            </div>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                  <img
                    alt=""
                    src={users[activeTab].img}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{" "}
                  {users[activeTab].nombre}
                </Navbar.Brand>
              </Navbar>
              {users.map((i, index) => (
                <Tab.Pane eventKey={`#link${index}`} key={index}>
                  Tab pane content {index}
                </Tab.Pane>
              ))}

              {/* <Tab.Pane eventKey="#link2">Tab pane content 2</Tab.Pane> */}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};
