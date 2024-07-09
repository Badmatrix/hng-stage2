import ProductContainer from "./ProductContainer";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import WineProducts from "../WineProducts";

export default function ProductContents() {
  return (
    <section className=" lg:col-span-3 my-5">
      <div className="md:my-7 my-4">
        <div className="flex justify-between md:mx-10 mx-5">
          <form>
            <input
              type="search"
              placeholder="search for product"
              className=" outline outline-1 outline-wine-800/80 rounded-full px-3 md:py-1 w-36 md:w-48 py-0  lg:w-56 bg-wine-800/10 placeholder:text-wine-200 placeholder:text-xs"
            />
          </form>
          <div className="flex items-center md:gap-12 gap-4 ">
            <span className="rounded-full border border-wine-900 md:p-2 p-1 text-sm md:text-base">
              <FaLessThan />
            </span>
            <span className="rounded-full border border-wine-900 md:p-2 p-1 text-sm md:text-base">
              <FaGreaterThan />
            </span>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-2 lg:grid-cols-3  gap-x-4  md:gap-y-10  gap-y-5">
        {WineProducts.map((wine) => (
          <ProductContainer key={wine.productId} wine={wine} />
        ))}
      </section>
      <div className="flex items-center justify-center gap-10 lg:gap-20 my-10 mb-16  border-t border-b border-newgray-200/30 w-1/3 md:w-2/3 lg:w-full mx-auto">
        <span>
          <FaLessThan />
        </span>
        <ul className="productNav flex justify-center font-medium text-lg text-wine-900 gap-7">
          <li className="border-t border-b border-wine-900">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
        <span>
          <FaGreaterThan />
        </span>
      </div>
    </section>
  );
}
