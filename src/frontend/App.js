import "./App.css";
import { Home, ProductListing,Cart,WishList } from "./Pages"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>

    </div>
  );
}

export default App;
