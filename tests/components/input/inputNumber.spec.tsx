import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { InputNumber } from '../../../src/components/Inputs/InputNumber'

test('Testing input number acceptance', () => {
  const { getByLabelText } = render(<InputNumber label="idade" />)
  const input = getByLabelText('idade') as HTMLTextAreaElement
  fireEvent.change(input, { target: { value: 'b' } })
  fireEvent.change(input, { target: { value: '23' } })
  expect(input.value).toBe('23')
})

test('testing maxLength', () => {
  const { getByLabelText } = render(<InputNumber label="idade" maxLength={3} />)
  const input = getByLabelText('idade') as HTMLTextAreaElement
  fireEvent.change(input, { target: { value: '233' } })
  fireEvent.change(input, { target: { value: '2334' } })
  expect(input.value).toBe('233')
})

test('testing important props', () => {
  render(<InputNumber label="idade" maxLength={3} variant="outlined" fullWidth />)
  const input = screen.getByRole('textbox', { name: 'idade' })
  const containsOutlined = Array.from(input.classList).some((className) => className.toLowerCase().includes('outlined'))
  expect(containsOutlined).toBe(true)
})
