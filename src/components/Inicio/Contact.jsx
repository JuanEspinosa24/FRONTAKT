import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { useFormik } from "formik";
import { contactValidationSchema } from "../../validations/ContactValidation";

export const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      telefono: "",
      mensaje: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    // validateOnBlur: true,
  });

  return (
    <Container fluid id="contacto" className="mt-5">
    
    </Container>
  );
};
