import { Box } from "@mui/material";
import CustomText, { TypographyVariant } from "../Components/Form/CustomText";

const IconAddress = () => {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7467 6.13335C13.0467 3.05335 10.3601 1.66669 8.00006 1.66669C8.00006 1.66669 8.00006 1.66669 7.9934 1.66669C5.64006 1.66669 2.94673 3.04669 2.24673 6.12669C1.46673 9.56669 3.5734 12.48 5.48006 14.3134C6.18673 14.9934 7.0934 15.3334 8.00006 15.3334C8.90673 15.3334 9.8134 14.9934 10.5134 14.3134C12.4201 12.48 14.5267 9.57335 13.7467 6.13335ZM8.00006 9.47335C6.84006 9.47335 5.90006 8.53335 5.90006 7.37335C5.90006 6.21335 6.84006 5.27335 8.00006 5.27335C9.16006 5.27335 10.1001 6.21335 10.1001 7.37335C10.1001 8.53335 9.16006 9.47335 8.00006 9.47335Z"
        fill="#FFA21A"
      />
    </svg>
  );
};

const ContentProductItem = () => {
  return (
    <div>
      <Box px={3} py={2}>
        <CustomText
          variantTypo={TypographyVariant.BODY1}
          fontWeight={600}
          title="2021 Spider 15.75 Pro Platform Basket Spider Lift"
        />
        <Box className="d-flex align-items-center">
          <IconAddress />
          <span className="ms-2">Hà Nội</span>
        </Box>
        <Box className="d-flex justify-content-between" mb={1}>
          <div>Tình trạng</div>
          <div>Đã qua sử dụng</div>
        </Box>
        <Box className="d-flex justify-content-between" mb={2}>
          <div>Thời gian bàn giao</div>
          <div>Sẵn sàng</div>
        </Box>
      </Box>
    </div>
  );
};

export default ContentProductItem;
