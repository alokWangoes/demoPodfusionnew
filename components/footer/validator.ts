import * as yup from "yup"

export const newsLetterSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email required"),
})
