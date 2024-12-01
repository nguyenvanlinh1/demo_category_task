import { Route, Routes } from "react-router-dom"
import MainCategory from "../components/category/MainCategory"
import DetailProduct from "../components/DetailsProduct/DetailProduct"

const UserRouter = () => {
  return (
    <div>
        <Routes>
          <Route path="/product" element={<MainCategory/>}></Route>
          <Route path="/product/1" element={<DetailProduct/>}></Route>
        </Routes>
    </div>
  )
}

export default UserRouter