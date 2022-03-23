import { Routes, Route } from "react-router-dom";
import {
  Home,
  ProductListing,
  Cart,
  WishList,
  Signin,
  Signup
} from "../Pages";

const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export { Approutes };
