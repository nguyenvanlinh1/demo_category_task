import { Box, Button, Divider, Grid2, Typography } from "@mui/material";
import ImageProductItem from "../../assets/ImageProductItem.png";
import SliderProductItem from "../../assets/SliderProductItem.png";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import CustomImage from "../Format/CustomImage";
import CustomButton, { ButtonVariant } from "../Format/CustomButton";
import CustomArrowButton from "../Format/CustomArrowButton";
import { useEffect, useReducer } from "react";
import ContentProductItem from "../Category/ContentProductItem";
import { handleNumber } from "../../config/handleNumber";
import InfoList from "./InforList";

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

const data1 = [
  { label: "Equipment Id", value: "TE-0324-1433" },
  { label: "Brand", value: "Hedi" },
  { label: "Model", value: "CBD15J" },
  { label: "Manufacture", value: "2022" },
  { label: "Lead Time", value: "1 tuần" },
];

const data2 = [
  { label: "Width Across Fork", value: "685 mm" },
  { label: "Working Câpcity", value: "1.5 tấn" },
];

const DetailProduct = () => {

  const reducer = (state: number, action: string) => {
    switch (action) {
      case "Next":
        return state + 1 > 3 ? 3 : state + 1;
      case "Prev":
        return state - 1 < 0 ? 0 : state - 1;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);

  const handleNext = () => {
    dispatch("Next");
  };
  const handlePrev = () => {
    dispatch("Prev");
  };
  return (
    <div>
      <Grid2 container spacing={3} padding="30px">
        <Grid2 container size={{ xs: 12, md: 8 }} spacing={4}>
          <Grid2 size={12}>
            <div className="position-relative">
              <CustomImage imageUrl={ImageProductItem} />
              <CustomArrowButton
                onClick={handlePrev}
                icon={<FaArrowLeftLong />}
                disabled={state === 0}
                style={{
                  position: "absolute",
                  top: "50%",
                  translate: "10px -50%",
                  left: 0,
                  fontSize: "24px",
                }}
              />
              <CustomArrowButton
                onClick={handleNext}
                icon={<FaArrowRightLong />}
                disabled={state === 3}
                style={{
                  position: "absolute",
                  top: "50%",
                  translate: "-10px -50%",
                  right: "0",
                  fontSize: "24px",
                }}
              />
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
                <CustomImage imageUrl={SliderProductItem} />
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
            <InfoList items={data1} />
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
            <InfoList items={data2} />
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
                  borderRadius: "10px",
                  textTransform: "capitalize",
                }}
              >
                Tải về
              </Button>
            </div>
          </Grid2>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 4 }}>
          <ContentProductItem />
          <Divider sx={{ border: "1px solid black" }} />
          <Box padding={3}>
            <Box mb={2}>
              <span className="me-2 fs-3" style={{ color: "#FFA21A" }}>
                {handleNumber(2500000000)}
              </span>
              VNĐ
            </Box>
            <Typography variant="body2">
              Bằng cách gửi yêu cầu, tin nhắn của bạn sẽ được chuyển tiếp nhanh
              chóng đến ComacPro. Thông thường, bạn sẽ nhận được phản hồi từ
              chúng tôi trong vòng 24 giờ làm việc. Hãy nhớ truy cập trang web
              và kiểm tra hộp thư đến của bạn để biết thông tin cập nhật.
            </Typography>
            <CustomButton
              typeButton={ButtonVariant.CONTAINED}
              name="Mua ngay"
              opacity="0.8"
            />
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default DetailProduct;
