import SingleProductSmallCard from "./singleProductSmallCard";
import { Button, Card, CardBody, Input } from "@nextui-org/react";
import { product } from "../types";
import Image from "next/image";
import { IoMdTrash, IoMdAdd, IoMdRemove } from "react-icons/io";
import { useShop } from "../context/ShopContext";

interface Props {
  product: product;
  children?: React.ReactElement;
}

export default function SingleProductSmallCardCart({ product }: Props) {
  const { updateQuantity, removeFromCart } = useShop();

  return (
    <SingleProductSmallCard product={product}>
      <div className="flex items-center space-x-1 ml-auto">
        <Button
          isIconOnly
          size="sm"
          variant="flat"
          onPress={() => updateQuantity(product.id, product.cantidad - 1)}
          aria-label="Decrease quantity"
        >
          <IoMdRemove className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{product.cantidad}</span>
        <Button
          isIconOnly
          size="sm"
          variant="flat"
          onPress={() =>
            updateQuantity(
              product.id,
              product.cantidad ? product.cantidad + 1 : 1
            )
          }
          aria-label="Increase quantity"
        >
          <IoMdAdd className="h-4 w-4" />
        </Button>
        <Button
          isIconOnly
          color="danger"
          variant="light"
          onPress={() => removeFromCart(product)}
          aria-label="Remove item"
        >
          <IoMdTrash className="h-4 w-4" />
        </Button>
      </div>
    </SingleProductSmallCard>
  );
}
