/* eslint-disable react/prop-types */
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function CartInNav({ carts }) {
  const num = carts.length;
  return (
    <div className=" flex gap-3 items-center relative">
      <NavLink to="/cart">
        <div className="icon ">
          <BsCart3 className="text-newgray-200" />
          {num === 0 ? (
            ""
          ) : (
            <div className="flex justify-center items-center align-middle">
              <p
                className="  -top-3 text-white text-xs font-bold bg-notify/90
             rounded-full md:w-6 md:h-6 w-5 h-5 text-center left-5 absolute aspect-square"
              >
                {num}
              </p>
            </div>
          )}
        </div>
      </NavLink>
      <div className="icon">
        <FaRegUser className="text-newgray-200" />
      </div>
    </div>
  );
}
