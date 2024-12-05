import { Typography } from "@mui/material";

export enum TypographyVariant {
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  BODY1 = "body1",
  BODY2 = "body2",
}

export interface PropsText {
  variantTypo?: TypographyVariant,
  fontWeight?: number,
  title?: string | number,
  color?: string,
}

const CustomText = ({ variantTypo, fontWeight, title, color } : PropsText) => {
  return (
    <div>
      <Typography variant={variantTypo} fontWeight={fontWeight} color={color}>
        {title}
      </Typography>
    </div>
  );
};

export default CustomText;
