import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { InputMask } from '../../../src/components/Input/InputMask'

test('Testing input mask', () => {
  const { getByLabelText } = render(<InputMask label="CPF" mask="999.999.999-99" />)
  const input = getByLabelText('CPF') as HTMLInputElement
  fireEvent.change(input, { target: { value: '12345678911' } })
  expect(input.value).toBe('123.456.789-11')
})
