import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import {
  Home,
  ProductListing,
  Cart,
  WishList,
  Signin,
  Signup
} from "../Pages";
import {useAuth} from './../contexts/AuthContext'
const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/" element={<ProtectedRoutes />}>
				<Route path="/cart" element={<Cart />} />
				<Route path="/wishlist" element={<WishList />} />
			</Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mockman" element={<Mockman />} />
    </Routes>
  );
};
const ProtectedRoutes=()=>{
  const { authState } = useAuth();
  const { isAuthenticated } = authState;
  return isAuthenticated?<Outlet/>:<Navigate to='/signin'/>
}
export { Approutes };
 