import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const InputNumber = ({
  control,
  errorFieldMessage,
  name,
  label,
  InputProps,
  inputProps,
  variant,
  setValue,
  onKeyUp
}: any) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <TextField
          type="tel"
          value={value}
          InputProps={InputProps}
          inputProps={inputProps}
          label={label}
          onPaste={(e: any) => {
            const formatCode = e.clipboardData.getData("Text").replace(/[^0-9]+/g, "");
            setValue(name, formatCode);
            
            e.preventDefault();
          }}
          onChange={onChange}
          error={errorFieldMessage}
          helperText={errorFieldMessage}
          variant={variant}
          fullWidth
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
         onKeyUp={onKeyUp}
        />
      )}
    />
  );
};

export default InputNumber;
