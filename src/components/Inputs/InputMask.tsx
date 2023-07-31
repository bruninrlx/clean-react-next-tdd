'use client'
import React, { ChangeEvent, FC, useState } from 'react'
import { TextField, TextFieldProps } from '@mui/material'
// Função para aplicar a máscara
const applyMask = (value: string, mask: string): string => {
  let rawValue = value.replace(/\D/g, '')
  let maskedValue = ''
  let rawValueIndex = 0

  for (let i = 0; i < mask.length; i++) {
    if (rawValueIndex < rawValue.length) {
      if (mask[i] === '9') {
        maskedValue += rawValue[rawValueIndex]
        rawValueIndex += 1
      } else {
        maskedValue += mask[i]
      }
    } else {
      break
    }
  }

  return maskedValue
}

export const InputMask: FC<TextFieldProps & { mask: string }> = ({ onChange, value, mask, helperText, ...props }) => {
  const [valueWithoutController, setValue] = useState('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = (event.target.value = applyMask(event.target.value, mask))
    setValue(newValue)
    if (onChange) onChange(event)
  }
  return (
    <TextField {...props} value={value ?? valueWithoutController} onChange={handleChange} helperText={helperText} />
  )
}
