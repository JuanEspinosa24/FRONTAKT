import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import { SignUpValidationSchema } from "../validations/SignUpValidation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// import Select from 'react-select'

// const options = [
//     {value:'cedulaCiudadania',label:'Cedula de ciudadania'},
//     {value:'cedulaExtranjeria',label:'Cedula de extranjeria'},
//     {value:'Pasaporte',label:'Pasaporte'},
// ]

export const SignUp = () => {
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
      name: "",
      lastname: "",
      docType: "",
      docNum: "",
      cellPhoneNum: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: SignUpValidationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      try {
        const { data } = await axios.post("/user/signup", values);
        navigate("/login");
      } catch (error) {
        if (!error.response.data.ok) {
          return toast.error(error.response.data.message, toastOptions);
        }
        toast.error(error.response.data, toastOptions);
      }
    },
    // validateOnBlur: true,
  });
  return (
    // <Container fluid className='vh-100 position-relative overflow-x-hidden'>
    //   <Image src='../../src/imgs/R1.jpg' fluid className='position-absolute  top-0 start-0'/>
    //   <h1 className=''>prueba</h1>
    // </Container>
    <Container
      fluid
      style={{
        //aca abajo la imagen HD
        backgroundImage: "url('../../src/imgs/Fonditoakt.jpg')",
        backgroundSize: "cover",
      }}
      className="pb-5 p-5 position-relative overflow-x-hidden d-flex flex-column aling-items-center justify-content-center overflow-y-hidden"
    >
      {/* <Container> */}

      <Row className="" style={{ marginLeft: "4rem", padding: "40px" }}>
        <Col
          className="mt-5 col-5 col-md-7 col-lg-6 col-xl-5 col-xxl-4 rounded  col-sm-10 col-10"
          style={{ background: "#ffffff" }}
        >
          <div className="d-flex justify-content-center aling-items-center">
            <img src="../../src/imgs/descarga.png" width={200} />
          </div>
          <div className="text-center">
            <span className="text-center text-black">
              Ya tienes una cuenta AKT ? <br />{" "}
              <Link className="nav-link fw-bold" to={"/login"}>
                Inicia Sesion Aqui{" "}
              </Link>
            </span>
          </div>
          <form className="p-4" onSubmit={formik.handleSubmit}>
            <div className="mb-3">
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
                <div className="text-black">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="mb-4">
              {/* <label htmlFor="lastName" className="form-label text-white"></label> */}
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Apellido"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastname}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <div>
                  <span className="text-black">{formik.errors.lastname}</span>
                </div>
              ) : null}
            </div>
            <div>
              <select
                className="form-select"
                aria-label="Default select example"
                name="docType"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.docType}
              >
                <option value={null}>Tipo de documento</option>
                <option value="CC">Cedula de ciudadania</option>
                <option value="CE">Cedula de extranjeria</option>
                <option value="PEP">Permiso de permanencia</option>
              </select>
              {/* <Select name='docType' options={options} value={options.find((option)=>option.value === values.docType)} onChange={(option)=>{handleChange('docType')(option.value)}} onBlur={handleBlur}/>

              {errors.selectOption && touched.selectOption && (
          <div className="text-danger">{errors.selectOption}</div>
        )} */}
            </div>
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
            <div className="">
              <label
                htmlFor="cellPhoneNum"
                className="form-label text-black"
              ></label>
              <input
                type="text"
                className="form-control"
                id="cellPhoneNum"
                placeholder="Numero de telefono"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.cellPhoneNum}
              />
              {formik.touched.cellPhoneNum && formik.errors.cellPhoneNum ? (
                <div>
                  <span className="text-black">
                    {formik.errors.cellPhoneNum}
                  </span>
                </div>
              ) : null}
              {/* {formik.touched.docNum && formik.errors.docNum ? (
                  <div class="invalid-tooltip text-white">
                    {formik.errors.docNum}
                  </div>
                ) : "hola"} */}
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label text-black"
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
                  <span className="text-black">{formik.errors.email}</span>
                </div>
              ) : null}
            </div>
            <div className="mb-3">
              {/* <label
                  htmlFor="password"
                  className="form-label text-white"
                >
                  
                </label> */}
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                placeholder="Contraseña"
              />

              {formik.touched.password && formik.errors.password ? (
                <div>
                  <span className="text-black">{formik.errors.password}</span>
                </div>
              ) : null}
            </div>

            <div className="mb-3">
              {/* <label
                  htmlFor="password"
                  className="form-label text-white"
                >
                  Password
                </label> */}
              <input
                type="password"
                className="form-control"
                id="passwordConfirmation"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.passwordConfirmation}
                placeholder="Confirmar Contraseña"
              />

              {formik.touched.passwordConfirmation &&
              formik.errors.passwordConfirmation ? (
                <div>
                  <span className="text-black">
                    {formik.errors.passwordConfirmation}
                  </span>
                </div>
              ) : null}
            </div>

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
