import "./App.css";
import { Home, ProductListing } from "./Pages"
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/products" element={<ProductListing />} />

      </Routes>

    </div>
  );
}

export default App;
