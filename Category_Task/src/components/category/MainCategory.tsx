import { Grid2 } from "@mui/material";
import SearchCategory from "./SearchCategory";
import ListProduct from "./ListProduct";
import Banner from "./Banner";
import PathCategory from "./PathCategory";

const MainCategory = () => {
  return (
    <div>
      <Grid2 container spacing={2} padding="20px">
        <Grid2 size={12}>
          <PathCategory/>
        </Grid2>
        <Grid2 size={{xs: 12, md:3}}>
          <SearchCategory />
        </Grid2>
        <Grid2 size={{xs: 12, md: 9}}>
          <Grid2 size={12}>
            <Banner />
          </Grid2>
          <Grid2 size={12}>
            <ListProduct />
          </Grid2>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default MainCategory;
