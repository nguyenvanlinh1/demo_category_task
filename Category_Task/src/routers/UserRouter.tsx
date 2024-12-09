import { Route, Routes } from "react-router-dom"
import MainCategory from "../Category/MainCategory"
import DetailProduct from "../DetailsProduct/DetailProduct"
import HomePage from "../Home/HomePage"
import Post from "../Post/Post"
import OTP from "../Auth/OTP"

const UserRouter = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/product" element={<MainCategory/>}></Route>
          <Route path="/product/1" element={<DetailProduct/>}></Route>
          <Route path="/post" element={<Post/>}></Route>
          <Route path="/otp" element={<OTP/>}></Route>
        </Routes>
    </div>
  )
}

export default UserRouter