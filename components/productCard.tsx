import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { product } from "../types";

interface Props {
  product: product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card className="py-4 lg:max-w-md">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <h4 className="font-bold text-large">{product.titulo}</h4>
      </CardHeader>
      <CardBody className="relative py-2 overflow-hidden">
        <Image
          alt="Card background"
          className="object-cover rounded-xl w-full"
          src={product.imagen}
        />
      </CardBody>
    </Card>
  );
}
