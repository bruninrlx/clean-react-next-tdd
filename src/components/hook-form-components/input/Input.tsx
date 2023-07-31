import { Input } from '@/components/Inputs/Input'
import { Control, Controller, FieldValues, Path, UseFormTrigger } from 'react-hook-form'

interface InputFormProps<FormValues extends FieldValues> {
  c: Control<FormValues, any>
  name: Path<FormValues>
  label?: string
  variant?: 'filled' | 'outlined' | 'standard'
  fullWidth?: boolean
  max?: number
  t?: UseFormTrigger<FormValues>
  type?: string
}

const InputForm = <FormValues extends FieldValues>({
  c,
  name,
  label,
  variant,
  fullWidth,
  max,
  t,
  type,
}: InputFormProps<FormValues>) => {
  return (
    <Controller
      name={name}
      control={c}
      render={({ field: { onChange, value }, fieldState }) => (
        <Input
          onChange={onChange}
          value={value}
          error={fieldState.invalid}
          variant={variant}
          label={label}
          fullWidth={fullWidth}
          maxLength={max}
          onBlur={async () => {
            if (t) await t(name)
          }}
          helperText={fieldState.error?.message}
          type={type}
        />
      )}
    />
  )
}

export default InputForm
