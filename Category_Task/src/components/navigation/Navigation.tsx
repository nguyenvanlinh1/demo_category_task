import { Button, Grid2, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import { FaCalendarPlus } from "react-icons/fa6";
import { HiMiniUserCircle } from "react-icons/hi2";
import { useState } from "react";

const listCategory = [
  {
    categoryName: "Bán",
  },
  {
    categoryName: "Cho thuê",
  },
  {
    categoryName: "Danh mục",
  },
  {
    categoryName: "Blogs",
  },
  {
    categoryName: "FAQ",
  },
  {
    categoryName: "Về chúng tôi",
  },
];

const Navigation = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <Grid2 container sx={{ padding: "20px" }}>
      <Grid2 size={8}>
        <img
          src={logo}
          alt="Logo"
          style={{ width: "20%", height: "auto", marginRight: "16px" }}
        />
        {listCategory.map((item, index) => (
          <Button
            variant="text"
            key={index}
            onClick={() => handleClick(index)}
            sx={{
              backgroundColor:
                selectedIndex === index ? "#FFEFD5" : "transparent",
              "&:hover": {
                backgroundColor: "#FFEFD5",
              },
              paddingX: "20px",
              paddingY: "8px",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="body1"
              color="black"
              sx={{ textTransform: "capitalize", fontWeight: 600 }}
            >
              {item.categoryName}
            </Typography>
          </Button>
        ))}
      </Grid2>
      <Grid2 size={4} display={"flex"} justifyContent={"flex-end"}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#FFA21A",
            borderRadius: "10px",
            padding: "10px",
            marginRight: "10px",
            color: "#121110",
          }}
          startIcon={<FaCalendarPlus />}
        >
          <Typography variant="subtitle2">Đăng sản phẩm</Typography>
        </Button>
        <div
          style={{
            backgroundColor: "#FFA21A",
            borderRadius: "10px",
            padding: "10px",
            color: "#121110",
            aspectRatio:1,
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
          <HiMiniUserCircle size={30} />
        </div>
      </Grid2>
    </Grid2>
  );
};

export default Navigation;
