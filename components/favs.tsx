import { Dispatch, SetStateAction } from "react";
import Drawer from "./ui/drawer";
import { useShop } from "../context/ShopContext";
import SingleProductSmallCard from "./singleProductSmallCard";

interface Props {
  isFavOpen: boolean;
  setIsFavOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
}

export default function Favs({ isFavOpen, setIsFavOpen, title }: Props) {
  const { favourites } = useShop();

  return (
    <Drawer isCartOpen={isFavOpen} setIsCartOpen={setIsFavOpen} title={title}>
      <div>
        {favourites.map((item) => (
          <SingleProductSmallCard key={item.id} product={item} />
        ))}
      </div>
    </Drawer>
  );
}
