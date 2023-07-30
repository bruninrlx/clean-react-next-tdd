import * as yup from 'yup'

export const schema = yup.object().shape({
  nome: yup.string().required('campo requerido'),
  cpf: yup.string().required('campo requerido'),
  idade: yup.string().required('campo requerido'),
  preco: yup.string().required('campo requerido'),
})

export type Values = {
  nome: string
  cpf: string
  idade: string
  preco: string
}
