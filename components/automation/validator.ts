import * as yup from "yup"

export const newsLetterSchema = yup.object().shape({
  search: yup
    .string()
    .required("text required"),
})
