import InputForm from '@/components/hook-form-components/input/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { act, fireEvent, render, renderHook } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const sut = () => {
  const schema = yup.object().shape({
    nome: yup.string().required('required'),
  })
  const { result } = renderHook(() => useForm({ resolver: yupResolver(schema) }))
  const { getByLabelText, getByText } = render(
    <InputForm c={result.current.control} t={result.current.trigger} name="nome" label="nome" max={5} />
  )
  const input = getByLabelText('nome') as HTMLTextAreaElement
  return { input, result, getByText }
}

test('testing input and maxLenght', async () => {
  const { input, result } = sut()
  fireEvent.change(input, { target: { value: 'Bruno' } })
  fireEvent.change(input, { target: { value: 'Bruno Leandro' } })
  const values = result.current.getValues()
  expect(values).toEqual({ nome: 'Bruno' })
})

test('testing onblur error trigger', async () => {
  const { input, getByText } = sut()
  await act(() => fireEvent.blur(input))
  expect(getByText('required'))
})
