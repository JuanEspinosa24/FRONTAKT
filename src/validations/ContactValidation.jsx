import  * as Yup from 'yup'

export const contactValidationSchema = Yup.object().shape({
    name: Yup.string().required('El nombre es obligatorio'),
    email:Yup.string().email("Coloque un correo valido").required('El correo electronico es obligatorio'),
    telefono:Yup.string().required("El numero de telefono es obligatorio"),
    mensaje:Yup.string().required("Escribe un mensaje para ser contactado").min(15,"minimo 15").max(500,"maximo 500 "),
    
})