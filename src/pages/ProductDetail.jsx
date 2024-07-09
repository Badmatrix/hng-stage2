import { useParams } from "react-router-dom";
import WineProducts from "../WineProducts";
import ResultInfo from "../components/ResultInfo";
import ResultDetail from "../components/ResultDetail";


export default function ProductDetail() {
  const { id } = useParams();
  const result = WineProducts.find((wine) => wine.productId === Number(id));
  return (
    <section className="mx-7 my-10 ">
          <ResultInfo result={result} />
          <ResultDetail result={ result} />
    </section>
  );
}
