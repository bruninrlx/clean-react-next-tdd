'use client'
import React, { ChangeEvent, FC, useState } from 'react'
import { TextField, TextFieldProps } from '@mui/material'

export const InputNumber: FC<TextFieldProps & { maxLength?: number }> = ({
  onChange,
  value,
  maxLength,
  helperText,
  ...props
}) => {
  const [valueWithoutController, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = (event.target.value = event.target.value.replace(/[^0-9]/g, ''))
    if (!maxLength || newValue.length <= maxLength) {
      setValue(newValue)
      if (onChange) onChange(event)
    }
  }

  return (
    <TextField
      type="text"
      {...props}
      value={value ?? valueWithoutController}
      onChange={handleChange}
      helperText={helperText}
    />
  )
}
