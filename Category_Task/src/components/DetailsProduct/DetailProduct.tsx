import { Box, Button, Divider, Grid2, Typography } from "@mui/material";
import ImageProductItem from "../../assets/ImageProductItem.png";
import SliderProductItem from "../../assets/SliderProductItem.png";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const IconCheck = () => {
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7191 3.49332L13.3858 0.746652C12.6258 0.466652 11.3858 0.466652 10.6258 0.746652L3.29242 3.49332C1.87909 4.02665 0.732422 5.67998 0.732422 7.18665V17.9867C0.732422 19.0667 1.43909 20.4933 2.30576 21.1333L9.63909 26.6133C10.9324 27.5866 13.0524 27.5866 14.3458 26.6133L21.6791 21.1333C22.5458 20.48 23.2524 19.0667 23.2524 17.9867V7.18665C23.2658 5.67998 22.1191 4.02665 20.7191 3.49332ZM16.6391 10.96L10.9058 16.6933C10.7058 16.8933 10.4524 16.9867 10.1991 16.9867C9.94575 16.9867 9.69242 16.8933 9.49242 16.6933L7.35909 14.5333C6.97242 14.1467 6.97242 13.5067 7.35909 13.12C7.74576 12.7333 8.38575 12.7333 8.77242 13.12L10.2124 14.56L15.2391 9.53332C15.6258 9.14665 16.2658 9.14665 16.6524 9.53332C17.0391 9.91998 17.0391 10.5733 16.6391 10.96Z"
        fill="white"
      />
    </svg>
  );
};

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

const IconKey = () => {
  return (
    <svg
      width="51"
      height="61"
      viewBox="0 0 51 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.7019 33.8559H37.831V17.7475C37.831 10.7166 32.1113 4.997 25.0804 4.997C18.0495 4.997 12.3299 10.7166 12.3299 17.7475V33.8559H7.45898V17.7475C7.45789 8.03082 15.3626 0.125 25.0793 0.125C34.7961 0.125 42.7019 8.03082 42.7019 17.7475V33.8559Z"
        fill="#4C4A48"
      />
      <path
        d="M48.2695 26.2119H1.88945C0.845938 26.2119 0 27.0579 0 28.1014V58.2355C0 59.2791 0.845938 60.125 1.88945 60.125H48.2695C49.313 60.125 50.1589 59.2791 50.1589 58.2355V28.1014C50.1589 27.0579 49.313 26.2119 48.2695 26.2119Z"
        fill="#FFC900"
      />
    </svg>
  );
};

