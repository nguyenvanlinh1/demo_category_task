import { Grid2, Typography } from "@mui/material";
import FeedbackCard from "./FeedbackCard";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { useReducer } from "react";
import CustomText, { TypographyVariant } from "../../Components/Form/CustomText";
import CustomArrowButton from "../../Components/Form/CustomArrowButton";

const Feedback = () => {
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
    <Grid2 container spacing={5}>
      <Grid2 size={12}>
        <Typography variant="h4" fontWeight={600}>
          Khách hàng nói về chúng tôi
        </Typography>
        <div
          style={{
            borderRadius: "10px",
            width: "100px",
            height: "12px",
            backgroundColor: "#FFA21A",
            margin:"5px 0"
          }}
        ></div>
        <Grid2 size={12} display={"flex"} justifyContent={"space-between"}>
          <CustomText
            variantTypo={TypographyVariant.H5}
            fontWeight={500}
            title="Share with us your feedback to serve you better on our Google Review"
          />
          <div className="d-flex gap-2">
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
          </div>
        </Grid2>
      </Grid2>
      <Grid2
        container
        display={"flex"}
        flexWrap={"nowrap"}
        overflow={"hidden"}
        size={12}
        spacing={2}
      >
        {[1, 2, 3].map(() => (
          <FeedbackCard />
        ))}
      </Grid2>
    </Grid2>
  );
};

export default Feedback;
