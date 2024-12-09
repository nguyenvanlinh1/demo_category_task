import { Box, Slider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
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
  const [val, setVal] = useState<number[]>([min, max]);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number[]);
  };

  const [dynamicStep, setDynamicStep] = useState<number>(step);
  useEffect(() => {
    const newStep = val[1] <= 5000000000 ? step : step + 100000000;
    setDynamicStep(newStep);
  }, [val]);

  return (
    <div>
      <CustomText
        variantTypo={TypographyVariant.H6}
        fontWeight={600}
        title="Khoảng giá"
      />
      <Slider
        size={size}
        step={dynamicStep}
        min={min}
        max={max}
        value={val}
        valueLabelDisplay="auto"
        valueLabelFormat={(val) => formatNumber(val)}
        sx={{
          "& .MuiSlider-thumb": {
            backgroundColor: "#FFC900",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "red",
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
          onClick={() => setVal([min, val[1]])} // Chỉ điều chỉnh giá trị min
          sx={{ cursor: "pointer" }}
        >
          {formatNumber(val[0])} {/* Hiển thị giá trị min */}
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setVal([val[0], max])} // Chỉ điều chỉnh giá trị max
          sx={{ cursor: "pointer" }}
        >
          {formatNumber(val[1])} {/* Hiển thị giá trị max */}
        </Typography>
      </Box>
    </div>
  );
};

export default CustomSlider;
