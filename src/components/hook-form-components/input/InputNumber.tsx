import { InputNumber } from '@/components/Input/InputNumber'
import { Control, Controller, FieldValues, Path, UseFormTrigger } from 'react-hook-form'

interface InputFormProps<FormValues extends FieldValues> {
  c: Control<FormValues, any>
  name: Path<FormValues>
  label?: string
  variant?: 'filled' | 'outlined' | 'standard'
  fullWidth?: boolean
  max?: number
  t?: UseFormTrigger<FormValues>
}

const InputNumberForm = <FormValues extends FieldValues>({
  c,
  name,
  label,
  variant,
  fullWidth,
  max,
  t,
}: InputFormProps<FormValues>) => {
  return (
    <Controller
      name={name}
      control={c}
      render={({ field: { onChange, value }, fieldState }) => (
        <InputNumber
          onChange={onChange}
          value={value}
          error={fieldState.invalid}
          variant={variant}
          label={label}
          fullWidth={fullWidth}
          maxLength={max}
          onBlur={() => {
            if (t) t(name)
          }}
          helperText={fieldState.error?.message}
        />
      )}
    />
  )
}

export default InputNumberForm
