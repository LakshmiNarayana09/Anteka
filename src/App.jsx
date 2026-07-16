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
import PaymentsPage from './pages/PaymentsPage'
import FavoritesPage from './pages/FavoritesPage'
import AccountPage from './pages/AccountPage'
import LicensePage from './pages/LicensePage'
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";


function App() {
  return (
    <div>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/medicines" element={<CategoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/delivery-pickup" element={<DeliveryPickupPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/payment" element={<PaymentsPage />} />
        <Route path="/licenses" element={<LicensePage />} />
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/select-products-by-condition" element={<SelectProductsByCondition />} />
        <Route path="/products" element={<ProductDetails />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/payment" element={<PaymentsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/cart" element={<CartPage />} />

      </Routes>
    </div>
  );
}

export default App;