import { Box, TextField } from "@mui/material";
import { ReactNode } from "react";
import CustomText, { TypographyVariant } from "./CustomText";

export enum TextFieldVariant {
  OUTLINED = "outlined",
  FILLED = "filled",
  STANDARD = "standard",
}

interface Props {
  name?:string;
  title?: string;
  icon?: ReactNode;
  value: string; // Nhận giá trị từ parent
  lable?: string;
  variantText: TextFieldVariant;
  multiline?: boolean;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextField = ({
  name,
  title,
  icon,
  value,
  lable,
  variantText,
  multiline,
  rows,
  onChange
}: Props) => {
  return (
    <Box>
      <CustomText
        variantTypo={TypographyVariant.BODY1}
        fontWeight={600}
        title={title}
      />
      <div className="d-flex align-items-center">
        {icon && <div>{icon}</div>}
        <TextField
          name={name}
          value={value}
          onChange={onChange}
          label={lable}
          variant={variantText}
          multiline={multiline}
          rows={rows}
          onDrop={(e) => e.preventDefault()}
          onDragOver={(e) => e.preventDefault()}
          sx={{
            "& .MuiFilledInput-root": {
              "&:before": {
                borderBottom: "none", // Xóa gạch chân mặc định
              },
              "&:after": {
                borderBottom: "none", // Xóa gạch chân khi active
              },
              "&:hover:not(.Mui-disabled):before": {
                borderBottom: "none", // Xóa gạch chân khi hover
              },
            },
            "& .MuiInputBase-input": {
              padding: "12px 15px", // Thêm padding
            },
          }}
          fullWidth
        />
      </div>
    </Box>
  );
};

export default CustomTextField;
