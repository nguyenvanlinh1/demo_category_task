import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListCompany from "./components/Footer/ListCompany";
import MainFooter from "./components/Footer/MainFooter";
import Navigation from "./components/Navigation/Navigation";
import UserRouter from "./routers/UserRouter";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/*" element={<UserRouter />}></Route>
      </Routes>
      <ListCompany />
      <MainFooter />
    </>
  );
}

export default App;
