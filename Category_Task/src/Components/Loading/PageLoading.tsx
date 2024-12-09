import { Box, LinearProgress } from "@mui/material";

const PageLoading = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgress
        sx={{
          bgcolor: "#E1DEDD",
          "& .MuiLinearProgress-bar": {
            bgcolor: "#FFA21A",
          },
        }}
      />
    </Box>
  );
};

export default PageLoading;
