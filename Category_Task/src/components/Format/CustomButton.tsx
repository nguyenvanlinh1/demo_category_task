import { Button, CircularProgress } from "@mui/material";
import React, { useState } from "react";

export enum ButtonVariant {
  CONTAINED = "contained",
  OUTLINED = "outlined",
  TEXT = "text",
}

interface Props {
  typeButton: ButtonVariant;
  name: string | JSX.Element;
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
  onClick,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const handleLoading = () => {
    if (typeof name === "string") {
      setLoading(true);
      setTimeout(() => {
        onClick?.();
        setLoading(false);
      }, 1000);
    }
  };

  return (
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
        "&.Mui-disabled": {
          bgcolor: "#FFA21A", // Màu nền khi disabled
          opacity: 0.6,
        },
      }}
      fullWidth={isFullWidth}
      style={style}
      onClick={handleLoading}
      disabled={loading}
    >
      {loading ? <CircularProgress size="25px" /> : name}
    </Button>
  );
};

export default CustomButton;
