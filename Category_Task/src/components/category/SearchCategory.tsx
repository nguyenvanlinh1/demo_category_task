import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Input,
  Slider,
  Typography,
} from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { PiMapPinBold } from "react-icons/pi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { useState } from "react";

const MAX = 10000000000;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

const SearchCategory = () => {
  const [val, setVal] = useState<number>(MIN);
  const handleChange = (_: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };
  return (
    <div className="d-grid gap-3">
      <FormControl
        sx={{
          bgcolor: "#FFC900",
          padding: "10px",
          gap: 2,
          borderRadius: "10px",
        }}
        fullWidth
      >
        <Typography variant="h5">Tìm kiếm thiết bị</Typography>
        <Box sx={{ bgcolor: "white", padding: "5px", borderRadius: "10px" }}>
          <BsSearch style={{ marginRight: "10px", fontSize: "24px" }} />
          <Input
            type="text"
            placeholder="Bạn cần tìm gì?"
            disableUnderline
          ></Input>
        </Box>
        <Box sx={{ bgcolor: "white", padding: "5px", borderRadius: "10px" }}>
          <PiMapPinBold style={{ marginRight: "10px", fontSize: "24px" }} />
          <Input
            type="text"
            placeholder="Chọn vị trí?"
            disableUnderline
          ></Input>
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            padding: "5px",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <HiOutlineBadgeCheck
            style={{ marginRight: "5px", fontSize: "30px" }}
          />
          <select
            className="form-select border-0 p-2"
            aria-label="Default select example"
          >
            <option selected>Tất cả tình trạng</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </Box>
        <Button
          variant="contained"
          sx={{
            color: "black",
            fontWeight: 600,
            bgcolor: "#FFA21A",
            borderRadius: "10px",
            mb: "5px",
          }}
        >
          Tìm kiếm
        </Button>
      </FormControl>
      <Box
        sx={{
          border: "1px solid #000",
          borderRadius: "10px",
          gap: 2,
          height: "300px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#FFC900",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#f0f0f0",
            borderRadius: "10px",
          },
        }}
      >
        <Typography variant="h5">Thương hiệu</Typography>
        <Box
          sx={{
            overflowY: "scroll",
            height: "280px",
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <FormGroup>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label="Airman"
              />
            ))}
          </FormGroup>
        </Box>
      </Box>
      <Box>
        <select className="form-select" aria-label="Default select example">
          <option selected>Đời thiết bị</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </Box>
      <Box
        sx={{
          border: "1px solid #000",
          borderRadius: "10px",
          gap: 2,
          padding: "20px",
        }}
      >
        <Typography variant="h6">Khoảng giá</Typography>
        <Slider
          marks={marks}
          step={100000000}
          value={val}
          valueLabelDisplay="auto"
          min={MIN}
          max={MAX}
          onChange={handleChange}
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
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="body2"
            onClick={() => setVal(MIN)}
            sx={{ cursor: "pointer" }}
          >
            {MIN}
          </Typography>
          <Typography
            variant="body2"
            onClick={() => setVal(MAX)}
            sx={{ cursor: "pointer" }}
          >
            10 tỷ
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default SearchCategory;