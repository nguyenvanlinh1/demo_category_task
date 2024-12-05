import { Box, Typography } from "@mui/material";

interface Props {
  title: string;
  description: string;
}

const CustomTitle = ({ title, description }: Props) => {
  return (
    <Box sx={{display:"flex", flexDirection:"column", gap: 2}}>
      <Typography variant="h4" fontWeight={600}>
        {title}
      </Typography>
      <div
        style={{
          borderRadius: "10px",
          width: "100px",
          height: "12px",
          backgroundColor: "#FFA21A"
        }}
      ></div>
      <Typography variant="body1">{description}</Typography>
    </Box>
  );
};

export default CustomTitle;
