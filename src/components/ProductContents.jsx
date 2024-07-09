import ProductContainer from "./ProductContainer";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import WineProducts from "../WineProducts";

export default function ProductContents() {
  return (
    <section className=" lg:col-span-3">
      <div>form / scroll</div>
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
