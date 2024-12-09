import { Grid2, Typography } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  content: string;
}

const CorePrinciplesContent = ({ icon, title, content }: Props) => {
  return (
    <Grid2 size={12}>
      <div
        style={{
          border: "2px solid #E1DEDD",
          padding: "30px 15px",
          borderRadius: "10px",
        }}
        className="d-flex gap-3 flex-column"
      >
        <div
          className="p-2 border"
          style={{
            borderRadius: "10px",
            backgroundColor: "rgba(255, 162, 26, 0.8)",
            width: "52px",
            height: "52px",
          }}
        >
          {icon}
        </div>
        <Typography variant="h6" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body2">{content}</Typography>
      </div>
    </Grid2>
  );
};

export default CorePrinciplesContent;