const DetailProduct = () => {
  return (
    <div>
      <Grid2 container spacing={3} padding="30px">
        <Grid2 container size={{xs: 12, md: 8}} spacing={4}>
          <Grid2 size={12}>
            <div className="position-relative">
              <img
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                src={ImageProductItem}
                alt="Product Item"
              />
              <Button
                sx={{
                  position: "absolute",
                  top: "50%",
                  translate:"10px -50%",
                  left: 0,
                  borderRadius: "10px",
                  padding: "12px",
                  color: "#FFA21A",
                  bgcolor: "#FFFFFF26",
                  aspectRatio: "1", // Đảm bảo tỷ lệ 1:1
                  width: "auto", // Chiều rộng tự động
                  height: "auto", // Chiều cao tự động
                  minWidth: "48px", // Chiều rộng tối thiểu
                  minHeight: "48px", // Chiều cao tối thiểu
                }}
              >
                <FaArrowLeftLong />
              </Button>
              <Button
                sx={{
                  position: "absolute",
                  top: "50%",
                  translate:"-10px -50%",
                  right: "0",
                  borderRadius: "10px",
                  padding: "12px",
                  color: "#FFA21A",
                  bgcolor: "#FFFFFF26",
                  aspectRatio: "1", // Đảm bảo tỷ lệ 1:1
                  width: "auto", // Chiều rộng tự động
                  height: "auto", // Chiều cao tự động
                  minWidth: "48px", // Chiều rộng tối thiểu
                  minHeight: "48px", // Chiều cao tối thiểu
                }}
              >
                <FaArrowRightLong />
              </Button>
            </div>
          </Grid2>
          <Grid2
            container
            spacing={2}
            display={"flex"}
            flexWrap={"nowrap"}
            style={{ overflowX: "hidden" }}
          >
            {[1, 1, 1, 1, 1, 1, 1].map((_, index) => (
              <Grid2 key={index} style={{ flex: "0 0 auto", width: "14%" }}>
                <img
                  src={SliderProductItem}
                  alt={`Product ${index}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </Grid2>
            ))}
          </Grid2>
          <Grid2
            size={12}
            border={"1px solid #DEE2E6"}
            padding={2}
            borderRadius={"10px"}
          >
            <Typography variant="h6" fontWeight={600} mb={1}>
              General Information <FaChevronDown />
            </Typography>
            <div
              style={{ gap: "8px", display: "flex", flexDirection: "column" }}
            >
              <div className="d-flex justify-content-between">
                <div>Equipment Id</div>
                <div>TE-0324-1433</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Brand</div>
                <div>Hedi</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Model</div>
                <div>CBD15J</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Manufacture</div>
                <div>2022</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Lead Time</div>
                <div>1 tuần</div>
              </div>
            </div>
          </Grid2>
          <Grid2
            size={12}
            border={"1px solid #DEE2E6"}
            padding={2}
            borderRadius={"10px"}
          >
            <Typography variant="h6" fontWeight={600} mb={1}>
              <i>Technical Information</i> <FaChevronDown />
            </Typography>
            <div
              style={{ gap: "8px", display: "flex", flexDirection: "column" }}
            >
              <div className="d-flex justify-content-between">
                <div>Width Across Fork</div>
                <div>685 mm</div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Working Câpcity</div>
                <div>1.5 tấn</div>
              </div>
            </div>
          </Grid2>
          <Grid2
            size={12}
            border={"1px solid #DEE2E6"}
            padding={2}
            borderRadius={"10px"}
          >
            <Typography variant="h6" fontWeight={600} mb={1}>
              Bảo hiểm <FaChevronDown />
            </Typography>
            <div className="d-flex align-items-center">
              <div
                className="p-2 border me-2"
                style={{
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 162, 26, 0.8)",
                }}
              >
                <IconCheck />
              </div>
              <div className="d-none d-sm-inline">
                Việc mua thiết bị của bạn sẽ được bảo vệ bởi chế độ bảo hành mua
                thiết bị của ComacPro
              </div>
            </div>
          </Grid2>
          <Grid2
            size={12}
            border={"1px solid #DEE2E6"}
            padding={2}
            borderRadius={"10px"}
          >
            <div className="d-flex justify-content-between">
              <Typography variant="h6" fontWeight={600}>
                Catelogue
              </Typography>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FFA21A",
                  color: "#121110",
                  borderRadius:"10px",
                  textTransform: "capitalize",
                }}
              >
                Tải về
              </Button>
            </div>
          </Grid2>
          {/* <Grid2
            size={12}
            borderRadius={"10px"}
            padding={2}
            boxShadow={"0 0 16px 0px #000"}
          >
            <div className="d-flex align-items-center justify-content-between">
              <IconKey />
              <div className="text-center">
                <Typography variant="h6" fontWeight={600}>
                  Đăng nhập
                </Typography>
                <div>
                  Bạn cần đăng nhập để xem thêm ảnh và thông số kỹ thuật sản
                  phẩm
                </div>
                <div>
                  <span>Bạn chưa có tài khoản?</span>
                  <Button
                    variant="text"
                    sx={{
                      color: "#1A77FF",
                      textTransform: "capitalize",
                    }}
                  >
                    Đăng ký ngay
                  </Button>
                </div>
              </div>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#FFA21A",
                  color: "#121110",
                  textTransform: "capitalize",
                }}
              >
                Đăng nhập
              </Button>
            </div>
          </Grid2> */}
        </Grid2>

        <Grid2 size={{xs: 12, md: 4}}>
          <div className="d-flex flex-column gap-2">
            <Typography variant="h6" fontWeight={600}>
              2021 Spider 15.75 Pro Platform Basket Spider Lift
            </Typography>
            <Box className="d-flex align-items-center">
              <IconAddress />
              <span className="ms-2">Hà Nội</span>
            </Box>
            <Box className="d-flex justify-content-between" mb={1}>
              <div>Tình trạng</div>
              <b>Đã qua sử dụng</b>
            </Box>
            <Box className="d-flex justify-content-between" mb={2}>
              <div>Thời gian bàn giao</div>
              <b>Sẵn sàng</b>
            </Box>
            <Divider sx={{ border: "1px solid black" }} />
            <Box mb={2}>
              <span className="me-2 fs-3" style={{ color: "#FFA21A" }}>
                2.500.000.000
              </span>
              VNĐ
            </Box>
            <Typography variant="body2">
              Bằng cách gửi yêu cầu, tin nhắn của bạn sẽ được chuyển tiếp nhanh
              chóng đến ComacPro. Thông thường, bạn sẽ nhận được phản hồi từ
              chúng tôi trong vòng 24 giờ làm việc. Hãy nhớ truy cập trang web
              và kiểm tra hộp thư đến của bạn để biết thông tin cập nhật.
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#FFA21A",
                color: "#121110",
                textTransform: "capitalize",
                mt: 2,
                borderRadius:"10px"
              }}
            >
              <b>Mua ngay</b>
            </Button>
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default DetailProduct;
