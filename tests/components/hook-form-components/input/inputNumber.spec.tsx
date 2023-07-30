import InputNumberForm from '@/components/hook-form-components/input/InputNumber'
import { yupResolver } from '@hookform/resolvers/yup'
import { act, fireEvent, render, renderHook } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const sut = () => {
  const schema = yup.object().shape({
    age: yup.string().required('campo requerido'),
  })
  const { result } = renderHook(() => useForm({ resolver: yupResolver(schema) }))
  const { getByLabelText, getByText } = render(
    <InputNumberForm t={result.current.trigger} c={result.current.control} name="age" label="age" max={5} />
  )
  const input = getByLabelText('age') as HTMLTextAreaElement
  return { input, result, getByText }
}

test('testing input number', async () => {
  const { input, result } = sut()
  fireEvent.change(input, { target: { value: '233' } })
  fireEvent.change(input, { target: { value: '233b' } })
  const values = result.current.getValues()
  expect(values).toEqual({ age: '233' })
})

test('testing max lenght input number', async () => {
  const { input, result } = sut()
  fireEvent.change(input, { target: { value: '23345' } })
  fireEvent.change(input, { target: { value: '233456' } })
  const values = result.current.getValues()
  expect(values).toEqual({ age: '23345' })
})

test('testing onblur error trigger', async () => {
  const { input, getByText } = sut()
  await act(() => fireEvent.blur(input))
  expect(getByText('campo requerido'))
})
