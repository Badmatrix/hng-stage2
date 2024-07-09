/* eslint-disable react/prop-types */

export default function CartItem({item}) {
  return (
    <li className="flex items-center my-5 gap-4 border-b border-gray-100 py-3 ">
      <div className="bg-wine-100 shadow-sm shadow-newgray-100 border-newgray-100 rounded-lg px-3 py-3 lg:w-40 md:w-32 w-32 flex justify-center">
        <img src={item.image} alt={item.productName} className="" />
      </div>
      <div className="text-wine-700 md:text-lg text-sm md:font-bold font-semibold text-center">
        <h1 className="  capitalize ">
          {item.productName} | {item.brand} | {item.alcoholPerc} |
          {item.quantity} CL
        </h1>
        <h2 className=" ">NGN {item.price.toLocaleString()}</h2>
      </div>
    </li>
  );
}
