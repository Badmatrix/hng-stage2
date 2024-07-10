import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";

import CheckoutList from "./pages/CheckoutList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { useState } from "react";
import AppLayout from "./components/AppLayout";

export default function App() {
  const [carts, setCarts] = useState([]);
  const [cartBtnState, setCartBtnState] = useState(false);

  function handleAddtoCart(item) {
    const exist = carts.find((el) => el.productId === item.productId);

    if (!exist) {
      setCarts((cart) => [...cart, item]);
      setCartBtnState((btn) => !btn);
    }
    if (exist) {
      const newCart = carts.filter((cart) => cart.productId !== item.productId);
      setCarts(newCart)
      setCartBtnState((btn) => !btn);
    }
    window.scrollTo(0,0)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout carts={carts} />}>
          <Route index element={<Products />} />
          <Route
            path="details/:id"
            element={
              <ProductDetail
                carts={carts}
                handleAddtoCart={handleAddtoCart}
                cartBtnState={cartBtnState}
              />
            }
          />
          <Route path="order" element={<CheckoutList />} />
          <Route path="cart" element={<Cart carts={carts} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
