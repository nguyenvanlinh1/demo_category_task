import { Box, Input } from "@mui/material";
import { ReactNode } from "react";
import CustomText, { PropsText } from "./CustomText";

export enum InputType {
  TEXT = "text",
}

interface Props extends PropsText{
  type: InputType;
  placeholder: string;
  icon?: ReactNode;
}

const CustomInput = ({ type, placeholder, icon, variantTypo,  title, fontWeight}: Props) => {
  return (
    <Box
      sx={{ bgcolor: "white", padding: "5px" }}
      display={"flex"}
      alignItems={"center"}
      borderRadius={"10px"}
    >
      <div style={{ margin: "0 10px", fontSize: "24px" }}>{icon}</div>
      <div>
        <CustomText title={title} fontWeight={fontWeight} variantTypo={variantTypo}/>
        <Input type={type} placeholder={placeholder} disableUnderline></Input>
      </div>
    </Box>
  );
};

export default CustomInput;
