import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import SearchForm from "./SearchForm";

export default function Navbar() {
  const [isHiddenForm, setIsHiddenForm] = useState(true);
  function handleClick() {
    setIsHiddenForm((hidden) => !hidden);
  }
  return (
    <div className="md:flex md:justify-between md:items-center bg-wine-700/75  absolute  top-0 w-full  px-5  py-2 pb-10 md:pb-7 lg:pb-5 ">
      <NavLinks handleClick={handleClick} />
      <Logo className={"w-48 md:w-52 lg:w-64 xl:w-72"} />
      <SearchForm handleClick={handleClick} isHiddenForm={isHiddenForm} />
    </div>
  );
}
