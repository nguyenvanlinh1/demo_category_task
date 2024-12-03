import { Box, Divider, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ImageProductItem from "../../assets/ImageProductItem.png";
import { GiRoundStar } from "react-icons/gi";

const ProductItemHomePage = () => {
  return (
    <div style={{borderRadius:"10px", boxShadow:"0 0 16px 0 #001942"}}>
      <div>
        <LazyLoadImage
          src={ImageProductItem}
          alt="Product Item"
          width="100%"
          effect="blur"
          wrapperProps={{
            style: { transitionDelay: "1s" },
          }}
          style={{ cursor: "pointer", borderRadius:"10px" }}
        />
      </div>
      <Box px={3} py={2}>
        <Typography variant="body1" fontWeight={600}>
          2021 Spider 15.75 Pro Platform Basket Spider Lift
        </Typography>
        <Box className="d-flex align-items-center">
          <GiRoundStar style={{ color: "#FFA21A" }} />
          <span className="ms-2" style={{ color: "#FFA21A" }}>
            4.2
          </span>
          /5
        </Box>
        <Box className="d-flex justify-content-between" mb={1}>
          <div>Nhãn hiệu</div>
          <div>Platform Basket</div>
        </Box>
        <Box className="d-flex justify-content-between" mb={1}>
          <div>Model</div>
          <div>Spider 15.75 Pro</div>
        </Box>
        <Box className="d-flex justify-content-between" mb={2}>
          <div>Năm sản xuất</div>
          <div>2021</div>
        </Box>
        <Divider
          sx={{ height: "2px", backgroundColor: "#B9C8FF", border: "none" }}
        />
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <span style={{ color: "#FFA21A" }}>S$2000</span>/day
          <span style={{ color: "#FFA21A" }}>S$2000</span>/week
          <span style={{ color: "#FFA21A" }}>S$2000</span>/month
        </Box>
      </Box>
    </div>
  );
};

export default ProductItemHomePage;
