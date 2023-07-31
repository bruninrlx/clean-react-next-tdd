'use client'
import Header from '@/components/global_components/header'
import InputForm from '@/components/hook-form-components/input/Input'
import { Values, schema } from '@/data/form_resources/form-schemas/checkout'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

export default function Home() {
  const { control: c, trigger: t } = useForm({ resolver: yupResolver(schema) })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <InputForm<Values> t={t} c={c} name="email" label="email" />
      <InputForm<Values> t={t} c={c} name="password" label="senha" />
    </main>
  )
}
