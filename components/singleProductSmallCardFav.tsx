import SingleProductSmallCard from "./singleProductSmallCard";
import { Button } from "@nextui-org/react";
import { product } from "../types";
import { IoMdTrash } from "react-icons/io";
import { useShop } from "../context/ShopContext";

interface Props {
  product: product;
  children?: React.ReactElement;
}

export default function SingleProductSmallCardFav({ product }: Props) {
  const { removeFavourite } = useShop();

  return (
    <SingleProductSmallCard product={product}>
      <div className="flex items-center mx-auto">
        <Button
          isIconOnly
          color="danger"
          variant="light"
          onPress={() => removeFavourite(product)}
          aria-label="Remove item"
        >
          <IoMdTrash className="h-4 w-4" />
        </Button>
      </div>
    </SingleProductSmallCard>
  );
}
