import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import CustomText, { PropsText } from "./CustomText";
import React, { ReactNode, useState } from "react";

interface Props extends PropsText {
  lable: string;
  isBorder?: boolean;
  listItem: number[] | string[];
  paddingY?: string;
  icon?: ReactNode;
}
const CustomSelect = ({
  isBorder = true,
  title,
  fontWeight,
  variantTypo,
  listItem,
  paddingY,
  icon,
}: Props) => {
  const [item, setItem] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value as string);
  };

  return (
    <div
      style={{
        width: "100%",
        borderRadius: "10px",
        // border: isBorder ? "1px solid #DEE2E6" : "none",
      }}
    >
      <div className={`${!isBorder ? "ms-3" : ""}`}>
        <CustomText
          title={title}
          fontWeight={fontWeight}
          variantTypo={variantTypo}
        />
      </div>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "row", // Đặt các phần tử theo hàng ngang
          alignItems: "center", // Căn chỉnh theo chiều dọc
          gap: "8px", // Khoảng cách giữa icon và Select
          width: "100%", // Đảm bảo toàn bộ chiều rộng
        }}
      >
        {icon && <div>{icon}</div>}
        <Select
          value={item}
          onChange={handleChange}
          sx={{
            "& .MuiSelect-select": {
              border: "none",
              outline: "none",
              padding: "12px 15px",
              ...(paddingY !== undefined && { paddingY: `${paddingY}` }),
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: isBorder ? "1px solid #DEE2E6" : "none",
            },
            width: "100%"
          }}
          displayEmpty
        >
          <MenuItem value="" selected>
            Tất cả tình trạng
          </MenuItem>
          {listItem?.map((index) => (
            <MenuItem
              key={index}
              value={index}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#FFC900",
                  "&:hover": {
                    backgroundColor: "#fff",
                  },
                },
                "&:hover": {
                  backgroundColor: "#FFC900",
                },
              }}
            >
              {index}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomSelect;
