import { Box, Grid2, Input, SxProps, Theme, Typography } from "@mui/material";
import { ReactNode } from "react";
import CustomText, { PropsText } from "./CustomText";

export enum InputType {
  TEXT = "text",
  FILE = "file",
}

interface Props extends PropsText {
  id?: string | undefined;
  name?: string;
  value?: any;
  type: InputType;
  placeholder: string;
  icon?: ReactNode;
  inputRef?: React.Ref<HTMLInputElement>;
  onDrop?: (event: React.DragEvent<HTMLInputElement>) => void;
  onDragOver?: (event: React.DragEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string | undefined | null;
  sx?: SxProps<Theme>;
}

const CustomInput = ({
  id,
  name,
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
        alignItems={"center"}
        borderRadius={"10px"}
      >
        <Grid2 container>
          <Grid2 size={12} display={"flex"} alignItems={"center"}>
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
                name={name}
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
          </Grid2>
          <Grid2 size={12}>
            {errorMessage !== "" && (
              <Typography variant="body2" color="red">
                {errorMessage}
              </Typography>
            )}
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default CustomInput;
