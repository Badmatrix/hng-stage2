import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckoutList from "./pages/CheckoutList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Products />} />
          <Route path="/details/:id" element={<ProductDetail />} />
          <Route path="order" element={<CheckoutList />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
