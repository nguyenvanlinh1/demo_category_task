import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import CustomText, { PropsText } from "./CustomText";
import { useState } from "react";

interface Props extends PropsText {
  lable: string,
  isBorder?: boolean,
  listItem: number[] | string[],
  paddingY?: string;
}
const CustomSelect = ({ isBorder=true, title, fontWeight, variantTypo, listItem, paddingY }: Props) => {
  const [item, setItem] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value as string);
  };

  return (
    <div style={{padding:"5px", width: "100%", borderRadius:"10px", border: isBorder ? "1px solid #DEE2E6" : "none"}}>
      <div className="ms-3">
      <CustomText
        title={title}
        fontWeight={fontWeight}
        variantTypo={variantTypo}
      />
      </div>
      <FormControl sx={{ width: "100%"}}>
        {/* <InputLabel 
          sx={{
            display: open || item !== "" ? "none" : "block",
            transition: "all 0.2s ease",
            fontSize: "16px",
          }}>{lable}</InputLabel> */}
        <Select
          value={item}
          onChange={handleChange}
          sx={{
            "& .MuiSelect-select": {
              border: "none",
              outline: "none",
              ...(paddingY !== undefined && { paddingY: `${paddingY}` }),
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          displayEmpty
        >
          <MenuItem value="" selected>Tất cả tình trạng</MenuItem>
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
