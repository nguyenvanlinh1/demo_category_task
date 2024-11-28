import "./App.css";
import MainCategory from "./components/category/MainCategory";
import PathCategory from "./components/category/PathCategory";
import ListCompany from "./components/footer/ListCompany";
import MainFooter from "./components/footer/MainFooter";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <PathCategory/>
      <MainCategory/>
      <ListCompany/>
      <MainFooter/>
    </>
  );
}

export default App;
