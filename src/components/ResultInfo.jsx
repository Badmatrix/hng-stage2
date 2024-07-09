/* eslint-disable react/prop-types */
import { MdOutlineStar } from "react-icons/md";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
export default function ResultInfo({ result, handleAddtoCart }) {
  const navigate = useNavigate();

  return (
    <section className="grid md:grid-cols-4 md:align-bottom items-center align-middle justify-center">
      <div className="md:flex md:items-center gap-3 col-span-3">
        <div className="bg-wine-100 shadow-sm shadow-newgray-100 border-newgray-100 rounded-lg px-3 py-5 lg:w-64 md:w-52 w-44 flex justify-center">
          <img src={result.image} alt={result.productName} className="" />
        </div>
        <div className="lg:space-y-3 space-y-1 ">
          <h1 className="md:text-xl text-lg capitalize font-bold text-wine-700 text-center">
            {result.productName} | {result.brand} | {result.alcoholPerc} |{" "}
            {result.quantity} cl
          </h1>
          <div className="flex justify-between">
            <h1 className="md:hidden font-bold">
              {result.price.toLocaleString()}
            </h1>
            <div className="flex items-center font-bold text-sm sm:text-lg md:text-xl">
              <span className="mr-2">{result.ratings || "4.5"}</span>

              {Array.from({ length: 5 }).map((_, i) => (
                <MdOutlineStar key={i} className=" text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <h3 className="font-bold text-xs my-1">Quantity</h3>
            <div className=" py-3 px-1 border border-newgray-100 rounded-md text-center w-36 bg-wine-70 shadow-sm shadow-newgray-100">
              {result.quantity} cl * 12 Bottles
            </div>
          </div>
        </div>
      </div>
      <div className=" col-span-1 space-y-4 sm:space-x-2 md:space-x-0">
        <Button type="text-white md:block">
          <Link to="/order">shop</Link>
        </Button>
        <Button
          type="bg-white text-wine-800 hover:text-white md:block"
          onclick={() => handleAddtoCart(result)}
        >
          add to cart
        </Button>
      </div>
    </section>
  );
}
