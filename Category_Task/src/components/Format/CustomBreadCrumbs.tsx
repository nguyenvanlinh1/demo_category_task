import { Breadcrumbs, Link } from "@mui/material";
import CustomText, { TypographyVariant } from "./CustomText";

const CustomBreadCrumbs = () => {
  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Bán
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Aerial Working Platform
        </Link>
        <CustomText
          variantTypo={TypographyVariant.BODY1}
          fontWeight={600}
          color="#2C2A29"
          title="Scissor Lift"
        />
      </Breadcrumbs>
    </div>
  );
};

export default CustomBreadCrumbs;
