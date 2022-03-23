import { Routes, Route,Navigate } from "react-router-dom";
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
    </Routes>
  );
};
const ProtectedRoutes=()=>{
  const {isAuthenticated}=useAuth();
  return isAuthenticated()?<Outlet/>:<Navigate to='signin'/>
}
export { Approutes };
 