/* eslint-disable react/prop-types */
import { BsCart3 } from "react-icons/bs";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";
export default function ProductContainer({ wine }) {
  return (
    <div className="relative h-[340px] md:h-[360px] bg-wine-100 col-span-1 capitalize border-2 border-newgray-600 shadow-md shadow-newgray-600 rounded-lg overflow-hidden md:w-[87%] mx-auto w-[95%] lg:w-full pt-3 ">
      <Link to={`/details/${wine.productId}`}>
        <div className="flex justify-center">
          <img src={wine.image} alt={wine.name} className="max-w-full " />
        </div>
        <div className="absolute bottom-0 bg-newgray-600  px-3 py-2 m-1 rounded-lg  font-bold h-[35%] lg:h-2/5 left-0 right-0">
          <div className=" flex justify-between items-end ">
            <h3 className="py-2 text-xs md:text-lg">
              {wine.productName} | {wine.brand} | {wine.alcoholPerc} |
              {wine.quantity} cl
            </h3>
            <div className="text-xs flex justify-end gap-x-1">
              {wine.ratings || 4.5}
              <span>
                <MdOutlineStar className=" text-yellow-400 text-sm" />
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center ">
            <h5 className="  font-medium text-xs sm:text-sm md:text-base">
              {wine.price} NGN
            </h5>
            <div className="">
              <div className=" rounded-full flex p-1  border border-wine-700 ">
                <BsCart3 className="text-wine-1000 font-light text-xs" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

