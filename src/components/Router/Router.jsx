import { Route, Routes } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { Home } from "../Home/Home";
import { Productjsx } from "../Product/Product";
import { Signup } from "../../components/Signup/Signup";
import { Signin } from "../../components/Signin/Signin";
import { Productdetails } from "../Productdetails/Productdetails";
import { Address } from "../Address/Address";
import { Thankyou } from "../Thankyou/Thankyou";

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/product/:gender"
          element={<Productjsx></Productjsx>}
        ></Route>
        <Route
          path="/product/:gender/:id"
          element={<Productdetails></Productdetails>}
        ></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/address' element={<Address />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/thankyou" element={<Thankyou />}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
    </>
  );
};
