import CartInNav from "./CartInNav";
import BarIcon from "./BarIcon";

export default function SearchForm({isHiddenForm,handleClick}) {
  
  return (
    <div className="flex justify-between md:gap-5 ">
      <div
        className="block md:hidden cursor-pointer font-extrabold text-3xl text-wine-900 lowercase"
        onClick={handleClick}
      >
        {isHiddenForm ? <BarIcon /> : 'x'}
      </div>
      <form action="" className={`${isHiddenForm ? "hidden" : "block"} lg:block`}>
        <input
          type="search"
          placeholder="search"
          className=" outline outline-1 outline-wine-800/80 rounded-full px-3 py-1  w-32 bg-wine-800/10 "
        />
      </form>

      <CartInNav />
    </div>
  );
}
