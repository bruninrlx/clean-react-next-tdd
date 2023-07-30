'use client'
import { Values, schema } from '@/components/form-schemas'
import InputForm from '@/components/hook-form-components/input/Input'
import InputMaskForm from '@/components/hook-form-components/input/InputMask'
import InputMoneyForm from '@/components/hook-form-components/input/InputMoney'
import InputNumberForm from '@/components/hook-form-components/input/InputNumber'
import { teste } from '@/data/usecases/giveup-solicitation'
import testeget from '@/data/usecases/teste-get'
import useFetch from '@/hooks/useFetch'
import { useRequest } from '@/hooks/useRequest'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

export default function Home() {
  const { handleSubmit, control: c, trigger: t } = useForm({ resolver: yupResolver(schema) })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>teste kkKKKKKKKKKKKKKKKKK</p>
      <InputForm<Values> t={t} c={c} name="nome" label="nome" fullWidth max={5} />
      <InputMaskForm<Values> t={t} c={c} name="cpf" mask="999999999-99/999-9" label="test" fullWidth />
      <InputNumberForm<Values> t={t} c={c} name="idade" label="teste" max={3} variant="filled" fullWidth />
      <InputMoneyForm<Values> t={t} c={c} name="preco" label="teste" variant="filled" fullWidth />
    </main>
  )
}
