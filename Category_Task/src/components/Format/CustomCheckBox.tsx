import { Checkbox, FormControlLabel } from "@mui/material";

interface Props {
  lable: string;
}

const CustomCheckBox = ({ lable}: Props) => {
  return (
      <FormControlLabel
        control={
          <Checkbox
            sx={{
              "&.Mui-checked": {
                color: "#FFC900",
              },
            }}
          />
        }
        label={lable}
      />
  );
};

export default CustomCheckBox;
