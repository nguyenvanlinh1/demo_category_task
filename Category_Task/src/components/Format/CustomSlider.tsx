import { Box, Slider, Typography } from "@mui/material";
import { useState } from "react";
import CustomText, { TypographyVariant } from "./CustomText";


const formatNumber = (num: number) => {
  if (num >= 1000000000) {
    return `${num / 1000000000} tỷ`;
  } else if (num >= 1000000) {
    return `${num / 1000000} triệu`;
  } else if (num >= 1000) {
    return `${num / 1000} nghìn`;
  } else {
    return num.toString();
  }
};

export enum Sizes {
  SMALL = "small",
  MEDIUM = "medium",
}


interface Props {
  size: Sizes;
  step: number;
  min: number;
  max: number;
}

const CustomSlider = ({ size, step, min, max }: Props) => {
  
  const [val, setVal] = useState<number>(max);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };
  
  return (
    <div>
      <CustomText variantTypo={TypographyVariant.H6} fontWeight={600} title="Khoảng giá"/>
      <Slider
        size={size}
        step={step}
        min={min}
        max={max}
        value={val}
        valueLabelDisplay="auto"
        sx={{
          "& .MuiSlider-thumb": {
            backgroundColor: "#FFC900",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#FFFFFF",
          },
          "& .MuiSlider-track": {
            backgroundColor: "#FFC900",
            border: "none",
          },
        }}
        onChange={handleChange}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="body2"
          onClick={() => setVal(min)}
          sx={{ cursor: "pointer" }}
        >
          {min}
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setVal(max)}
          sx={{ cursor: "pointer" }}
        >
          {formatNumber(max)}
        </Typography>
      </Box>
    </div>
  );
};

export default CustomSlider;
