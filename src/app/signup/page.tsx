'use client'
import Header from '@/components/global_components/header'
import InputForm from '@/components/hook-form-components/input/Input'
import { Values, schema } from '@/data/form_resources/form-schemas/checkout'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@mui/material'
import { useForm } from 'react-hook-form'

export default function Signup() {
  const { control: c, trigger: t } = useForm({ resolver: yupResolver(schema) })
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <div className="flex flex-col">
        <InputForm<Values> t={t} c={c} name="email" label="email" type="email" />
        <InputForm<Values> t={t} c={c} name="password" label="senha" type="password" />
        <Button variant="contained" color="primary" className="bg-blue-600 text-white">
          Login
        </Button>
      </div>
    </main>
  )
}
