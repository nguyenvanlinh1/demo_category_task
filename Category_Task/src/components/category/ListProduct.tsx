import { CircularProgress, Grid2 } from "@mui/material";
import { SlGrid } from "react-icons/sl";
import { BsPrinter } from "react-icons/bs";
import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import ProductItemList from "./ProductItemList";
import CustomText, { TypographyVariant } from "../Format/CustomText";
import CustomPagination from "../Format/CustomPagination";

const ListProduct = () => {
  const [isCheck, setIsCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    setIsCheck(!isCheck);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [isCheck]);

  return (
    <div className="mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="px-3 py-1" style={{ borderLeft: "8px solid #FFA21A" }}>
          <CustomText
            variantTypo={TypographyVariant.H4}
            fontWeight={600}
            title="Danh sách thang nâng"
          />
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
      <div className="mt-3 d-flex justify-content-center">
        {!loading ? (
          <Grid2 container spacing={2}>
            {!isCheck
              ? [1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
                  <ProductItemList key={index} />
                ))
              : [1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, index) => (
                  <Grid2 size={{ xs: 12, sm: 6, lg: 4 }}>
                    <ProductItem key={index} />
                  </Grid2>
                ))}
            <Grid2 size={12} display={"flex"} justifyContent={"center"}>
              <CustomPagination count={10} />
            </Grid2>
          </Grid2>
        ) : (
          <CircularProgress size="50px" />
        )}
      </div>
    </div>
  );
};

export default ListProduct;
