import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

export default function CartInNav() {
  return (
    <div className=" flex gap-3 items-center">
      <div className="icon">
        <BsCart3 className="text-newgray-200" />
      </div>
      <div className="icon">
        <FaRegUser className="text-newgray-200" />
      </div>
    </div>
  );
}
