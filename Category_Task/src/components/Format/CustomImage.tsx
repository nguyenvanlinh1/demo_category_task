import { Theme } from "@emotion/react";
import { Box, Dialog, DialogContent, SxProps } from "@mui/material";
import React, { useState } from "react";
import { MdOutlineZoomOutMap } from "react-icons/md";
import "./CSS/CustomImage.css";

interface Props {
  imageUrl: string;
  alt?: string;
  style?: React.CSSProperties;
  sx?: SxProps<Theme>;
}

const CustomImage = ({ imageUrl, alt, style, sx }: Props) => {
  const [open, setOpen] = useState(false);
  const [hoverIcon, setHoverIcon] = useState(false);
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });

  const handleClickOpen = () => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setNaturalSize({
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
      setOpen(true);
    };
  };

  const handleEnterMouse = () => {
    setHoverIcon(true);
  };
  const handleLeaveMouse = () => {
    setHoverIcon(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={sx} position={"relative"}>
      <img
        src={imageUrl}
        alt={alt}
        loading="lazy"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          cursor: "pointer",
          opacity: hoverIcon ? "0.5" : "1",
          ...style,
        }}
        onDoubleClick={handleClickOpen}
        onMouseEnter={handleEnterMouse}
        onMouseLeave={handleLeaveMouse}
      />
      {hoverIcon && ( // Nếu trạng thái hover là true, hiển thị icon
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Căn giữa icon
            display: "block",
            animation: "zoomEffect 1.5s infinite", // Thêm hiệu ứng animation
            color: "#FF2929",
          }}
          onMouseEnter={handleEnterMouse}
          onMouseLeave={handleLeaveMouse}
          onDoubleClick={handleClickOpen}
        >
          <MdOutlineZoomOutMap fontSize={50} />
        </Box>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="image-dialog"
        maxWidth="lg"
        PaperProps={{
          style: {
            width: naturalSize.width,
            height: naturalSize.height,
          },
        }}
      >
        <DialogContent style={{ padding: 0 }}>
          <img
            src={imageUrl}
            alt={alt}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default CustomImage;
