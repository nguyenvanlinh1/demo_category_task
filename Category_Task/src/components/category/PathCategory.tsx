import { Breadcrumbs, Grid2, Link, Typography } from "@mui/material";

const PathCategory = () => {
  return (
    <div>
      <Grid2 container spacing={2} padding={"20px"} bgcolor={"#FFC900"}>
        <Grid2 size={12} display="flex" justifyContent="center">
          <Typography variant="h4" sx={{fontWeight: 600}}>Danh sách thiết bị thang nâng</Typography>
        </Grid2>
        <Grid2 size={12} display="flex" justifyContent="center">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Bán
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              Aerial Working Platform
            </Link>
            <Typography variant="body1" color="#000" fontWeight="500">Scissor Lift</Typography>
          </Breadcrumbs>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default PathCategory;
