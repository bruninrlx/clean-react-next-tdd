import { TextField } from '@mui/material'
import { Control, Controller, FieldValues, Path, UseFormTrigger } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'

interface InputFormProps<FormValues extends FieldValues> {
  c: Control<FormValues, any>
  name: Path<FormValues>
  label?: string
  variant?: 'filled' | 'outlined' | 'standard'
  fullWidth?: boolean
  t?: UseFormTrigger<FormValues>
}

const InputMoneyForm = <FormValues extends FieldValues>({
  c,
  name,
  label,
  variant,
  fullWidth,
  t,
}: InputFormProps<FormValues>) => {
  return (
    <Controller
      name={name}
      control={c}
      render={({ field: { onChange, value }, fieldState }) => (
        <NumericFormat
          onChange={onChange}
          value={value}
          variant={variant}
          decimalScale={2}
          customInput={TextField}
          thousandSeparator={'.'}
          decimalSeparator={','}
          prefix={'R$ '}
          label={label}
          fullWidth={fullWidth}
          onBlur={() => {
            if (t) t(name)
          }}
          helperText={fieldState.error?.message}
          error={fieldState.invalid}
        />
      )}
    />
  )
}

export default InputMoneyForm
