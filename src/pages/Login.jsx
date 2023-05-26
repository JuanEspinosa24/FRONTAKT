import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import { useFormik } from "formik";
import { LoginValidationSchema } from "../validations/LoginValidation";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import Select from 'react-select'

// const options = [
//     {value:'cedulaCiudadania',label:'Cedula de ciudadania'},
//     {value:'cedulaExtranjeria',label:'Cedula de extranjeria'},
//     {value:'Pasaporte',label:'Pasaporte'},
// ]

export const Login = () => {
  const navigate = useNavigate();

  const toastOptions = {
    position: "top-center",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const formik = useFormik({
    initialValues: {
      //   docType:"",
      docNum: "",
      password: "",
      //   passwordConfirmation: "",
    },
    validationSchema: LoginValidationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));

      try {
        const { data } = await axios.post("/user/login", values);
        // console.log(data);
        navigate("/chat");
        toast.success(data.message, toastOptions);
      } catch (error) {
        console.log(error.message);
        if (!error.response.data.ok) {
          return toast.error(error.response.data.message, toastOptions);
        }
        toast.error(error.response.data, toastOptions);
      }
    },
    // validateOnBlur: true,
  });
  return (
    <Container
      fluid
      style={{
        //Aca abajo imagen HD
        backgroundImage: "url('../../public/imgs/Fonditoakt.jpg')",
        backgroundSize: "cover",
      }}
      className="pb-5 p-5 position-relative overflow-x-hidden  flex-column aling-items-center justify-content-center overflow-y-hidden "
    >
      {/* <Container> */}

      <Row className="" style={{ marginLeft: "4rem", padding: "118px" }}>
        <Col
          className="mt-5 col-5 col-md-7 col-lg-6 col-xl-5 col-xxl-4 rounded  col-sm-10 col-10"
          style={{ background: "#ffffff" }}
        >
          <div className="d-flex justify-content-center aling-items-center  ">
            <img src="../../public/imgs/descarga.png" width={200} />
          </div>
          <div className="text-center">
            <span className="text-center text-red">
              No tienes una cuenta AKT ? <br />{" "}
              <Link className="nav-link fw-bold" to={"/signup"}>
                Registrate Aqui{" "}
              </Link>
            </span>
          </div>
          <form className="p-1" onSubmit={formik.handleSubmit}>
            {/* <div className="mb-3">
              <input
                name="name"
                type="text"
                className="form-control"
                id="name"
                placeholder="Nombre"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-white">{formik.errors.name}</div>
              ) : null}
            </div> */}
            <div className="mb-1">
              {/* <input
                type="text"
                className="form-control"
                id="lastName"
                aria-describedby="emailHelp"
                placeholder="Apellido"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              /> */}
              {/* {formik.touched.docNum && formik.errors.docNum ? (
                  <div class="invalid-tooltip text-white">
                    {formik.errors.docNum}
                  </div>
                ) : "hola"} */}
              {formik.touched.lastName && formik.errors.lastName ? (
                <div>
                  <span className="text-black">{formik.errors.lastName}</span>
                </div>
              ) : null}
            </div>
            <div></div>
            <div className="">
              <label htmlFor="docNum" className="form-label text-black"></label>
              <input
                type="text"
                className="form-control"
                id="docNum"
                placeholder="Numero de documento"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.docNum}
              />
              {formik.touched.docNum && formik.errors.docNum ? (
                <div>
                  <span className="text-black">{formik.errors.docNum}</span>
                </div>
              ) : null}
              {/* {formik.touched.docNum && formik.errors.docNum ? (
                  <div class="invalid-tooltip text-white">
                    {formik.errors.docNum}
                  </div>
                ) : "hola"} */}
            </div>
            {/* <div className="">
              <label htmlFor="telefono" className="form-label text-white"></label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                placeholder="Numero de telefono"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.telefono}
              />
              {formik.touched.telefono && formik.errors.telefono ? (
                <div>
                  <span className="text-white">{formik.errors.telefono}</span>
                </div>
              ) : null}

            </div> */}
            {/* <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-white"
              ></label>
              <input
                type="email"
                className="form-control"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                placeholder="Email"
              />
              {formik.touched.email && formik.errors.email ? (
                <div>
                  <span className="text-white">{formik.errors.email}</span>
                </div>
              ) : null}
            </div> */}
            <div className="mb-3">
              {/* <label
                  htmlFor="password"
                  className="form-label text-white"
                >
                  Password
                </label> */}
              <div className="mt-3">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder="Contraseña"
                />
              </div>

              {formik.touched.password && formik.errors.password ? (
                <div>
                  <span className="text-black">{formik.errors.password}</span>
                </div>
              ) : null}
            </div>

            {/* <div className="mb-3"> */}
            {/* <label
                  htmlFor="password"
                  className="form-label text-white"
                >
                  Password
                </label> */}
            {/* <input
                type="password"
                className="form-control"
                id="passwordConfirmation"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.passwordConfirmation}
                placeholder="passwordConfirmation"
              /> */}
            {/* 
              {formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation ? (
                <div>
                  <span className="text-white">
                    {formik.errors.passwordConfirmation}
                  </span>
                </div>
              ) : null} */}
            {/* </div> */}

            {/* <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div> */}
            <div className="mb-3 mt-4">
              <button type="submit" className="btn btn-danger text-white w-100">
                Enviar
              </button>
            </div>
          </form>
        </Col>
      </Row>
      {/* </Container> */}
    </Container>
  );
};
