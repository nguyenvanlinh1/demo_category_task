import { Grid2, Rating, Typography } from "@mui/material";

const IconFeedback = () => {
  return (
    <svg
      width="82"
      height="60"
      viewBox="0 0 82 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M61.7849 60C50.5224 60 42.3667 50.6793 42.3667 36.91C42.4373 16.8916 57.5129 2.73399 79.226 0.0154419C81.2384 -0.231697 82.0151 2.55746 80.1792 3.36949C71.8471 7.0766 67.6457 11.7723 67.0808 16.4326C66.6571 19.9279 68.5636 22.9642 70.9291 23.5291C77.0723 25.012 81.2031 32.6733 81.2031 40.5818C81.2031 51.3148 72.5179 60 61.7849 60Z"
        fill="#FFA21A"
        fill-opacity="0.4"
      />
      <path
        d="M19.4177 60C8.15517 60 -0.000465393 50.6793 -0.000465393 36.91C0.0701447 16.8916 15.1457 2.73399 36.8588 0.0154419C38.8712 -0.231697 39.648 2.55746 37.812 3.36949C29.4799 7.0766 25.2785 11.7723 24.7136 16.4326C24.2899 19.9279 26.1964 22.9642 28.5619 23.5291C34.7051 25.012 38.8359 32.6733 38.8359 40.5818C38.8359 51.3148 30.1507 60 19.4177 60Z"
        fill="#FFA21A"
        fill-opacity="0.4"
      />
    </svg>
  );
};

const FeedbackCard = () => {
  return (
    <Grid2
      size={{ xs: 8, md: 4}}
      display={"flex"}
      flexDirection={"column"}
      gap={5}
      padding={5}
      borderRadius={"10px"}
      flex="0 0 75%"
      border={"2px solid #E1DEDD"}
    >
      <div className="d-flex justify-content-between align-items-end">
        <IconFeedback />
        <Rating name="half-rating" defaultValue={5} precision={0.5} readOnly />
      </div>
      <Typography variant="body2">
        We are committed to providing our customers with super exceptional
        service while offering our employees the best training and a working
        environment in which they can excel best of all place for more than a
        half century. This company focus has been in place for more than a half
        century. We are committed.
      </Typography>
      <Typography variant="h6" fontWeight={600}>
        Tuấn Anh
      </Typography>
    </Grid2>
  );
};

export default FeedbackCard;
