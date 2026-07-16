import React from "react";
import { Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SelectProductsByCondition from "./pages/SelectProductsByCondition";
import CategoryPage from './pages/CategoryPage'
import ProductDetails from "./pages/ProductDetails";
import BlogPage from "./pages/BlogPage";
import ArticlesPage from "./pages/ArticlesPage";
import ReviewsPage from './pages/ReviewsPage'
import AboutPage from "./pages/AboutPage";
import DeliveryPickupPage from './pages/DeliveryPickupPage'


function App() {
  return (
    <div>
      <Routes>

        
        <Route path="/" element={<Home />} />

        <Route path="/select-products-by-condition" element={<SelectProductsByCondition />} />

        <Route path="/category/:slug" element={<CategoryPage />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/products" element={<ProductDetails />} />

        <Route path="/blog/:id" element={<BlogPage />} />

        <Route path="/articles" element={<ArticlesPage />} />

        <Route path="/reviews" element={<ReviewsPage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/delivery" element={<DeliveryPickupPage />} />

        <Route path="/pickup" element={<DeliveryPickupPage />} />

      </Routes>
    </div>
  );
}

export default App;