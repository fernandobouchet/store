import { Card, CardBody } from "@nextui-org/react";
import { product } from "../types";
import Image from "next/image";

interface Props {
  product: product;
}
export default function SingleProductSmallCard({ product }: Props) {
  return (
    <Card isBlurred className="w-full border-none bg-inherit h-20" shadow="sm">
      <CardBody className="p-0">
        <div className="flex h-full items-center">
          <div className="flex relative overflow-hidden w-full lg:w-16 h-16 bg-white rounded-xl">
            <Image
              alt={`${product.titulo} imagen.`}
              className="absolute object-contain rounded-3xl"
              fill
              src={product.imagen}
            />
          </div>
          <div className="flex px-4 gap-4">
            <h2 className="text-base font-semibold text-foreground">
              {product.titulo}
            </h2>
            <span className="text-default-900 text-base font-semibold">
              ${product.precio.toLocaleString()}
            </span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
