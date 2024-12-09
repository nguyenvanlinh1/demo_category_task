import {Grid2} from "@mui/material";
import CustomText, { TypographyVariant } from "../Components/Form/CustomText";
import CustomBreadCrumbs from "../Components/Form/CustomBreadCrumbs";

const PathCategory = () => {
  return (
    <div>
      <Grid2 container spacing={2} padding={"20px"} bgcolor={"#FFC900"}>
        <Grid2 size={12} display="flex" justifyContent="center">
          <CustomText
            variantTypo={TypographyVariant.H4}
            fontWeight={600}
            color="#2C2A29"
            title="Danh sách thiết bị thang nâng"
          />
        </Grid2>
        <Grid2 size={12} display="flex" justifyContent="center">
          <CustomBreadCrumbs />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default PathCategory;
