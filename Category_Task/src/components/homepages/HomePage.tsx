import AboutUs from "./AboutUs";
import BannerHomePage from "./BannerHomePage";
import CategoryHomePage from "./CategoryHomePage";
import ListProductHomePage from "./ListProductHomePage";
import NavSearchHomePage from "./NavSearchHomePage";

const listCategory = [
    {
        name:"Máy cẩu"
    },
    {
        name:"Máy xúc"
    },
    {
        name:"Xe nâng"
    },
    {
        name:"Máy phát điện"
    },
]

const HomePage = () => {
  return (
    <div style={{ margin: "0 30px" }}>
      <BannerHomePage />
      <NavSearchHomePage />
      <CategoryHomePage />
      {listCategory.map((item) => (
        <ListProductHomePage title={item} />
      ))}
      <AboutUs/>
    </div>
  );
};

export default HomePage;
