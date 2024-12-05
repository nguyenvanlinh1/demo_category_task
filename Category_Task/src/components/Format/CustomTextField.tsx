import { TextField } from "@mui/material";
import { ReactNode } from "react";

export enum TextFieldVariant {
  OUTLINED = "outlined",
  FILLED = "filled",
  STANDARD = "standard",
}

interface Props {
  icon: ReactNode;
  label: string;
  variantText: TextFieldVariant;
}

const CustomTextField = ({ icon, label, variantText }: Props) => {
  return (
    <div className="d-flex align-items-center">
      <div>{icon}</div>
      <div>
        <TextField
          label={label}
          variant={variantText}
        />
      </div>
    </div>
  );
};

export default CustomTextField;
