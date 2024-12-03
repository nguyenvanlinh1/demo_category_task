import { Box, Button, Grid2, Typography } from "@mui/material";
import ImageProductItem from "../../assets/ImageProductItem.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

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

const ProductItemList = () => {
  const navigate = useNavigate();
  const transferDetailProduct = () => {
    navigate("/product/1");
  };
  return (
    <Grid2
      container
      size={12}
      sx={{ border: "1px solid #DEE2E6", borderRadius: "10px" }}
    >
      <Grid2 size={{ xs: 12, sm: 3.5 }}>
        <img
          loading="lazy"
          src={ImageProductItem}
          alt="Product Item"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            borderEndStartRadius: "10px",
            borderStartStartRadius: "10px",
            cursor: "pointer",
          }}
          onClick={transferDetailProduct}
        ></img>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 5 }}>
        <Box px={3} py={2}>
          <Typography variant="body1" sx={{ fontWeight: "600" }}>
            2021 Spider 15.75 Pro Platform Basket Spider Lift
          </Typography>
          <Box className="d-flex align-items-center">
            <IconAddress />
            <span className="ms-2">Hà Nội</span>
          </Box>
          <Box className="d-flex justify-content-between" mt={1}>
            <div>Tình trạng</div>
            <div>Đã qua sử dụng</div>
          </Box>
          <Box className="d-flex justify-content-between" mb={2}>
            <div>Thời gian bàn giao</div>
            <div>Sẵn sàng</div>
          </Box>
          <Box className="d-flex justify-content-end align-items-center">
            <span className="me-2">Xem thông tin thêm</span>
            <FaArrowRightLong color="#FFA21A" />
          </Box>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 3.5 }} px={2} py={2}>
        <Box display={"flex"} justifyContent={"flex-end"} alignItems={"center"}>
          <span
            className="me-2"
            style={{ color: "#FFA21A", fontSize: "24px", fontWeight: "600" }}
          >
            2.500.000.000
          </span>
          VNĐ
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#FFA21A",
            color: "#121110",
            borderRadius: "10px",
            fontWeight: "600",
            textTransform: "capitalize",
          }}
          fullWidth
        >
          Mua ngay
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default ProductItemList;
