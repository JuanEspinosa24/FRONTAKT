import * as Yup from "yup"

export const SignUpValidationSchema = Yup.object().shape({
    name: Yup.string().required("El nombre es obligatorio"),
    lastname:Yup.string().required("El apellido es obligatorio"),
    docType:Yup.string().oneOf(
        [
            "CC","CE","PEP"
        ]
    ).required("Requerido"),
    docNum:Yup.string().required("El numero de documento es obligatorio"),
    cellPhoneNum:Yup.string().required("El numero telefonico es obligatorio"),
    email:Yup.string().email("Coloque un correo valido").required('El correo electronico es obligatorio'),
    password:Yup.string().required("La contraseña es obligatoria"),
    passwordConfirmation:Yup.string().oneOf([Yup.ref('password')],"La contraseña debe coincidir").required("Ingresa la contraseña nuevamente")

})

// Yup.ref() es una función que se utiliza para hacer referencia a otro campo en el mismo objeto de validación. Yup.ref('password') se utiliza para hacer referencia al campo de contraseña en el objeto de validación.

// En este caso, Yup.ref('password') se utiliza para validar que la confirmación de la contraseña coincida con la contraseña ingresada.