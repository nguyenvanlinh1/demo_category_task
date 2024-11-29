import LogoTy from "../../assets/LogoTyCoon.png";
import LogoTech from "../../assets/LogoTech.png";
import LogoSouth from "../../assets/LogoSouthEast.png";
import { Grid2 } from "@mui/material";

const companys = [
  {
    name: "Logo TyCoonStory",
    image: LogoTy,
  },
  {
    name: "Logo TyCoonStory",
    image: LogoTy,
  },
  {
    name: "Logo SouthEast-Aria",
    image: LogoTech,
  },
  {
    name: "Logo Tech-Collective",
    image: LogoSouth,
  },
];

const ListCompany = () => {
  return (
    <Grid2
      container
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      style={{
        backgroundColor: "#F1F1F1",
        paddingTop: "50px",
        paddingBottom: "50px",
      }}
    >
      {companys.map((item, index) => (
        <Grid2 size={{ xs: 6, md: 3 }} key={index}>
          <div style={{ display: "flex", justifyContent: "center"}}>
            <img
              style={{ width: "150px", height: "auto" }}
              src={item.image}
              alt={item.name}
            ></img>
          </div>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ListCompany;
