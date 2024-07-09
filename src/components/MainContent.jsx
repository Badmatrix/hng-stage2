import ProductContents from "./ProductContents";
import Sidenav from "./Sidenav";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";

export default function MainContent() {
  return (
    
      

      <div className="md:grid lg:grid-cols-4 lg:gap-16 mx-5">
        <Sidenav />
        <ProductContents />
      </div>
    
  );
}
