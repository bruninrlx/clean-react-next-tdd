import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Input } from '@/components/Input/Input'

test('Testing input with length', () => {
  const { getByLabelText } = render(<Input label="name" maxLength={5} />)
  const input = getByLabelText('name') as HTMLInputElement
  fireEvent.change(input, { target: { value: 'Bruno' } })
  fireEvent.change(input, { target: { value: 'Bruno Leandro' } })
  expect(input.value).toBe('Bruno')
})
