import { Button, Grid2, Typography } from "@mui/material";
import EarthMoving from "../assets/EarthMoving.png";
import Excavator from "../assets/Excavator.png";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useReducer } from "react";
import CustomImage from "../Components/Form/CustomImage";
import CustomArrowButton from "../Components/Form/CustomArrowButton";

const listCategory = [
  {
    name: "Earth Moving",
  },
  {
    name: "Lifting Equipment",
  },
  {
    name: "Aerial Working Platform",
  },
  {
    name: "Material Handling",
  },
  {
    name: "Generator & Air Compressor",
  },
  {
    name: "Compaction Equipment",
  },
  {
    name: "Concrete Equipment",
  },
  {
    name: "Site Preparation & Services",
  },
  {
    name: "Light Equipment & Tools",
  },
  {
    name: "Technology",
  },
  {
    name: "Safety Equipment",
  },
  {
    name: "Vehicle",
  },
  {
    name: "Others",
  },
];

const CategoryHomePage = () => {
  const reducer = (state: number, action: string) => {
    switch (action) {
      case "Next":
        return state + 1 > 3 ? 3 : state + 1;
      case "Prev":
        return state - 1 < 0 ? 0 : state - 1;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);

  const handleNext = () => {
    dispatch("Next");
  };
  const handlePrev = () => {
    dispatch("Prev");
  };
  return (
    <div>
      <div className="my-4 px-2" style={{ borderLeft: "8px solid #FFA21A" }}>
        <Typography variant="h5" color="#2C2A29" fontWeight={600}>
          Danh mục thiết bị mới và đã qua sử dụng
        </Typography>
      </div>
      <div
        className=""
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "14px",
        }}
      >
        {listCategory.map((item, index) => (
          <Button
            variant="contained"
            sx={{
              bgcolor: index === 0 ? "#FFA21A" : "#EDEDED",
              color: "#2C2A29",
              borderRadius: "10px",
            }}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <Grid2 container mt={4}>
        <Grid2
          container
          size={{ xs: 12, md: 2.4 }}
          bgcolor={"#FFC900"}
          spacing={3}
          justifyContent={"center"}
          py={"20px"}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            width={"100%"}
            textAlign={"center"}
          >
            Earth Moving
          </Typography>
          <CustomImage
            imageUrl={EarthMoving}
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
            }}
          />
          {/* <img src={EarthMoving} className="d-none d-lg-block" /> */}
          <Button
            variant="outlined"
            sx={{
              borderRadius: "10px",
              width: "198px",
              color: "#2C2A29",
              borderColor: "#2C2A29",
              textTransform: "capitalize",
              fontWeight: 600,
            }}
          >
            Xem tất cả
          </Button>
        </Grid2>
        <Grid2
          container
          size={{ xs: 12, md: 9.6 }}
          position={"relative"}
          overflow={"hidden"}
          display={"flex"}
          flexWrap={"nowrap"}
        >
          {[1, 1, 1, 1].map((_, index) => (
            <Grid2
              key={index}
              size={{ xs: 9, md: 3 }}
              textAlign={"center"}
              padding={"25px"}
              border={"1px solid #E1DEDD"}
              flex="0 0 auto"
            >
              <Typography variant="h6" fontWeight={600}>
                Excavator
              </Typography>
              <CustomImage imageUrl={Excavator} />
            </Grid2>
          ))}
          <CustomArrowButton
            onClick={handlePrev}
            icon={<GoArrowLeft color="#FFA21A" />}
            disabled={state === 0}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
            }}
          />
          <CustomArrowButton
            onClick={handleNext}
            icon={<GoArrowRight color="#FFA21A" />}
            disabled={state === 3}
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
            }}
          />
        </Grid2>
      </Grid2>
    </div>
  );
};

export default CategoryHomePage;
