import { Box, Grid2, Typography } from "@mui/material";
import ImageProductItem from "../assets/ImageProductItem.png"
import CustomImage from "../Components/Form/CustomImage";
import CustomText, { TypographyVariant } from "../Components/Form/CustomText";
import CustomButton, { ButtonVariant } from "../Components/Form/CustomButton";
import ContentProductItem from "./ContentProductItem";
import { useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { handleNumber } from "../Config/handleNumber";
import { useState } from "react";

const ProductItemList = () => {
  const [isScale, setIsScale] = useState(false);

  const handleEnterMouse = () => {
    setIsScale(true);
  };
  const handleLeaveMouse = () => {
    setIsScale(false);
  };

  const navigate = useNavigate();
  return (
    <Grid2
      container
      size={12}
      sx={{ border: "1px solid #DEE2E6", borderRadius: "10px" }}
    >
      <Grid2 size={{ xs: 12, sm: 3.5 }}>
        <CustomImage
          imageUrl={ImageProductItem}
          style={{
            borderEndStartRadius: "10px",
            borderStartStartRadius: "10px",
            cursor: "pointer",
          }}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 5 }}>
        <ContentProductItem />
        <Box
          className="d-flex justify-content-end align-items-center"
          mb={2}
          onClick={() => navigate("/product/1")}
          sx={{
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
            transform: isScale ? "scale(1.2)" : "scale(1)",
            paddingX: 8
          }}
          onMouseEnter={handleEnterMouse}
          onMouseLeave={handleLeaveMouse}
        >
          <span className="me-2">Xem thông tin thêm</span>
          <FaArrowRightLong color="#FFA21A" />
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 3.5 }} py={2} px={2}>
        <Box
          my={1}
          display="inline-flex"
          justifyContent="flex-end"
          alignItems="center"
          gap={1}
        >
          <Typography variant="h5" fontWeight={600} color="#FFA21A">
            {handleNumber(2500000000)}
          </Typography>
          <CustomText variantTypo={TypographyVariant.BODY1} title="VND" />
        </Box>

        <CustomButton
          typeButton={ButtonVariant.CONTAINED}
          name="Mua ngay"
          opacity="0.8"
        />
      </Grid2>
    </Grid2>
  );
};

export default ProductItemList;
