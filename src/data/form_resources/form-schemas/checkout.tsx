import * as yup from 'yup'

export const schema = yup.object().shape({
  email: yup.string().email('Digite um e-mail válido').required('O e-mail é obrigatório'),
  password: yup.string().min(8, 'A senha deve conter pelo menos 8 caracteres').required('A senha é obrigatória'),
})

export type Values = {
  email: string
  password: string
}
