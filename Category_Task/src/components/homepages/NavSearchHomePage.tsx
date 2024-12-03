import { Button, Divider, Grid2, TextField, Typography } from "@mui/material";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuBadgeCheck } from "react-icons/lu";

const NavSearchHomePage = () => {
  return (
    <div>
      <Grid2
        container
        mt={{
          xs: "45px",
          md: 0
        }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        boxShadow={"0 0 20px 0 #000"}
        sx={{ borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}
      >
        <Grid2 container size={10.5} spacing={2}>
          <Grid2 size={{xs:12, md: 4}}>
            <div className="d-flex align-items-center gap-2 py-lg-4 py-2 mx-2 mx-lg-5 w-full">
              <FaSearch size={30} />
              <div>
                <Typography
                  variant="body2"
                  marginLeft={"12px"}
                  fontWeight={600}
                >
                  Danh mục
                </Typography>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bạn cần tìm gì?"
                  aria-label="Bạn cần tìm gì?"
                  style={{ border: "none" }}
                />
              </div>
            </div>
            <Divider sx={{border:"2px solid #000", display:{
              xs:"block",
              lg:"none"
            }}}/>
          </Grid2>
          <Grid2 size={{xs:12, md: 4}}>
            <div className="d-flex align-items-center gap-2 py-lg-4 mx-2 mx-lg-5 w-full">
              <LuBadgeCheck size={30} />
              <div>
                <Typography
                  variant="body2"
                  marginLeft={"12px"}
                  fontWeight={600}
                >
                  Tình trạng
                </Typography>
                <select
                  className="form-select border-0"
                  aria-label="Default select example"
                >
                  <option selected>
                    Tất cả tình trạng <FaAngleDown />
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <Divider sx={{border:"2px solid #000", display:{
              xs:"block",
              lg:"none"
            }}}/>
          </Grid2>
          <Grid2 size={{xs:12, md: 4}}>
            <div className="d-flex align-items-center gap-2 py-lg-4 mx-2 mx-lg-5 w-full">
              <IoLocationOutline size={30} />
              <div>
                <Typography
                  variant="body2"
                  marginLeft={"12px"}
                  fontWeight={600}
                >
                  Vị trí
                </Typography>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Chọn vị trí?"
                  aria-label="Chọn vị trí?"
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </Grid2>
        </Grid2>
        <Grid2 size={{xs:12, md: 1}}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#FFA21A",
              height: "45px",
              borderRadius: "10px",
              color: "#121110",
            }}
            fullWidth
          >
            Tìm kiếm
          </Button>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default NavSearchHomePage;
