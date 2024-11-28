import { Grid2, Pagination, Typography } from "@mui/material";
import { SlGrid } from "react-icons/sl";
import { BsPrinter } from "react-icons/bs";
import { useState } from "react";
import ProductItem from "./ProductItem";
import ProductItemList from "./ProductItemList";

const ListProduct = () => {
  const [isCheck, setIsCheck] = useState(false);

  const handleCheck = () => {
    setIsCheck(!isCheck);
  };

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="px-3 py-1" style={{ borderLeft: "8px solid #FFA21A" }}>
          <Typography variant="h4">Danh sách thang nâng</Typography>
        </div>
        <div className="d-flex gap-2">
          <div onClick={handleCheck}>
            <BsPrinter color={`${!isCheck ? "#FFA21A" : "black"}`} size={24} />
          </div>
          <div onClick={handleCheck}>
            <SlGrid color={`${isCheck ? "#FFA21A" : "black"}`} size={24} />
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Grid2 container spacing={2}>
          {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
            <Grid2 size={4}>
              <ProductItem key={index} />
            </Grid2>
          ))} */}
          {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
              <ProductItemList key={index} />
          ))}
          <Grid2 size={12} display={"flex"} justifyContent={"center"}>
            <Pagination
              count={10}
              variant="outlined"
              shape="rounded"
              hideNextButton
              hidePrevButton
              sx={{
                "& .MuiPaginationItem-root": {
                  backgroundColor: "#fff", // Màu nền cho các nút
                  color: "#121110", // Màu chữ cho các nút
                  "&:hover": {
                    backgroundColor: "#FFA21A", // Màu nền khi hover
                  },
                },
                "& .Mui-selected": {
                  backgroundColor: "#FFA21A", // Nền khi nút được chọn
                  color: "#121110", // Màu chữ khi nút được chọn
                  border: "none"
                },
              }}
            />
          </Grid2>
        </Grid2>
      </div>
    </div>
  );
};

export default ListProduct;
