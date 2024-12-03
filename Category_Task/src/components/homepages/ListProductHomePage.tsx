import { Grid2, Typography } from "@mui/material";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import ProductItemHomePage from "./ProductItemHomePage";

type ListCategory = {
    title : {name: string};
}

const ListProductHomePage = ( {title}:ListCategory) => {
  return (
    <div className="py-3">
      <div className="d-flex justify-content-between">
        <div className="my-4 px-2" style={{ borderLeft: "8px solid #FFA21A" }}>
          <Typography variant="h5" color="#2C2A29" fontWeight={600}>
            {title.name}
          </Typography>
        </div>
        <div className="d-flex align-items-center gap-2">
          <div
            className="p-3 border d-flex justify-content-center align-items-center"
            style={{
              borderRadius: "10px",
              backgroundColor: "rgba(255, 162, 26, 0.15)",
            }}
          >
            <GoArrowLeft color="#FFA21A" />
          </div>
          <div
            className="p-3 border d-flex justify-content-center align-items-center "
            style={{
              borderRadius: "10px",
              backgroundColor: "rgba(255, 162, 26, 0.3)",
            }}
          >
            <GoArrowRight color="#FFA21A" />
          </div>
          <Typography variant="body2" fontWeight={600}>
            Xem tất cả
          </Typography>
        </div>
      </div>
      <Grid2 container spacing={3} display={"flex"} flexWrap={"nowrap"} overflow={"hidden"}>
        {[1, 1, 1, 1, 1].map((_, index) => (
          <Grid2 key={index} size={{xs:9, md:2.4}} sx={{
            flex:"0 0 auto",
          }}>
            <ProductItemHomePage />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default ListProductHomePage;
