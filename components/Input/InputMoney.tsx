import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import InputMask from "react-input-mask";
import NumberFormat from "react-number-format";

const InputMoney = ({ control, name, label, errorFieldMessage }: any) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <NumberFormat
          onChange={onChange}
          value={value}
          variant="outlined"
          decimalScale={2}
          customInput={TextField}
          thousandSeparator={"."}
          decimalSeparator={","}
          prefix={"R$ "}
          label={label}
          error={errorFieldMessage}
          helperText={errorFieldMessage}
          fullWidth
        />
      )}
    />
  );
};

export default InputMoney;
