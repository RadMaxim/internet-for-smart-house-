import * as yup from 'yup'
const schema = yup.object().shape({
    Full_Name:yup.string().required().min(10),
    Email:yup.string().required(),
    textArea:yup.string().required()
})
export {schema}