import { Button, Grid2, Typography } from "@mui/material";
import ProductItemAboutus3 from "../assets/ProductItem3.png";
import ProductItemAboutus4 from "../assets/ProductItem4.png";
import CorePrinciples from "./Content/CorePrinciples";
import Insurance from "./Content/Insurance";
import RentalItems from "./Content/RentalItems";
import Feedback from "./Content/Feedback";
import Question from "./Content/Question";
import CustomButton, { ButtonVariant } from "../Components/Form/CustomButton";

const Content = () => {
  return (
    <div className="py-3 d-flex flex-column gap-5">
      <CorePrinciples />
      <Insurance />
      <RentalItems />
      <Feedback />
      <Grid2 container spacing={5}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h4" fontWeight={600}>
            Kiếm thêm thu nhập với thiết bị nhàn rỗi của bạn
          </Typography>
          <div
            style={{
              borderRadius: "10px",
              width: "100px",
              height: "12px",
              backgroundColor: "#FFA21A",
              margin: "5px 0",
            }}
          ></div>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="body1" mb={3}>
            Thay vì để thiết bị của bạn không hoạt động, tại sao không để nó
            kiếm tiền cho bạn? Đăng ký và cho thuê chúng chỉ trong vài cú nhấp
            chuột với bảo hiểm mọi rủi ro trị giá 300 triệu miễn phí tại
            ComacPro.com!
          </Typography>
          <CustomButton
            typeButton={ButtonVariant.CONTAINED}
            name="Đăng ký đối tác ngay"
            opacity="0.8"
            isFullWidth={false}
          />
        </Grid2>
      </Grid2>
      <Grid2
        container
        bgcolor={"#FFC900"}
        borderRadius={"30px"}
        spacing={5}
        overflow={"hidden"}
        maxHeight={"400px"}
      >
        <Grid2
          size={{ xs: 12, md: 6 }}
          display={"flex"}
          flexDirection={"column"}
          px={6}
          py={10}
          gap={2}
        >
          <Typography variant="h4" fontWeight={700}>
            Khám phá hàng nghìn thiết bị thuộc hàng trăm danh mục.
          </Typography>
          <Typography variant="body2">
            Tất cả đều có sẵn, đã đăng ký và sẵn sàng cho thuê tại ComacPro.com.
          </Typography>
          <div>
            <Button
              variant="contained"
              sx={{ bgcolor: "#2C2A29", color: "#fff", borderRadius: "10px" }}
            >
              Tìm kiếm ngay
            </Button>
          </div>
        </Grid2>
        <Grid2
          container
          size={6}
          spacing={5}
          px={7}
          display={{
            xs: "none",
            md: "flex",
          }}
        >
          <Grid2
            container
            size={6}
            flexDirection={"column"}
            alignItems={"flex-start"}
            spacing={5}
          >
            {[1, 1, 1].map(() => (
              <Grid2 size={12} sx={{ translate: "0 -200px" }}>
                <img
                  src={ProductItemAboutus3}
                  style={{
                    objectFit: "cover",
                    width: "263px",
                    height: "301px",
                    borderRadius: "10px",
                  }}
                ></img>
              </Grid2>
            ))}
          </Grid2>
          <Grid2 container size={6} flexDirection={"column"} spacing={5}>
            {[1, 1, 1].map(() => (
              <Grid2 size={12} sx={{ translate: "0 -50px" }}>
                <img
                  src={ProductItemAboutus4}
                  style={{
                    objectFit: "cover",
                    width: "263px",
                    height: "301px",
                    borderRadius: "10px",
                  }}
                ></img>
              </Grid2>
            ))}
          </Grid2>
        </Grid2>
      </Grid2>
      <Question />
    </div>
  );
};

export default Content;
