/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import WineProducts from "../WineProducts";
import ResultInfo from "../components/ResultInfo";
import ResultDetail from "../components/ResultDetail";
// import Button from "../components/Button";

export default function ProductDetail({
  carts,
  handleAddtoCart,
  cartBtnState,
}) {
  const { id } = useParams();
  const result = WineProducts.find((wine) => wine.productId === Number(id));
  window.scroll(0,0);
  return (
    <section className="mx-7 my-10 ">
      <ResultInfo
        result={result}
        carts={carts}
        handleAddtoCart={handleAddtoCart}
        cartBtnState={cartBtnState}
      />
      <ResultDetail result={result} />
    </section>
  );
}
