import { Box, Input, SxProps, Theme, Typography } from "@mui/material";
import { ReactNode } from "react";
import CustomText, { PropsText } from "./CustomText";

export enum InputType {
  TEXT = "text",
  FILE = "file",
}

interface Props extends PropsText {
  id?: string | undefined;
  type: InputType;
  placeholder: string;
  icon?: ReactNode;
  inputRef?: React.Ref<HTMLInputElement>;
  onDrop?: (event: React.DragEvent<HTMLInputElement>) => void;
  onDragOver?: (event: React.DragEvent<HTMLInputElement>) => void;
  onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  sx?: SxProps<Theme>;
}

const CustomInput = ({
  id,
  type,
  placeholder,
  icon,
  inputRef,
  onDrop,
  onDragOver,
  onChange,
  errorMessage,
  variantTypo,
  title,
  fontWeight,
  sx,
}: Props) => {
  return (
    <>
      <Box
        sx={{ bgcolor: "white", padding: "5px", ...sx }}
        display={"flex"}
        alignItems={"center"}
        borderRadius={"10px"}
      >
        {icon && (
          <div style={{ margin: "0 10px", fontSize: "24px" }}>{icon}</div>
        )}
        <div>
          {title && (
            <CustomText
              title={title}
              fontWeight={fontWeight}
              variantTypo={variantTypo}
            />
          )}
          <Input
            id={id}
            type={type}
            placeholder={placeholder}
            disableUnderline
            inputRef={inputRef}
            inputProps={{ multiple: true }}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onChange={onChange}
          ></Input>
        </div>
      </Box>
      {errorMessage !== "" && (
        <Typography variant="body2" color="red">
          {errorMessage}
        </Typography>
      )}{" "}
      {/* Hiển thị thông báo lỗi */}
    </>
  );
};

export default CustomInput;
