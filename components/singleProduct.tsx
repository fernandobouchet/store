import React, { useState } from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import { FaCartPlus } from "react-icons/fa6";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

import { product } from "../types";
import Image from "next/image";
import ProductRating from "./ui/productRating";
import { useShop } from "../context/ShopContext";

interface Props {
  product: product;
}

export default function SingleProduct({ product }: Props) {
  const {
    favourites,
    cart,
    addFavourite,
    removeFavourite,
    addToCart,
    removeFromCart,
  } = useShop();

  const [liked, setLiked] = useState<product | null>(
    favourites.find((item) => item.id === product.id) ? product : null
  );

  const handleFavourite = (product: product) => {
    if (favourites.find((item) => item.id === product.id)) {
      removeFavourite(product);
      setLiked(null);
    } else {
      addFavourite(product);
      setLiked(product);
    }
  };

  const handleCart = (product: product) => {
    if (cart.find((item) => item.id === product.id)) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <Card
      isBlurred
      className="w-full border-none bg-inherit h-full p-0"
      shadow="sm"
    >
      <CardBody className="p-0">
        <div className="flex flex-col lg:flex-row">
          <div className="relative overflow-hidden w-full lg:w-96 h-96 bg-white rounded-xl">
            <Image
              alt={`${product.titulo} imagen.`}
              className="absolute object-contain rounded-3xl"
              fill
              sizes="(min-width: 808px) 50vw, 100vw"
              src={product.imagen}
            />
          </div>
          <div className="flex flex-col p-8 flex-grow">
            <Button
              isIconOnly
              className="ml-auto"
              radius="full"
              variant="light"
              onPress={() => handleFavourite(product)}
            >
              {liked ? (
                <IoIosHeart className="w-6 h-6" fill="#005bee" />
              ) : (
                <IoIosHeartEmpty
                  className={
                    liked ? "w-6 h-6" : "w-6 h-6 stroke-[#005bee] stroke-[1rem]"
                  }
                />
              )}
            </Button>
            <div className="flex flex-col mb-8 gap-3">
              <h1 className="text-2xl font-semibold text-foreground">
                {product.titulo}
              </h1>
              <div className="flex items-center">
                <ProductRating rating={product.rating} />
                <span className="ml-2 text-small text-foreground/80">
                  ({product.rating})
                </span>
              </div>
              <p className="text-small text-foreground/80">
                Stock: {product.stock}.
              </p>
              <p className="text-medium font-medium">
                {product.descripcion.en}
              </p>
              <span className="text-default-900 text-large font-semibold">
                ${product.precio.toLocaleString()}
              </span>
            </div>
            <Button
              color="primary"
              variant="shadow"
              className="mt-auto"
              onPress={() => handleCart(product)}
            >
              <FaCartPlus /> Add to cart
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
