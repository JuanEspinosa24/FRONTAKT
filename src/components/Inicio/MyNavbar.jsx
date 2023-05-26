import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./MyNavbar.css";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

export const MyNavbar = () => {
  const location = useLocation();

  const [isMainPath, setIsMainPath] = useState(false);

  useEffect(() => {
    location.pathname !== "/" ? setIsMainPath(false) : setIsMainPath(true);
  }, [location]);
  return (
    // El sticky-top me salvo la vida literalmente con el fixed top mi contenido en tamaño small era tapado por el Navbar, ahora con sticky-top la navbar hace parte de la pagina como tal y se desplaza cuando scroleamos
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="black"
        className="border-bottom border-white sticky-top"
      >
        <Container fluid className="mx-sm-5">
          {/* <Navbar.Brand href="#Inicio">
            <img
              alt="logo"
              src="/public/imgs/logo2.png"
              width="130"
              height="60"
              className="d-inline-block align-top navbar-brand-img"
            />
          </Navbar.Brand> */}
          <Link to="/">
            <img
              alt="logo"
              src="/public/imgs/descarga.png"
              width="220"
              className="d-inline-block align-top navbar-brand-img"
            />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

          <Navbar.Collapse id="responsive-navbar-nav">
            {isMainPath && (
              <Nav className="me-auto ms-lg-4">
                {/* <Nav.Link href="#inicio" className="fw-semibold">
                  INICIO
                </Nav.Link> */}
              </Nav>
            )}

            <Nav className="gap-lg-2">
              <NavLink
                // href="#iniciar"
                to={'login'}
                className="nav-link bg-danger no-underline rounded-pill px-lg-4 text-center fw-semibold"
                
              >
                INICIAR SESION
              </NavLink>
              {/* <Nav.Link
                  href="/signup"
                  className="bg-danger no-underline rounded-pill px-lg-4 text-center fw-semibold"
                >
                  REGISTRARSE
                </Nav.Link> */}

              <NavLink
                to="/signup"
                className={
                  (({ isActive }) => isActive && " active",
                  "nav-link bg-danger no-underline rounded-pill px-lg-4 text-center fw-semibold")
                }
                // className="bg-danger no-underline rounded-pill px-lg-4 text-center fw-semibold"
              >
                REGISTRARSE
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};
