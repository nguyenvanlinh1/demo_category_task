import { Grid2, Typography } from "@mui/material";
import ProductItemInsurance from "../../assets/ProductItemAboutUs.png";
import CustomImage from "../../Components/Form/CustomImage";
import CustomButton, { ButtonVariant } from "../../Components/Form/CustomButton";
const IconProtect = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5398 4.12009L13.0398 2.06009C12.4698 1.85009 11.5398 1.85009 10.9698 2.06009L5.4698 4.12009C4.4098 4.52009 3.5498 5.76009 3.5498 6.89009V14.9901C3.5498 15.8001 4.0798 16.8701 4.7298 17.3501L10.2298 21.4601C11.1998 22.1901 12.7898 22.1901 13.7598 21.4601L19.2598 17.3501C19.9098 16.8601 20.4398 15.8001 20.4398 14.9901V6.89009C20.4498 5.76009 19.5898 4.52009 18.5398 4.12009ZM15.4798 9.72009L11.1798 14.0201C11.0298 14.1701 10.8398 14.2401 10.6498 14.2401C10.4598 14.2401 10.2698 14.1701 10.1198 14.0201L8.5198 12.4001C8.2298 12.1101 8.2298 11.6301 8.5198 11.3401C8.8098 11.0501 9.2898 11.0501 9.5798 11.3401L10.6598 12.4201L14.4298 8.65009C14.7198 8.36009 15.1998 8.36009 15.4898 8.65009C15.7798 8.94009 15.7798 9.43009 15.4798 9.72009Z"
        fill="#FFA21A"
      />
    </svg>
  );
};

const Insurance = () => {
  return (
    <Grid2 container spacing={5}>
      <Grid2 container size={{ xs: 12, md: 6 }}>
        {[1, 1, 1, 1, 1, 1, 1, 1].map((_) => (
          <Grid2 size={{ xs: 4, md: 3 }} sx={{ position: "relative" }}>
            <CustomImage imageUrl={ProductItemInsurance}/>
            <div
              className="position-absolute"
              style={{
                top: "5px",
                right: "5px",
                backgroundColor: "#3D3D3DCC",
              }}
            >
              <IconProtect />
            </div>
          </Grid2>
        ))}
      </Grid2>
      <Grid2
        size={{ xs: 12, md: 6 }}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        padding={{
          md: 5,
        }}
      >
        <Typography variant="h4" fontWeight={600}>
          Chúng tôi bảo hiểm cho thiết bị thuê
        </Typography>
        <div
          style={{
            border: "6px solid #FFA21A",
            borderRadius: "10px",
            width: "100px",
          }}
        ></div>
        <Typography variant="body1">
          Hợp tác với HongLeong Assurance, thiết bị thuê từ ComacPro được cung
          cấp bảo hiểm miễn phí trị giá 300 triệu đồng.
        </Typography>
        <CustomButton
          typeButton={ButtonVariant.CONTAINED}
          name="Xem chi tiết"
          style={{ width: "122px" }}
        />
      </Grid2>
    </Grid2>
  );
};

export default Insurance;
