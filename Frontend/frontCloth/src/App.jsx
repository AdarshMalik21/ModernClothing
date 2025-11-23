import Navbar from './components/navBar/NavBar'
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Browse from './components/pages/Browse'
import Create from './components/pages/Create'
import About from './components/pages/About'
import Product from './components/productDetailSection/ProductDetailSection';
import ProductDetailPage from './components/pages/ProductDetailPage';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        {/* <Route path = "/product/:id" element = {<Product />} /> */}
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </>
  )
}



export default App
