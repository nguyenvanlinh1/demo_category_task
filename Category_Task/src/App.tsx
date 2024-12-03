import { Route, Routes } from "react-router-dom";
import "./App.css";
import ListCompany from "./components/footer/ListCompany";
import MainFooter from "./components/footer/MainFooter";
import Navigation from "./components/navigation/Navigation";
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
