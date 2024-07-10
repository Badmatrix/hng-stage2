/* eslint-disable react/prop-types */

import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CartItem from "../components/CartItem";


export default function Cart({carts}) {
  const nav = useNavigate()
  window.scroll(0, 0);
  
  return (
    <div className="mx-10 md:my-10 my-5 capitalize mb-10 lg:mb-20">
      <h1 className="text-4xl py-2 text-wine-800 border-b border-gray-100">
        carts
      </h1>
      {carts.length === 0 ? (
        <section className="my-10 space-y-2">
          <span>empty cart goto</span>
          <div className="text-wine-500 hover:text-wine-800 font-bold hover:underline text-2xl">
            <Link to="/">product &rarr;</Link>
          </div>
        </section>
      ) : (
        <section className="my-20 mx-10">
          <ul>
            {carts.map((item) => (
              <CartItem key={item.productId} item={item} />
            ))}
          </ul>
          <div className="flex justify-end space-x-4">
            <Button type="text-white md:block">
              <Link to="/order">shop now</Link>
            </Button>
            <Button
              type="bg-white text-wine-800 hover:text-white font-semibold md:block"
              onclick={() => nav("/")}
            >
              &larr; back
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
