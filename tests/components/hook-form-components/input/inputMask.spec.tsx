import InputMaskForm from '@/components/hook-form-components/input/InputMask'
import { yupResolver } from '@hookform/resolvers/yup'
import { act, fireEvent, render, renderHook } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const sut = () => {
  const schema = yup.object().shape({
    cpf: yup.string().required('campo requerido'),
  })
  const { result } = renderHook(() => useForm({ resolver: yupResolver(schema) }))
  const { getByLabelText, getByText } = render(
    <InputMaskForm t={result.current.trigger} c={result.current.control} name="cpf" label="cpf" mask="999999999-99" />
  )
  const input = getByLabelText('cpf') as HTMLTextAreaElement
  return { input, result, trigger: result.current.trigger, getByText }
}

test('testing mask', async () => {
  const { input, result } = sut()
  fireEvent.change(input, { target: { value: '45849784845' } })
  const values = result.current.getValues()
  expect(values).toEqual({ cpf: '458497848-45' })
})

test('testing onblur error trigger', async () => {
  const { input, getByText } = sut()
  await act(() => fireEvent.blur(input))
  expect(getByText('campo requerido'))
})
