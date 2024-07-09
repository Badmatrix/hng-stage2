/* eslint-disable react/prop-types */
import ImageText from "./ImageText";
import Navbar from "./Navbar";

export default function Header({carts}) {
  return (
    <header className="relative w-full bg-wine-400 h-[300px]">
      <img
        src="/public/images/deleece-cook-1w8GFi871tg-unsplash.jpg"
        alt="nav-image"
        className="h-full w-full object-cover"
      />
      <ImageText/>
      <Navbar carts={carts} />
    </header>
  );
}
