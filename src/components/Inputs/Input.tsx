'use client'
import React, { ChangeEvent, FC, useState } from 'react'
import { TextField, TextFieldProps } from '@mui/material'

export const Input: FC<TextFieldProps & { maxLength?: number }> = ({
  onChange,
  value,
  maxLength,
  helperText,
  ...props
}) => {
  const [valueWithoutController, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!maxLength || event.target.value.length <= maxLength) {
      setValue(event.target.value)
      if (onChange) onChange(event)
    }
  }

  return (
    <TextField {...props} value={value ?? valueWithoutController} onChange={handleChange} helperText={helperText} />
  )
}
