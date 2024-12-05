import { Box, Divider, Typography } from "@mui/material";
import ImageProductItem from "../../assets/ImageProductItem.png";
import ContentProductItem from "./ContentProductItem";
import CustomImage from "../Format/CustomImage";
import CustomButton, { ButtonVariant } from "../Format/CustomButton";
import CustomText, { TypographyVariant } from "../Format/CustomText";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { handleNumber } from "../../config/handleNumber";
import { useState } from "react";

const ProductItem = () => {
  const [isScale, setIsScale] = useState(false);

  const handleEnterMouse = () => {
    setIsScale(true);
  };
  const handleLeaveMouse = () => {
    setIsScale(false);
  };
  const navigate = useNavigate();

  return (
    <div className="border border-2" style={{ borderRadius: "10px" }}>
      <CustomImage
        imageUrl={ImageProductItem}
        style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
      />
      <ContentProductItem />
      <Box
        sx={{
          cursor: "pointer",
          transition: "transform 0.3s ease-in-out",
          transform: isScale ? "scale(1.2)" : "scale(1)",
          paddingX: 5,
        }}
        onMouseEnter={handleEnterMouse}
        onMouseLeave={handleLeaveMouse}
        className="d-flex justify-content-end align-items-center"
        mb={2}
        onClick={() => navigate("/product/1")}
      >
        <span className="me-2">Xem thông tin thêm</span>
        <FaArrowRightLong color="#FFA21A" />
      </Box>
      <Divider
        sx={{ height: "2px", backgroundColor: "#B9C8FF", border: "none" }}
      />
      <Box mx={2} my={2} display={"flex"} alignItems={"center"} gap={1}>
        <Typography variant="h5" fontWeight={600} color="#FFA21A">
          {handleNumber(2500000000)}
        </Typography>
        <CustomText variantTypo={TypographyVariant.BODY1} title="VND" />
      </Box>
      <CustomButton
        typeButton={ButtonVariant.CONTAINED}
        name="Mua ngay"
        onClick={() => navigate("/product/1")}
        opacity="0.8"
      />
    </div>
  );
};

export default ProductItem;
