import * as yup from 'yup'


export const userSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required('Please enter your email'),
    username: yup.string().required(),
    password: yup.string().required(),
  });