import InputMoneyForm from '@/components/hook-form-components/input/InputMoney'
import { yupResolver } from '@hookform/resolvers/yup'
import { act, fireEvent, render, renderHook } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const sut = () => {
  const schema = yup.object().shape({
    price: yup.string().required('required'),
  })
  const { result } = renderHook(() => useForm({ resolver: yupResolver(schema) }))
  const { getByLabelText, getByText } = render(
    <InputMoneyForm c={result.current.control} t={result.current.trigger} name="price" label="price" />
  )
  const input = getByLabelText('price') as HTMLTextAreaElement
  return { input, result, getByText }
}

test('testing money input', async () => {
  const { input, result } = sut()
  fireEvent.change(input, { target: { value: '23' } })
  const values = result.current.getValues()
  expect(values).toEqual({ price: 'R$ 23' })
})

test('testing onblur error trigger', async () => {
  const { input, getByText } = sut()
  await act(() => fireEvent.blur(input))
  expect(getByText('required'))
})
