import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";

const InputCustom = ({
  control,
  errorFieldMessage,
  name,
  mask,
  label,
  InputProps,
  variant,
  className,
  disabled
}: any) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <InputMask disabled={disabled} mask={mask} value={value} onChange={onChange} className={className} >
          {(inputProps: any) => (
            <TextField
              InputProps={InputProps}
              label={label}
              error={errorFieldMessage}
              helperText={errorFieldMessage}
              variant={variant}
              type="tel"
              fullWidth
              {...inputProps}
            />
          )}
        </InputMask>
      )}
    />
  );
};

export default InputCustom;
