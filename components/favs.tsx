import { Dispatch, SetStateAction } from "react";
import Drawer from "./ui/drawer";
import { useShop } from "../context/ShopContext";

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
          <p key={item.id}>{item.titulo}</p>
        ))}
      </div>
    </Drawer>
  );
}
