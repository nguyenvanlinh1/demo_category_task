import LogoTy from "../../assets/LogoTyCoon.png";
import LogoTech from "../../assets/LogoTech.png";
import LogoSouth from "../../assets/LogoSouthEast.png";

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
    <div className="px-20 d-flex justify-content-around align-items-center" style={{backgroundColor:"#F1F1F1", paddingTop:"50px", paddingBottom:"50px"}}>
      {companys.map((item, index) => (
        <div key={index}>
          <img style={{width: "150px", height:"auto"}} src={item.image} alt={item.name}></img>
        </div>
      ))}
    </div>
  );
};

export default ListCompany;
