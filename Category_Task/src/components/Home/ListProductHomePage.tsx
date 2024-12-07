import { Grid2, Typography } from "@mui/material";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import ProductItemHomePage from "./ProductItemHomePage";
import { useEffect, useReducer } from "react";
import CustomArrowButton from "../Format/CustomArrowButton";

type ListCategory = {
  title: { name: string };
};

const ListProductHomePage = ({ title }: ListCategory) => {
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

  useEffect(() => {
    // Cập nhật state sau 5 giây (5000ms)
    const timer = setTimeout(() => {
      dispatch("Next")
    }, 5000);

    // Dọn dẹp timer khi component bị hủy hoặc count thay đổi
    return () => clearTimeout(timer);
  }, [state]);

  const handleNext = () => {
    dispatch("Next");
  };
  const handlePrev = () => {
    dispatch("Prev");
  };
  return (
    <div className="py-3" style={{overflow: "hidden"}}>
      <div className="d-flex justify-content-between">
        <div className="my-4 px-2" style={{ borderLeft: "8px solid #FFA21A" }}>
          <Typography variant="h5" color="#2C2A29" fontWeight={600}>
            {title.name}
          </Typography>
        </div>
        <div className="d-flex align-items-center gap-2">
          <CustomArrowButton
            onClick={handlePrev}
            icon={<GoArrowLeft color="#FFA21A" />}
            disabled={state === 0}
          />
          <CustomArrowButton
            onClick={handleNext}
            icon={<GoArrowRight color="#FFA21A" />}
            disabled={state === 3}
          />
          <Typography variant="body2" fontWeight={600}>
            Xem tất cả
          </Typography>
        </div>
      </div>
      <Grid2
        container
        spacing={3}
        display={"flex"}
        flexWrap={"nowrap"}
        sx={{
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${state * 20.35}%)`,
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
          <Grid2
            key={index}
            size={{ xs: 9, sm: 5, lg: 2.4 }}
            sx={{
              flex: "1 0 20%",
            }}
          >
            <ProductItemHomePage />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default ListProductHomePage;
