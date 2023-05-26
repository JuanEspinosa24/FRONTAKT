import * as Yup from "yup"

export const LoginValidationSchema = Yup.object().shape({
    // docType:Yup.string().oneOf(
    //     [
    //         "CC","CE","PEP"
    //     ]
    // ).required("Requerido"),
    docNum:Yup.string().required("El numero de documento es obligatorio"),
    password:Yup.string().required("La contraseña es obligatoria"),
    // passwordConfirmation:Yup.string().oneOf([Yup.ref('password')],"La contraseña debe coincidir").required("Ingresa la contraseña nuevamente")
})