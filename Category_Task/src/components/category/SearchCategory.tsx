import { Box, FormControl, FormGroup } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { PiMapPinBold } from "react-icons/pi";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import CustomSlider, { Sizes } from "../Format/CustomSlider";
import CustomButton, { ButtonVariant } from "../Format/CustomButton";
import CustomCheckBox from "../Format/CustomCheckBox";
import CustomInput, { InputType } from "../Format/CustomInput";
import CustomText, { TypographyVariant } from "../Format/CustomText";
import CustomSelect from "../Format/CustomSelect";

const SearchCategory = () => {
  return (
    <div className="d-grid gap-3">
      {/* From tìm kiếm sản phẩm */}
      <FormControl
        sx={{
          bgcolor: "#FFC900",
          padding: "10px",
          gap: 2,
          borderRadius: "10px",
        }}
        fullWidth
      >
        <CustomText
          variantTypo={TypographyVariant.H6}
          fontWeight={600}
          title="Tìm kiếm thiết bị"
        />
        <CustomInput
          icon={<BsSearch />}
          type={InputType.TEXT}
          placeholder="Bạn cần làm gì?"
        />
        <CustomInput
          icon={<PiMapPinBold />}
          type={InputType.TEXT}
          placeholder="Chọn vị trí?"
        />
        <Box
          bgcolor={"#fff"}
          borderRadius={"10px"}
          display={"flex"}
          alignItems={"center"}
        >
          <HiOutlineBadgeCheck
            fontSize={"24px"}
            style={{ margin: "0 0 0 18px" }}
          />
          <CustomSelect lable="Tất cả tình trạng" isBorder={false} listItem={[1,2,3]} />
        </Box>
        <CustomButton typeButton={ButtonVariant.CONTAINED} name="Tìm kiếm" opacity="0.8"/>
      </FormControl>

      {/* Thương hiệu */}
      <Box
        sx={{
          border: "1px solid #DEE2E6",
          borderRadius: "10px",
          gap: 2,
          height: "300px",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CustomText
          variantTypo={TypographyVariant.BODY1}
          fontWeight={600}
          title="Thương hiệu"
        />
        <Box
          sx={{
            overflowY: "scroll",
            height: "280px",
            padding: "10px",
            borderRadius: "10px",
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
          <FormGroup>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(() => (
              <CustomCheckBox lable="Airman" />
            ))}
          </FormGroup>
        </Box>
      </Box>

      {/* Đời thiết bị */}
      <Box
        sx={{
          bgcolor: "white",
          display: "flex",
          alignItems: "center",
          borderRadius: "10px",
          width: "100%",
        }}
      >
        <CustomSelect lable="Đời thiết bị" listItem={[1,2,3]}/>
      </Box>

      {/* Khoảng giá */}
      <Box
        sx={{
          border: "1px solid #DEE2E6",
          borderRadius: "10px",
          gap: 2,
          padding: "20px",
        }}
      >
        <CustomSlider
          size={Sizes.MEDIUM}
          step={10000000}
          min={0}
          max={10000000000}
        />
      </Box>
    </div>
  );
};

export default SearchCategory;
