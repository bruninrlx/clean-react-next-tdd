import { InputMask } from '@/components/Inputs/InputMask'
import { Control, Controller, FieldValues, Path, UseFormTrigger } from 'react-hook-form'

interface InputFormProps<FormValues extends FieldValues> {
  c: Control<FormValues, any>
  name: Path<FormValues>
  label?: string
  variant?: 'filled' | 'outlined' | 'standard'
  fullWidth?: boolean
  mask: string
  t?: UseFormTrigger<FormValues>
}

const InputMaskForm = <FormValues extends FieldValues>({
  c,
  name,
  label,
  variant,
  fullWidth,
  mask,
  t,
}: InputFormProps<FormValues>) => {
  return (
    <Controller
      name={name}
      control={c}
      render={({ field: { onChange, value }, fieldState }) => (
        <InputMask
          mask={mask}
          onChange={onChange}
          value={value}
          error={fieldState.invalid}
          variant={variant}
          label={label}
          fullWidth={fullWidth}
          onBlur={() => {
            if (t) t(name)
          }}
          helperText={fieldState.error?.message}
        />
      )}
    />
  )
}

export default InputMaskForm
