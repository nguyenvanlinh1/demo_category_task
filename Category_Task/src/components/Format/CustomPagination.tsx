import { Pagination } from "@mui/material";
import { useRef, useState } from "react";

interface Props {
  count: number;
}

const CustomPagination = ({ count }: Props) => {
  const [page, setPage] = useState(1);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo(500, 500);
  };
  return (
    <div>
      <Pagination
        count={count}
        variant="outlined"
        shape="rounded"
        onChange={handlePageChange}
        hideNextButton
        hidePrevButton
        sx={{
          "& .MuiPaginationItem-root": {
            color: "#121110", // Màu chữ cho các nút
            "&:hover": {
              backgroundColor: "#FFA21A", // Màu nền khi hover
            },
          },
          "& .Mui-selected": {
            backgroundColor: "#FFA21A !important", // Nền khi nút được chọn
            color: "#121110", // Màu chữ khi nút được chọn
            border: "none",
          },
        }}
      />
    </div>
  );
};

export default CustomPagination;
