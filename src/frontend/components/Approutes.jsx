import { Routes, Route } from 'react-router-dom';
import {
    Home,
    ProductListing,
    Cart,
    WishList
} from '../../frontend/Pages';

const Approutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path='/wishlist' element={<WishList />} />
            <Route path='/cart' element={<Cart />} />
        </Routes>
    )
}

export { Approutes };