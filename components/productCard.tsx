import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { product } from "../types";
import Image from "next/image";

interface Props {
  product: product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card className="py-4 lg:max-w-md">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{product.titulo}</h4>
      </CardHeader>
      <CardBody className="relative py-2 overflow-hidden w-80 h-80 bg-white">
        <Image
          alt="Card background"
          className="absolute object-contain rounded-xl"
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          src={product.imagen}
        />
      </CardBody>
    </Card>
  );
}
