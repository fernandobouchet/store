import { product } from "../types";
import SingleProduct from "./singleProduct";

interface Props {
  product: product;
}

export default function SingleProductPageContainer({ product }: Props) {
  return (
    <div className="container w-full flex mx-auto mt-10 max-w-4xl">
      <SingleProduct product={product} />
    </div>
  );
}
