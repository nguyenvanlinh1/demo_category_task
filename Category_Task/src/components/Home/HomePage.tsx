import BannerHomePage from "./BannerHomePage";
import CategoryHomePage from "./CategoryHomePage";
import ListProductHomePage from "./ListProductHomePage";
import SearchHomePage from "./SearchHomePage";
import Content from "./Content";

const listCategory = [
  {
    name: "Máy cẩu",
  },
  {
    name: "Máy xúc",
  },
  {
    name: "Xe nâng",
  },
  {
    name: "Máy phát điện",
  },
];

const HomePage = () => {
  return (
    <div style={{ margin: "0 30px" }}>
      <BannerHomePage />
      <SearchHomePage />
      <CategoryHomePage />
      {listCategory.map((item) => (
        <ListProductHomePage title={item} />
      ))}
      <Content />
    </div>
  );
};

export default HomePage;
