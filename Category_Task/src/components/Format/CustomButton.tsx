import { Button } from "@mui/material";
import React from "react";

export enum ButtonVariant {
  CONTAINED = "contained",
  OUTLINED = "outlined",
  TEXT = "text",
}

interface Props {
  typeButton: ButtonVariant;
  name: string;
  isFullWidth?: boolean;
  style?: React.CSSProperties;
  opacity?: string;
  onClick?: () => void;
}

const CustomButton = ({
  typeButton,
  name,
  isFullWidth = true,
  style,
  opacity,
  onClick
}: Props) => {
  return (
    <div>
      <Button
        variant={typeButton}
        sx={{
          color: "#121110",
          fontWeight: 600,
          bgcolor: "#FFA21A",
          borderRadius: "10px",
          textTransform: "capitalize",
          "&:hover": {
            opacity: opacity, // Áp dụng hiệu ứng hover
          },
        }}
        fullWidth={isFullWidth}
        style={style}
        onClick={onClick}
      >
        {name}
      </Button>
    </div>
  );
};

export default CustomButton;
