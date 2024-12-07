import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import ListCompany from "./components/Footer/ListCompany";
import MainFooter from "./components/Footer/MainFooter";
import Navigation from "./components/Navigation/Navigation";
import UserRouter from "./routers/UserRouter";
import { useEffect } from "react";

function App() {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname])
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
