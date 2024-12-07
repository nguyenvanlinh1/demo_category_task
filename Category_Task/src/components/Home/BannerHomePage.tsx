import { Box, Button, Grid2, Typography } from "@mui/material";
import ProductItemBanner from "../../assets/ProductItemBanner.png";
import CustomImage from "../Format/CustomImage";

const BannerHomePage = () => {
  return (
    <div>
      <Grid2
        container
        spacing={2}
        bgcolor={"#FFD400"}
        sx={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}
        position={"relative"}
      >
        <Grid2
          size={6}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            px: { xs: "12px", sm: "20px", md: "30px" },
            py: {
              xs: "20px",
              md: "50px",
            },
          }}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            sx={{
              fontSize: { xs: "14px", sm: "28px", md: "40px" },
            }}
          >
            Nền tảng cho thuê B2B lớn nhất Việt Nam
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: {
                xs: "10px",
                md: "28px",
              },
            }}
          >
            Tìm kiếm, so sánh và thuê hàng nghìn thiết bị thuộc hàng trăm danh
            mục chỉ trong vài cú nhấp chuột
          </Typography>
        </Grid2>
        <Box
          className="position-absolute d-flex align-items-center"
          sx={{
            left: 0,
            width: "100%",
            bottom: { xs: "-45px", md: 0 },
          }}
        >
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FFA21A",
              color: "#121110",
              width: {
                xs: "50%",
                md: "132px",
              },
              height: "45px",
              borderRadius: "0",
              borderTopLeftRadius: "10px",
            }}
          >
            Bán
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FFF",
              color: "#4C4A48",
              width: {
                xs: "50%",
                md: "132px",
              },
              height: "45px",
              borderRadius: "0",
              borderTopRightRadius: "10px",
            }}
          >
            Cho thuê
          </Button>
          {/* <CustomButton/> */}
          <span className="mx-3 d-none d-xl-inline">Hoặc</span>
          <Button
            variant="contained"
            size="small"
            sx={{
              bgcolor: "#FFF",
              color: "#2C2A29",
              borderRadius: "100px",
              display: {
                xs: "none",
                lg: "inline",
              },
            }}
          >
            Gửi yêu cầu của bạn
          </Button>
        </Box>
        <Grid2 size={6} position={"relative"} display={"flex"} alignItems={"center"} justifyContent={"center"} my={3}>
          <CustomImage imageUrl={ProductItemBanner}/>
          <Box
            className="position-absolute d-flex gap-1"
            sx={{
              bottom: {
                xs: "-15px",
                sm: "-10px",
                md: -5,
              },
              right: {
                xs: "90%",
                md: 10,
              },
            }}
          >
            {[1, 1, 1, 1].map((_, index) => (
              <div
                key={index}
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: index === 0 ? "#FFA21A" : "#fff",
                  borderRadius: "50%",
                }}
              ></div>
            ))}
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default BannerHomePage;
