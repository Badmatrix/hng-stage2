import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Products from "./pages/Products";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CheckoutList from "./pages/CheckoutList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { useState } from "react";

const fakeCart = [
  {
    productId: 1,
    productName: "martini rose",
    image: "/images/PixCut-removebg_thumbnail 1 (1).svg",
    price: 6000,
    brand: "red wine",
    alcoholPerc: "12%",
    quantity: 75,
    ratings: 4.5,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos doloribus assumenda eum ab voluptatem aspernatur est totam iure a numquam fuga id ullam praesentium, tempore maiores officiis ducimus fugiat nostrum.",
  },
];

export default function App() {
  const [carts, setCarts] = useState([]);

  function handleAddtoCart(item) {
    const exist = carts.find((el) => el.productId === item.productId);

    if (!exist) setCarts((cart) => [...cart, item]);
  }
  return (
    <div>
      <BrowserRouter>
        <Header carts={ carts} />
        <Routes>
          <Route index element={<Products />} />
          <Route
            path="/details/:id"
            element={
              <ProductDetail carts={carts} handleAddtoCart={handleAddtoCart} />
            }
          />
          <Route path="order" element={<CheckoutList />} />
          <Route path="cart" element={<Cart carts={carts} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
